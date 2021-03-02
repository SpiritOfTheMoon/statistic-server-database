import {
    Sequelize, DataTypes, Model,
} from "sequelize";
import { SystemTargetTargets } from "../models";

export function initSystemTargetTargets(
    sequelize: Sequelize,
): Model {

    const q = SystemTargetTargets.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "007", Sequelize.fn("newid")),
        },
        systemID: {
            allowNull: false,
            type: DataTypes.STRING(40),
            references: {
                model: "System",
                key: "id",
            },
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
        tableName: "SystemTargetTargets",
        timestamps: true,
        paranoid: true,
    });

    return q;

}
