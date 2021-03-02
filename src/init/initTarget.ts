import {
    Sequelize, DataTypes, Model, 
} from "sequelize";
import { Target } from "../models";

export function initTarget(
    sequelize: Sequelize,
): Model {

    const q = Target.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "003", Sequelize.fn("newid")),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,

        },
    }, {
        sequelize,
        tableName: "Target",
        timestamps: true,
        paranoid: true,
    });
    return q;

}
