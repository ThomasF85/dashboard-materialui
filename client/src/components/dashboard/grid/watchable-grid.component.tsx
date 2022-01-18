import React from 'react';
import { Button, Grid } from '@mui/material';
import { enterEditMode } from '../../../redux/dashboard.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectRows } from '../../../redux/dashboard.selectors';
import { Dispatch } from 'redux';
import { DashboardAction } from '../../../redux/type';
import GridCell from './grid-cell.component';

const WatchableGrid: React.FC = () => {
   const rows = useSelector(selectRows);
   const dispatch: Dispatch<DashboardAction> = useDispatch();

   return (
      <Grid container spacing={3} columns={12}>
         <Grid item xs={12}>
            <Grid container direction="row-reverse" spacing={1}>
               <Grid item>
                  <Button variant="contained" onClick={() => dispatch(enterEditMode())}>
                     edit
                  </Button>
               </Grid>
            </Grid>
         </Grid>
         {rows
            .map(row => row.columns)
            .flat()
            .map(column => (
               <GridCell key={column.id} column={column} editMode={false} />
            ))}
      </Grid>
   );
};

export default WatchableGrid;
