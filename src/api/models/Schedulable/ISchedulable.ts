type Recurrency = {
    year: number,
    month: number,
    week: number,
    weekDay: number,
}

export interface ISchedulable {
    startDate: Date;
    endDate: Date;

    reccurency: Recurrency;
}