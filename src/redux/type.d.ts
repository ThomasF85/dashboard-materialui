import {TRow} from "../common/type.def";

export type DashboardState = {
    rows: TRow[]
    edit: boolean,
    addWidgetModal: TAddWidgetModalState,
    latestNonEditedRows: TRow[],
};

export type DashboardAction = {
    type: string
    payload?: any
};

export type TAddWidgetModalState = {
    open: boolean,
    columnID: string,
    rowIndex: number
}