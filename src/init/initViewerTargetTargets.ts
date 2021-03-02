import {
    Sequelize, DataTypes, Model,
} from "sequelize";
import { ViewerTargetTargets } from "../models";

export function initViewerTargetTargets(
    sequelize: Sequelize,
): Model {

    const q = ViewerTargetTargets.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "006", Sequelize.fn("newid")),
        },
        viewerID: {
            allowNull: false,
            type: DataTypes.STRING(40),
            references: {
                model: "Viewer",
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
        tableName: "ViewerTargetTargets",
        timestamps: true,
        paranoid: true,
    });

    return q;

}
