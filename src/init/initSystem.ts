import { Sequelize, DataTypes, Model } from "sequelize"
import { System } from "../models";

export function initSystem(
    sequelize: Sequelize,
): Model {
    const q = System.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "001", Sequelize.fn("newid")),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,

        },
        description: {
            allowNull: true,
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        tableName: "System",
        timestamps: true,
        paranoid: true,
    });

    return q;

}
