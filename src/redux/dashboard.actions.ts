import { DashboardAction } from './type';
import { DashboardActionTypes } from './dashboard.types';
import { TRow, WidgetType } from '../common/type.def';

export const enterEditMode = (): DashboardAction => ({
    type: DashboardActionTypes.ENTER_EDIT_MODE,
});

export const cancelEditMode = (): DashboardAction => ({
    type: DashboardActionTypes.CANCEL_EDIT_MODE,
});

export const saveAndExitEditMode = (): DashboardAction => ({
    type: DashboardActionTypes.SAVE_AND_EXIT_EDIT_MODE,
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

export const addWidget = (columnID: string, rowIndex: number, type: WidgetType): DashboardAction => ({
    type: DashboardActionTypes.ADD_WIDGET,
    payload: { columnID, rowIndex, type },
});

export const openAddWidgetModal = (columnID: string, rowIndex: number): DashboardAction => ({
    type: DashboardActionTypes.OPEN_ADD_WIDGET_MODAL,
    payload: { columnID, rowIndex },
});

export const closeAddWidgetModal = (): DashboardAction => ({
    type: DashboardActionTypes.CLOSE_ADD_WIDGET_MODAL,
});

export const openAddRowModal = (): DashboardAction => ({
    type: DashboardActionTypes.OPEN_ADD_ROW_MODAL,
});

export const closeAddRowModal = (): DashboardAction => ({
    type: DashboardActionTypes.CLOSE_ADD_ROW_MODAL,
});

export const addRow = (row: TRow): DashboardAction => ({
    type: DashboardActionTypes.ADD_ROW,
    payload: { row },
});

export const deleteRow = (rowID: string): DashboardAction => ({
    type: DashboardActionTypes.DELETE_ROW,
    payload: { rowID },
});
