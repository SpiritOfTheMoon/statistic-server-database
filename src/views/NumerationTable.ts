import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';

export interface NumerationTableAttributes {
    tableName: string;
    primaryKeyColumn: string;
    NUMBER: string;
}

export type NumerationTableCreationAttributes = NumerationTableAttributes;

export class NumerationTable extends Model<NumerationTableAttributes, NumerationTableCreationAttributes> implements NumerationTableAttributes {

    tableName!: string;

    primaryKeyColumn: string;

    NUMBER: string;


    static initModel(sequelize: Sequelize.Sequelize): typeof NumerationTable {

        NumerationTable.init({
            tableName: {
                primaryKey: true,
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            primaryKeyColumn: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            NUMBER: {
                type: DataTypes.STRING(3),
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'NumerationTable',
            schema: 'dbo',
            timestamps: false,
        });
        return NumerationTable;

    }

}
