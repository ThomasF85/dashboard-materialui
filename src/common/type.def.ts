export enum WidgetType {
    SIMPLE_DELTA = "SIMPLE_DELTA",
    DOUGHNUT = "DOUGHNUT",
    BAR_CHART = "BAR_CHART",
}

export type TRow = {
    columns: TColumn[]
}

export type TColumn = {
    id: string
    xs: number
    sm: number
    md: number
    widgets: TWidget[]
}

export type TWidget = {
    id: string
    type: WidgetType
}