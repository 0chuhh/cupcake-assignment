import { IRates, Rates } from 'models/rates';
import {FC, useCallback, useLayoutEffect, useState} from 'react'
import api from 'services/api';
import { poll } from 'services/poll';
import { RatesCell } from '../rates-cell';

export interface IRatesRowsProps {
    pairNames:string[]
}

export const RatesRows:FC<IRatesRowsProps> = ({pairNames}) => {
    const [rates, setRates] = useState<IRates[]>([]);

    const appendAdditionalRates = (rates: IRates) => {
        const newRates = { ...rates };
        newRates.rates["RUB/USD"] = newRates.rates.RUB / newRates.rates.USD;
        newRates.rates["RUB/EUR"] = newRates.rates.RUB / newRates.rates.EUR;
        newRates.rates["EUR/USD"] = newRates.rates.EUR / newRates.rates.USD;
        return newRates;
    };

    const pollRates = useCallback(() => {
        poll(api.firstMarket.pollRates, (data) => {
            setRates(prev => prev.map(p => (
                p.name === 'first' ?
                    appendAdditionalRates({ ...p, ...data })
                    : p
            )));
        });
        poll(api.secondMarket.pollRates, (data) => {
            setRates(prev => prev.map(p => (
                p.name === 'second' ?
                    appendAdditionalRates({ ...p, ...data })
                    : p
            )));
        });
        poll(api.thirdMarket.pollRates, (data) => {
            setRates(prev => prev.map(p => (
                p.name === 'third' ?
                    appendAdditionalRates({ ...p, ...data })
                    : p
            )));
        });
    },[]);

    const getRates = useCallback(async () => {
        const { data: firstMarket } = await api.firstMarket.getLastRates();
        const { data: secondMarket } = await api.secondMarket.getLastRates();
        const { data: thirdMarket } = await api.thirdMarket.getLastRates();

        const newRates = [
            appendAdditionalRates({ name: "first", ...firstMarket }),
            appendAdditionalRates({ name: 'second', ...secondMarket }),
            appendAdditionalRates({ name: 'third', ...thirdMarket })
        ];

        setRates(newRates);
        pollRates();
    },[pollRates]);

    const getMinRateByPairName = (rates: IRates[], pairName: string) => {
        let minValue = rates[0].rates[pairName];
        for (let i = 0; i < rates.length; i++) {
            const element = rates[i].rates[pairName];
            if (element <= minValue) {
                minValue = element;
            }
        }
        return minValue;
    };

    useLayoutEffect(() => {
        getRates();
    }, [getRates]);

    return pairNames.map((name) => (
        <tr key={name}>
            <th>{name}{name in Rates && '/CUPCAKE'}</th>
            {
                rates.map(r => (
                    <RatesCell key={r.name} isSelected={getMinRateByPairName(rates, name) === r.rates[name]}>
                        {r.rates[name]?.toFixed(2)}
                    </RatesCell>
                ))
            }
        </tr>
    ))
}