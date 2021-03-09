import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';
import type { System, SystemId } from './System';

export interface BackendLogsAttributes {
    id: string;
    args?: string;
    date: Date;
    login: string;
    perfomance: number;
    query: string;
    resultType: string;
    systemId: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type BackendLogsPk = "id";
export type BackendLogsId = BackendLogs[BackendLogsPk];
export type BackendLogsCreationAttributes = Optional<BackendLogsAttributes, BackendLogsPk>;
export type BackendLogsAttributesTypeRowNumber = BackendLogsAttributes & {
    rowNumber: number;
};

export class BackendLogs extends Model<BackendLogsAttributes, BackendLogsCreationAttributes> implements BackendLogsAttributes {

    id!: string;

    args?: string;

    date!: Date;

    login!: string;

    perfomance!: number;

    query!: string;

    resultType!: string;

    systemId!: string;

    createdAt?: Date;

    updatedAt?: Date;

    deletedAt?: Date;

    // BackendLogs belongsTo System via systemId
    system!: System;

    getSystem!: Sequelize.BelongsToGetAssociationMixin<System>;

    setSystem!: Sequelize.BelongsToSetAssociationMixin<System, SystemId>;

    createSystem!: Sequelize.BelongsToCreateAssociationMixin<System>;

    static initModel(sequelize: Sequelize.Sequelize): typeof BackendLogs {

        BackendLogs.init({
            id: {
                type: DataTypes.STRING(40),
                allowNull: false,
                defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "002", Sequelize.fn("newid")),
                primaryKey: true,
                unique: "UQ__BackendL__3213E83E0E278593",
            },
            args: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            login: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            perfomance: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            query: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            resultType: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            systemId: {
                type: DataTypes.STRING(40),
                allowNull: false,
                references: {
                    model: 'System',
                    key: 'id',
                },
            },
        }, {
            sequelize,
            tableName: 'BackendLogs',
            schema: 'dbo',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PK__BackendL__3213E83F28751C2E",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
                {
                    name: "UQ__BackendL__3213E83E0E278593",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
            ],
        });
        return BackendLogs;

    }

}
