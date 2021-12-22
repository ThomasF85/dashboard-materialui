import React from 'react';
import { WidgetType } from '../../common/type.def';
import BarChart from './barchart/barchart.component';
import Doughnut from './doughnut/doughnut.component';
import SimpleDelta from './simpledelta/simple-delta.component';
import { WidgetProps } from './type.def';

const WIDGETS = new Map<WidgetType, React.FC<WidgetProps>>([
   [WidgetType.BAR_CHART, BarChart],
   [WidgetType.DOUGHNUT, Doughnut],
   [WidgetType.SIMPLE_DELTA, SimpleDelta]
]);

const WidgetComponent = (props: { widgetType: WidgetType; height: string }) => {
   if (WIDGETS.get(props.widgetType) === undefined) {
      console.error(`widget for type ${props.widgetType} cannot be found`);
      return null;
   }
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   const AWidget: React.FC<{ height: string }> = WIDGETS.get(props.widgetType);
   return <AWidget height={props.height} />;
};

export const Widget = React.memo(WidgetComponent);
