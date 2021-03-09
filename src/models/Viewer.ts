import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';

export interface ViewerAttributes {
    id: string;
    identifier: string;
    userInfo: string;
    compInfo: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type ViewerPk = "id";
export type ViewerId = Viewer[ViewerPk];
export type ViewerCreationAttributes = Optional<ViewerAttributes, ViewerPk>;

export class Viewer extends Model<ViewerAttributes, ViewerCreationAttributes> implements ViewerAttributes {

    id!: string;

    identifier!: string;

    userInfo!: string;

    compInfo!: string;

    createdAt?: Date;

    updatedAt?: Date;

    deletedAt?: Date;


    static initModel(sequelize: Sequelize.Sequelize): typeof Viewer {

        Viewer.init({
            id: {
                type: DataTypes.STRING(40),
                allowNull: false,
                defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "005", Sequelize.fn("newid")),
                primaryKey: true,
            },
            identifier: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userInfo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            compInfo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'Viewer',
            schema: 'dbo',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PK_Viewer",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
            ],
        });
        return Viewer;

    }

}
