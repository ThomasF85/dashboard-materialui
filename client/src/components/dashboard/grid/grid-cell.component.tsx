import React from 'react';
import { TColumn } from '../../../common/type.def';
import { Grid } from '@mui/material';
import WidgetContainer from '../../widgetcontainer/widget-container.component';

const GridCell: React.FC<GridCellProps> = (props: GridCellProps) => {
   const { column, editMode } = props;

   if (column.widgets.length === 1) {
      return (
         <Grid key={column.id} item xs={column.xs} sm={column.sm} md={column.md}>
            <WidgetContainer widget={column.widgets[0]} editMode={editMode} columnID={column.id} rowIndex={0} />
         </Grid>
      );
   } else {
      return (
         <Grid key={column.id} container item spacing={3} xs={column.xs} sm={column.sm} md={column.md}>
            <Grid key={column.id + 1} item xs={12}>
               <WidgetContainer widget={column.widgets[0]} editMode={editMode} columnID={column.id} rowIndex={0} />
            </Grid>
            <Grid key={column.id + 2} item xs={12}>
               <WidgetContainer widget={column.widgets[1]} editMode={editMode} columnID={column.id} rowIndex={1} />
            </Grid>
         </Grid>
      );
   }
};

type GridCellProps = {
   column: TColumn;
   editMode: boolean;
};

export default React.memo(GridCell);
