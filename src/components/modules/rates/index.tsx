import { MarketNames, Rates } from 'models/rates';
import { FC, useLayoutEffect, useState } from 'react';
import styles from './styles.module.scss';
import { RatesRows } from './rates-rows';

export const RatesModule: FC = () => {
    const [pairNames, setPairNames] = useState<string[]>([]);

    const getPairNames = () => {
        const pairNames = Object.keys(Rates);
        pairNames.push(`${Rates.RUB}/${Rates.USD}`);
        pairNames.push(`${Rates.RUB}/${Rates.EUR}`);
        pairNames.push(`${Rates.EUR}/${Rates.USD}`);
        setPairNames(pairNames);
    };

    

    useLayoutEffect(() => {
        getPairNames();
    }, []);

    return (
        <table className={styles.rates_table}>
            <thead>
                <tr>
                    <th>Pair name/market</th>
                    {
                        Object.values(MarketNames).map(mn => (
                            <th key={mn}>{mn}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                <RatesRows pairNames={pairNames} />
            </tbody>
        </table>
    );
};