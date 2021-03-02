import { Model } from "sequelize";

export type EventAttributesType = {

    id: string;
    name: string;
    targetID: string

};

export type EventCreationAttributesType = Omit<EventAttributesType, "id">;


export class Event extends Model<
    EventAttributesType,
    EventCreationAttributesType> {

}
