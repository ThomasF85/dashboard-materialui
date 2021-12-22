import React from 'react';
import { Card } from '@mui/material';
import { WidgetProps } from '../type.def';
import './empty-widget.styles.scss';

const EmptyWidget: React.FC<WidgetProps> = (props: WidgetProps) => {
   const { height } = props;

   return (
      <Card sx={{ height: height }}>
         <div className="empty-widget"></div>
      </Card>
   );
};

export default EmptyWidget;
