import {executeDeleteWidget, executeMoveRowDown, executeMoveRowUp, INITIAL_STATE} from "./dashboard.utils";
import {DashboardAction, DashboardState} from "./type";
import {DashboardActionTypes} from "./dashboard.types";

const dashboardReducer = (state = INITIAL_STATE, action: DashboardAction): DashboardState => {
    switch (action.type) {
        case DashboardActionTypes.ENTER_EDIT_MODE:
            return {
                ...state,
                edit: true,
            };
        case DashboardActionTypes.CANCEL_EDIT_MODE:
            return {
                ...state,
                edit: false,
            };
        case DashboardActionTypes.DELETE_WIDGET:
            return {
                ...state,
                rows: executeDeleteWidget(state.rows, action.payload.widgetID),
            };
        case DashboardActionTypes.MOVE_ROW_DOWN:
            return {
                ...state,
                rows: executeMoveRowDown(state.rows, action.payload.rowID),
            };
        case DashboardActionTypes.MOVE_ROW_UP:
            return {
                ...state,
                rows: executeMoveRowUp(state.rows, action.payload.rowID),
            };
        default:
            return state;
    }
};

export default dashboardReducer;