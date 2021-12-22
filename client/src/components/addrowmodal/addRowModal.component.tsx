import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAddRowModalOpen } from '../../redux/dashboard.selectors';
import { Dispatch } from 'redux';
import { DashboardAction } from '../../redux/type';
import Modal from '../modal/modal.component';
import { addRow, closeAddRowModal } from '../../redux/dashboard.actions';
import { Grid, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { ROW_TYPES } from '../../common/rowtypes.utils';

const style = {
   width: '470px',
   height: '160px',
   margin: '10px',
   border: '1px solid black',
   borderRadius: '5px',
   backgroundColor: 'white'
};

const AddRowModal: React.FC = () => {
   const open = useSelector(selectIsAddRowModalOpen);
   const dispatch: Dispatch<DashboardAction> = useDispatch();
   const [value, setValue] = useState(ROW_TYPES[0].name);
   const theme = useTheme();
   const selectedStyle = { ...style, border: `2px solid ${theme.palette.primary.light}` };

   return (
      <Modal
         open={open}
         closeModalCB={() => dispatch(closeAddRowModal())}
         headline="Add Row"
         saveButtonText="save"
         saveButtonCB={() => dispatch(addRow(ROW_TYPES.filter(rowType => rowType.name === value)[0].rowCreator()))}
      >
         <Grid item xs={12}>
            <Typography sx={{ mt: 2 }}>Select row type</Typography>
         </Grid>
         <Grid item xs={12} style={{ maxHeight: '600px', overflowY: 'scroll' }}>
            <ToggleButtonGroup
               orientation="vertical"
               value={value}
               exclusive
               onChange={(event, newValue) => {
                  if (newValue !== null) {
                     setValue(newValue);
                  }
               }}
            >
               {ROW_TYPES.map(rowType => (
                  <ToggleButton
                     key={rowType.name}
                     value={rowType.name}
                     style={value === rowType.name ? selectedStyle : style}
                  >
                     <img src={rowType.image} />
                  </ToggleButton>
               ))}
            </ToggleButtonGroup>
         </Grid>
      </Modal>
   );
};

export default AddRowModal;
