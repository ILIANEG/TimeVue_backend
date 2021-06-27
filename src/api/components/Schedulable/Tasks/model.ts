import {Schedulable} from '../Schedulable.interface'
const service = require('./service')

class Task implements Schedulable{
    id? : number;
    userID?: string;
    startDate: Date;
    endDate: Date;
    description: string;
    title: string;
    constructor(user: string, start: Date, end: Date, titl: string, desc: string) {
        this.userID = user;
        this.startDate = start;
        this.endDate = end;
        this.title = titl;
        this.description = desc;
    }
    schedule() {
        /* TODO */
        return 'Call to database service and return id'
    }
    isActive() {
        return new Date() < this.startDate
    }
    static getByID(): Task | boolean {

    }
    static getAllTasks(user: string, startDate?: Date, endDate?: Date): Task[] {
        
    }
}