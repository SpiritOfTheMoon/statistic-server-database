import { Model } from "sequelize";
export type NumerationTableAttributesType = {

    tableName: string;
    primaryKeyColumn: string;
    NUMBER: string;

};

export type NumerationTableAttributesTypeRowNumber = NumerationTableAttributesType & {
    rowNumber: number;
};

export type NumerationTableCreationAttibutesType = {};


export class NumerationTable extends Model<
    NumerationTableAttributesType,
    NumerationTableCreationAttibutesType> {

}

