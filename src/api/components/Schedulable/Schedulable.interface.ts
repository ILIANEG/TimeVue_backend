export interface Schedulable {
    startDate: Date;
    endDate: Date;
    title: string;
    schedule(): string;
}