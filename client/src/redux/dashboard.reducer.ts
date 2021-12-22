import {
   executeAddWidget,
   executeDeleteWidget,
   executeMoveRowDown,
   executeMoveRowUp,
   INITIAL_STATE
} from './dashboard.utils';
import { DashboardAction, DashboardState } from './type';
import { DashboardActionTypes } from './dashboard.types';

const dashboardReducer = (state = INITIAL_STATE, action: DashboardAction): DashboardState => {
   switch (action.type) {
      case DashboardActionTypes.ENTER_EDIT_MODE:
         return {
            ...state,
            latestNonEditedRows: state.rows,
            edit: true
         };
      case DashboardActionTypes.CANCEL_EDIT_MODE:
         return {
            ...state,
            rows: state.latestNonEditedRows,
            edit: false
         };
      case DashboardActionTypes.SAVE_AND_EXIT_EDIT_MODE:
         return {
            ...state,
            edit: false
         };
      case DashboardActionTypes.DELETE_WIDGET:
         return {
            ...state,
            rows: executeDeleteWidget(state.rows, action.payload.widgetID)
         };
      case DashboardActionTypes.MOVE_ROW_DOWN:
         return {
            ...state,
            rows: executeMoveRowDown(state.rows, action.payload.rowID)
         };
      case DashboardActionTypes.MOVE_ROW_UP:
         return {
            ...state,
            rows: executeMoveRowUp(state.rows, action.payload.rowID)
         };
      case DashboardActionTypes.ADD_WIDGET:
         return {
            ...state,
            rows: executeAddWidget(state.rows, action.payload.columnID, action.payload.rowIndex, action.payload.type),
            addWidgetModal: { open: false, columnID: '', rowIndex: 0 }
         };
      case DashboardActionTypes.OPEN_ADD_WIDGET_MODAL:
         return {
            ...state,
            addWidgetModal: { open: true, columnID: action.payload.columnID, rowIndex: action.payload.rowIndex }
         };
      case DashboardActionTypes.CLOSE_ADD_WIDGET_MODAL:
         return {
            ...state,
            addWidgetModal: { open: false, columnID: '', rowIndex: 0 }
         };
      case DashboardActionTypes.OPEN_ADD_ROW_MODAL:
         return {
            ...state,
            addRowModalOpen: true
         };
      case DashboardActionTypes.CLOSE_ADD_ROW_MODAL:
         return {
            ...state,
            addRowModalOpen: false
         };
      case DashboardActionTypes.ADD_ROW:
         return {
            ...state,
            rows: [...state.rows, action.payload.row],
            addRowModalOpen: false
         };
      case DashboardActionTypes.DELETE_ROW:
         return {
            ...state,
            rows: state.rows.filter(row => row.id !== action.payload.rowID)
         };
      default:
         return state;
   }
};

export default dashboardReducer;
