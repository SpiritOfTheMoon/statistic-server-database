import {
    Sequelize, DataTypes, Model,
} from "sequelize";
import { Viewer } from "../models";

export function initViewer(
    sequelize: Sequelize,
): Model {

    const q = Viewer.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "005", Sequelize.fn("newid")),
        },
        identifier: {
            allowNull: false,
            type: DataTypes.STRING,

        },
    }, {
        sequelize,
        tableName: "Viewer",
        timestamps: true,
        paranoid: true,
    });
    return q;

}
