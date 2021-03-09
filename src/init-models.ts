import type { Sequelize, Model } from "sequelize";
import { BackendLogs } from "./models";
import type { BackendLogsAttributes, BackendLogsCreationAttributes } from "./models";
import { Event } from "./models";
import type { EventAttributes, EventCreationAttributes } from "./models";
import { NumerationTable } from "./views";
import type { NumerationTableAttributes, NumerationTableCreationAttributes } from "./views";
import { System } from "./models";
import type { SystemAttributes, SystemCreationAttributes } from "./models";
import { Target } from "./models";
import type { TargetAttributes, TargetCreationAttributes } from "./models";
import { Viewer } from "./models";
import type { ViewerAttributes, ViewerCreationAttributes } from "./models";
import { ViewerTargetTargets } from "./models";
import type { ViewerTargetTargetsAttributes, ViewerTargetTargetsCreationAttributes }
    from "./models/ViewerTargetTargets";

export {
    BackendLogs,
    Event,
    NumerationTable,
    System,
    Target,
    Viewer,
    ViewerTargetTargets,
};

export type {
    BackendLogsAttributes,
    BackendLogsCreationAttributes,
    EventAttributes,
    EventCreationAttributes,
    NumerationTableAttributes,
    NumerationTableCreationAttributes,
    SystemAttributes,
    SystemCreationAttributes,
    TargetAttributes,
    TargetCreationAttributes,
    ViewerAttributes,
    ViewerCreationAttributes,
    ViewerTargetTargetsAttributes,
    ViewerTargetTargetsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {

    BackendLogs.initModel(sequelize);
    Event.initModel(sequelize);
    NumerationTable.initModel(sequelize);
    System.initModel(sequelize);
    Target.initModel(sequelize);
    Viewer.initModel(sequelize);
    ViewerTargetTargets.initModel(sequelize);

    BackendLogs.belongsTo(System, {
        as: "system",
        foreignKey: "systemId",
    });
    System.hasMany(BackendLogs, {
        as: "BackendLogs",
        foreignKey: "systemId",
    });
    Target.belongsTo(System, {
        as: "system",
        foreignKey: "systemID",
    });
    System.hasMany(Target, {
        as: "Targets",
        foreignKey: "systemID",
    });
    Event.belongsTo(Target, {
        as: "target",
        foreignKey: "targetID",
    });
    Target.hasMany(Event, {
        as: "Events",
        foreignKey: "targetID",
    });
    ViewerTargetTargets.belongsTo(Target, {
        as: "target",
        foreignKey: "targetID",
    });
    Target.hasMany(ViewerTargetTargets, {
        as: "ViewerTargetTargets",
        foreignKey: "targetID",
    });
    Event.belongsTo(Viewer, {
        as: "viewer",
        foreignKey: "viewerID",
    });
    Viewer.hasMany(Event, {
        as: "Events",
        foreignKey: "viewerID",
    });
    ViewerTargetTargets.belongsTo(Viewer, {
        as: "viewer",
        foreignKey: "viewerID",
    });
    Viewer.hasMany(ViewerTargetTargets, {
        as: "ViewerTargetTargets",
        foreignKey: "viewerID",
    });

    return {
        BackendLogs: BackendLogs,
        Event: Event,
        NumerationTable: NumerationTable,
        System: System,
        Target: Target,
        Viewer: Viewer,
        ViewerTargetTargets: ViewerTargetTargets,
    };

}
