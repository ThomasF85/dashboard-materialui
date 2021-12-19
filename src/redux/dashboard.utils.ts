import {TColumn, TRow, WidgetType} from "../common/type.def";
import {randomId} from "../common/utils";
import {DashboardState} from "./type";

const OneQuarterColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 6,
        md: 3,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

const OneThirdColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 12,
        md: 4,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

const OneHalfColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 6,
        md: 6,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

const FullColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 12,
        md: 12,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

const TwoThirdsBiggerColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 12,
        md: 8,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

const TwoThirdsSmallerColumn: (components: WidgetType[]) => TColumn = (components: WidgetType[]) => {
    return {
        id: randomId(),
        xs: 12,
        sm: 12,
        md: 4,
        widgets: components.map(type => { return { id: randomId(), type: type};})
    }
}

export const INITIAL_STATE: DashboardState = {
    rows: [
        {
            columns: [OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA])]
        },
        {
            columns: [TwoThirdsBiggerColumn([WidgetType.BAR_CHART]), TwoThirdsSmallerColumn([WidgetType.SIMPLE_DELTA, WidgetType.SIMPLE_DELTA])]
        },
        {
            columns: [OneThirdColumn([WidgetType.DOUGHNUT]), OneThirdColumn([WidgetType.SIMPLE_DELTA]), OneThirdColumn([WidgetType.SIMPLE_DELTA, WidgetType.SIMPLE_DELTA])]
        },
    ]
}
