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
            id: randomId(),
            columns: [OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA]), OneQuarterColumn([WidgetType.SIMPLE_DELTA])]
        },
        {
            id: randomId(),
            columns: [TwoThirdsBiggerColumn([WidgetType.BAR_CHART]), TwoThirdsSmallerColumn([WidgetType.SIMPLE_DELTA, WidgetType.SIMPLE_DELTA])]
        },
        {
            id: randomId(),
            columns: [OneThirdColumn([WidgetType.DOUGHNUT]), OneThirdColumn([WidgetType.SIMPLE_DELTA]), OneThirdColumn([WidgetType.SIMPLE_DELTA, WidgetType.SIMPLE_DELTA])]
        },
    ],
    edit: false
}

const deleteWidgetIfPresent: (row: TRow, widgetID: string) => TRow = (row: TRow, widgetID: string) => {
    if (row.columns.filter(column => column.widgets.filter(widget => widget !== null && widget.id === widgetID).length > 0).length > 0) {
        return {
            ...row,
            columns: row.columns.map(column => {
                if (column.widgets.filter(widget => widget !== null && widget.id === widgetID).length > 0) {
                    return {
                      ...column,
                        widgets: column.widgets.map(widget => widget !== null && widget.id === widgetID ? null : widget),
                    }
                }
                return column;
            })
        }
    }
    return row;
}

export const executeDeleteWidget: (rows: TRow[], widgetID: string) => TRow[] = (rows: TRow[], widgetID: string) => {
    return rows.map(row => deleteWidgetIfPresent(row, widgetID));
}

export const executeMoveRowDown: (rows: TRow[], rowID: string) => TRow[] = (rows: TRow[], rowID: string) => {
    const order: number[] = Array.from(Array(rows.length).keys())
    console.log(order[0], order[1], order[2]);
    for (let i = 0; i < rows.length - 1; i++) {
        if (rows[i].id === rowID) {
            order[i] = i + 1;
            order[i + 1] = i;
        }
    }
    console.log(order);
    return order.map(i => rows[i]);
}

export const executeMoveRowUp: (rows: TRow[], rowID: string) => TRow[] = (rows: TRow[], rowID: string) => {
    const order: number[] = Array.from(Array(rows.length).keys())
    console.log(order[0], order[1], order[2]);
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].id === rowID) {
            order[i - 1] = i;
            order[i] = i - 1;
        }
    }
    console.log(order);
    return order.map(i => rows[i]);
}
