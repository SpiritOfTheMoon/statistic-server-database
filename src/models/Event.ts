import Sequelize, {
    DataTypes, Model, Optional,
} from 'sequelize';
import type { Target, TargetId } from './Target';
import type { Viewer, ViewerId } from './Viewer';

export interface EventAttributes {
    id: string;
    name: string;
    targetID: string;
    viewerID: string;
    time: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export type EventPk = "id";
export type EventTime = "time";
export type EventId = Event[EventPk];
export type EventCreationAttributes = Optional<Optional<EventAttributes, EventPk>, EventTime>;

export class Event extends Model<EventAttributes, EventCreationAttributes> implements EventAttributes {

    id!: string;

    name!: string;

    targetID!: string;

    viewerID!: string;

    time!: Date;

    createdAt?: Date;

    updatedAt?: Date;

    deletedAt?: Date;

    // Event belongsTo Target via targetID
    target!: Target;

    getTarget!: Sequelize.BelongsToGetAssociationMixin<Target>;

    setTarget!: Sequelize.BelongsToSetAssociationMixin<Target, TargetId>;

    createTarget!: Sequelize.BelongsToCreateAssociationMixin<Target>;

    // Event belongsTo Viewer via viewerID
    viewer!: Viewer;

    getViewer!: Sequelize.BelongsToGetAssociationMixin<Viewer>;

    setViewer!: Sequelize.BelongsToSetAssociationMixin<Viewer, ViewerId>;

    createViewer!: Sequelize.BelongsToCreateAssociationMixin<Viewer>;

    static initModel(sequelize: Sequelize.Sequelize): typeof Event {

        Event.init({
            id: {
                defaultValue: Sequelize.fn("[dbo].[GETUMKUUID]", "004", Sequelize.fn("newid")),
                type: DataTypes.STRING(40),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            targetID: {
                type: DataTypes.STRING(40),
                allowNull: false,
                references: {
                    model: 'Target',
                    key: 'id',
                },
            },
            viewerID: {
                type: DataTypes.STRING(40),
                allowNull: false,
                references: {
                    model: 'Viewer',
                    key: 'id',
                },
            },
            time: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("GETDATE"),
            },
        }, {
            sequelize,
            tableName: 'Event',
            schema: 'dbo',
            timestamps: true,
            paranoid: true,
            indexes: [
                {
                    name: "PK_Event",
                    unique: true,
                    fields: [
                        {
                            name: "id",
                        },
                    ],
                },
            ],
        });
        return Event;

    }

}
