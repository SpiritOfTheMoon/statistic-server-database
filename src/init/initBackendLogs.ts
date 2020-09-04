import { Sequelize, DataTypes, Model } from "sequelize"
import { BackendLogs, System } from "../models"

export function initBackendLogs(
    sequelize: Sequelize,
): Model {
    const q = BackendLogs.init({
        id: {
            allowNull: false,
            type: DataTypes.STRING(40),
            unique: true,
            primaryKey: true,
            defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "002", Sequelize.fn("newid")),
        },
        args: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        login: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        perfomance: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        query: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        result: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        resultType: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        systemId: {
            allowNull: false,
            type: DataTypes.STRING(40),
            references: {
                model: "System",
                key: "id",
            }
        },
    }, {
        sequelize,
        tableName: "BackendLogs",
        timestamps: true,
        paranoid: true,
    });

    return q;

}
