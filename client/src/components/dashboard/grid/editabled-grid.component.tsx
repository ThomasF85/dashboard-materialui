import React from 'react';
import { Button, Divider, Grid, IconButton, useTheme } from '@mui/material';
import {
   cancelEditMode,
   deleteRow,
   moveRowDown,
   moveRowUp,
   openAddRowModal,
   saveAndExitEditMode
} from '../../../redux/dashboard.actions';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { selectRows } from '../../../redux/dashboard.selectors';
import { Dispatch } from 'redux';
import { DashboardAction } from '../../../redux/type';
import GridCell from './grid-cell.component';

const EditabledGrid: React.FC = () => {
   const rows = useSelector(selectRows);
   const theme = useTheme();
   const dispatch: Dispatch<DashboardAction> = useDispatch();

   return (
      <Grid container spacing={3}>
         <Grid item xs={12}>
            <Grid container direction="row-reverse" spacing={1}>
               <Grid item>
                  <Button variant="contained" onClick={() => dispatch(cancelEditMode())}>
                     cancel
                  </Button>
               </Grid>
               <Grid item>
                  <Button variant="contained" onClick={() => dispatch(saveAndExitEditMode())}>
                     save
                  </Button>
               </Grid>
               <Grid item>
                  <Button variant="contained" onClick={() => dispatch(openAddRowModal())}>
                     Add row
                  </Button>
               </Grid>
            </Grid>
         </Grid>
         {rows
            .map((row, index) => {
               const columns: any = [
                  <Grid item key={row.id + '1'} style={{ width: 'calc(100% - 75px)' }}>
                     <Grid container spacing={3}>
                        {row.columns.map(column => (
                           <GridCell key={column.id} column={column} editMode />
                        ))}
                     </Grid>
                  </Grid>
               ];
               columns.push(
                  <Grid item key={row.id + '2'} style={{ width: '75px' }}>
                     <div
                        style={{
                           backgroundColor: theme.palette.grey['300'],
                           width: '50px',
                           height: 'calc(100% - 30px)',
                           marginTop: '8px',
                           display: 'flex',
                           flexDirection: 'column'
                        }}
                     >
                        <div style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-start' }}>
                           <IconButton onClick={() => dispatch(moveRowUp(row.id))} color="primary">
                              <ArrowUpwardIcon fontSize="large" />
                           </IconButton>
                        </div>
                        <IconButton onClick={() => dispatch(deleteRow(row.id))} color="error">
                           <DeleteForeverIcon fontSize="large" />
                        </IconButton>
                        <div style={{ display: 'flex', flex: '1 0 auto', alignItems: 'flex-end' }}>
                           <IconButton onClick={() => dispatch(moveRowDown(row.id))} color="primary">
                              <ArrowDownwardIcon fontSize="large" />
                           </IconButton>
                        </div>
                     </div>
                  </Grid>
               );
               if (index !== rows.length - 1) {
                  columns.push(
                     <Grid item key={'divider' + index} xs={12}>
                        <Divider style={{ marginBottom: '15px' }} />
                     </Grid>
                  );
               }
               return columns;
            })
            .flat()}
      </Grid>
   );
};

export default EditabledGrid;
