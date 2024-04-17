export enum MarketNames {
    "first"="first market",
    "second"="second market",
    "third"="third market",
}

export enum Rates {
    "RUB"="RUB",
    "USD"="USD",
    "EUR"="EUR",
}

export interface IRates {
    name?: keyof typeof MarketNames;
    base: string;
    date: string;
    rates: {[key in keyof typeof Rates as string]:number}
    timestamp:number
}