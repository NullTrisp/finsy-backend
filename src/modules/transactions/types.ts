export type transaction = {
    date: Date,
    amount: number
};

export type transfer = transaction & {
    from: string,
    to: string
};

