export enum WidgetType {
    SIMPLE_DELTA = 'SIMPLE_DELTA',
    DOUGHNUT = 'DOUGHNUT',
    BAR_CHART = 'BAR_CHART',
}

export type TRow = {
    id: string;
    columns: TColumn[];
};

export type TColumn = {
    id: string;
    xs: number;
    sm: number;
    md: number;
    widgets: Array<TWidget | null>;
};

export type TWidget = {
    id: string;
    type: WidgetType;
};

export type TRowType = {
    name: string;
    image: any;
    rowCreator: () => TRow;
};
