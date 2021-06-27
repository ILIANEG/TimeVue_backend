export class ScheduleError extends Error {
    status: number;
    errorCode: number;
    constructor(status: number, msg: string, errorCode: number) {
        super(msg);
        this.status = status;
        this.errorCode = errorCode
    }
}