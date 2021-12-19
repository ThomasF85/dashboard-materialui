import {DashboardAction} from "./type";
import {DashboardActionTypes} from "./dashboard.types";

export const enterEditMode = (): DashboardAction => ({
    type: DashboardActionTypes.ENTER_EDIT_MODE,
});

export const cancelEditMode = (): DashboardAction => ({
    type: DashboardActionTypes.CANCEL_EDIT_MODE,
});

export const deleteWidget = (widgetID: string): DashboardAction => ({
    type: DashboardActionTypes.DELETE_WIDGET,
    payload: { widgetID },
});

export const moveRowDown = (rowID: string): DashboardAction => ({
    type: DashboardActionTypes.MOVE_ROW_DOWN,
    payload: { rowID },
});

export const moveRowUp = (rowID: string): DashboardAction => ({
    type: DashboardActionTypes.MOVE_ROW_UP,
    payload: { rowID },
});