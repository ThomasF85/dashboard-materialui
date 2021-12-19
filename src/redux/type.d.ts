import {TRow} from "../common/type.def";

export type DashboardState = {
    rows: TRow[]
    edit: boolean
};

export type DashboardAction = {
    type: string
    payload?: any
};