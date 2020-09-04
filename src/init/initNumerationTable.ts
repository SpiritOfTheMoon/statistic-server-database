import { Sequelize, DataTypes, Model } from "sequelize"
import { NumerationTable } from "../views";

export function initNumerationTable(
    sequelize: Sequelize,
): Model {
    const q = NumerationTable.init({
        tableName: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.STRING,
        },
        primaryKeyColumn: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        NUMBER: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        tableName: "NumerationTable",
        freezeTableName: true,
        timestamps: false,
    });

    return q;

}
