import React from "react";
import {WidgetType} from "../../common/type.def";
import BarChart from "./barchart/barchart.component";
import Doughnut from "./doughnut/doughnut.component";
import SimpleDelta from "./simpledelta/simple-delta.component";

const WIDGETS = new Map<WidgetType, React.FC>([
    [WidgetType.BAR_CHART, BarChart],
    [WidgetType.DOUGHNUT, Doughnut],
    [WidgetType.SIMPLE_DELTA, SimpleDelta],
]);

const WidgetComponent = (props: { widgetType: WidgetType }) => {
    if (WIDGETS.get(props.widgetType) === undefined) {
        console.error(`widget for type ${props.widgetType} cannot be found`);
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const AWidget: React.FC = WIDGETS.get(props.widgetType);
    return <AWidget />;
};

export const Widget = React.memo(WidgetComponent);