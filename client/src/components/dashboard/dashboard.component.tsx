import React from 'react';
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsEditMode } from '../../redux/dashboard.selectors';
import AddWidgetModal from '../addwidgetmodal/add-widget-modal.component';
import AddRowModal from '../addrowmodal/addRowModal.component';
import WatchableGrid from './grid/watchable-grid.component';
import EditabledGrid from './grid/editabled-grid.component';

const Dashboard: React.FC = () => {
   const editMode = useSelector(selectIsEditMode);

   return (
      <Box
         sx={{
            flexGrow: 1,
            py: 2
         }}
      >
         <Container maxWidth={false}>{editMode ? <EditabledGrid /> : <WatchableGrid />}</Container>
         <AddWidgetModal />
         <AddRowModal />
      </Box>
   );
};

export default Dashboard;
