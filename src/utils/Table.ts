type Fields<IModel> = {
    [K in keyof IModel]: string;
}

export default class Table<IModel> {
    constructor(
        public name: string,
        public labels: Fields<IModel>
    ) {
        this.name = name;
        this.labels = labels;
    }
}