import {
    Sequelize, DataTypes, Model,
} from "sequelize";
import { Event } from "../models";

export function initEvent(
    sequelize: Sequelize,
): Model {

    const q = Event.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "004", Sequelize.fn("newid")),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        targetID: {
            allowNull: false,
            type: DataTypes.STRING(40),
            references: {
                model: "Target",
                key: "id",
            },
        },
    }, {
        sequelize,
        tableName: "Event",
        timestamps: true,
        paranoid: true,
    });

    return q;

}
