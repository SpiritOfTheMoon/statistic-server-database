import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';
import type { Target, TargetId } from './Target';
import type { Viewer, ViewerId } from './Viewer';

export interface ViewerTargetTargetsAttributes {
    id: string;
    viewerID: string;
    targetID: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type ViewerTargetTargetsPk = "id";
export type ViewerTargetTargetsId = ViewerTargetTargets[ViewerTargetTargetsPk];
export type ViewerTargetTargetsCreationAttributes = Optional<ViewerTargetTargetsAttributes, ViewerTargetTargetsPk>;

export class ViewerTargetTargets extends Model<ViewerTargetTargetsAttributes, ViewerTargetTargetsCreationAttributes> implements ViewerTargetTargetsAttributes {

    id!: string;

    viewerID!: string;

    targetID!: string;

    createdAt?: Date;

    updatedAt?: Date;

    deletedAt?: Date;

    // ViewerTargetTargets belongsTo Target via targetID
    target!: Target;

    getTarget!: Sequelize.BelongsToGetAssociationMixin<Target>;

    setTarget!: Sequelize.BelongsToSetAssociationMixin<Target, TargetId>;

    createTarget!: Sequelize.BelongsToCreateAssociationMixin<Target>;

    // ViewerTargetTargets belongsTo Viewer via viewerID
    viewer!: Viewer;

    getViewer!: Sequelize.BelongsToGetAssociationMixin<Viewer>;

    setViewer!: Sequelize.BelongsToSetAssociationMixin<Viewer, ViewerId>;

    createViewer!: Sequelize.BelongsToCreateAssociationMixin<Viewer>;

    static initModel(sequelize: Sequelize.Sequelize): typeof ViewerTargetTargets {

        ViewerTargetTargets.init({
            id: {
                defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "006", Sequelize.fn("newid")),
                type: DataTypes.STRING(40),
                allowNull: false,
                primaryKey: true,
            },
            viewerID: {
                type: DataTypes.STRING(40),
                allowNull: false,
                references: {
                    model: 'Viewer',
                    key: 'id',
                },
            },
            targetID: {
                type: DataTypes.STRING(40),
                allowNull: false,
                references: {
                    model: 'Target',
                    key: 'id',
                },
            },
        }, {
            sequelize,
            tableName: 'ViewerTargetTargets',
            schema: 'dbo',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PK_ViewerTargetTargets",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
            ],
        });
        return ViewerTargetTargets;

    }

}
