export interface ICrud<DataType, IdType> {
    read(): Promise<Array<DataType>>;
    readById(id: IdType): Promise<DataType>;
    create(entity: DataType): Promise<DataType>;
    update(id: IdType, user: DataType): Promise<DataType>;
    delete(id: IdType): Promise<DataType>;
}