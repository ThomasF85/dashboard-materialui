import {INITIAL_STATE} from "./dashboard.utils";
import {DashboardAction, DashboardState} from "./type";

const dashboardReducer = (state = INITIAL_STATE, action: DashboardAction): DashboardState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dashboardReducer;