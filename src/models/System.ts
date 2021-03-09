import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';

export interface SystemAttributes {
    id: string;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type SystemPk = "id";
export type SystemId = System[SystemPk];
export type SystemCreationAttributes = Optional<SystemAttributes, SystemPk>;

export class System extends Model<SystemAttributes, SystemCreationAttributes> implements SystemAttributes {

    id!: string;

    name!: string;

    description?: string;

    createdAt?: Date;

    updatedAt?: Date;

    deletedAt?: Date;


    static initModel(sequelize: Sequelize.Sequelize): typeof System {

        System.init({
            id: {
                type: DataTypes.STRING(40),
                allowNull: false,
                defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "001", Sequelize.fn("newid")),
                primaryKey: true,
                unique: "UQ__System__3213E83E53D2F673",
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: 'System',
            schema: 'dbo',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PK__System__3213E83F182F1EA7",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
                {
                    name: "UQ__System__3213E83E53D2F673",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
            ],
        });
        return System;

    }

}
