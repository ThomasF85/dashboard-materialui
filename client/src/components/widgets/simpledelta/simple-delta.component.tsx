import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { WidgetProps } from '../type.def';

const SimpleDelta: React.FC<WidgetProps> = (props: WidgetProps) => {
   const { height } = props;

   return (
      <Card sx={{ height: height }}>
         <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
               <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="overline">
                     BUDGET
                  </Typography>
                  <Typography color="textPrimary" variant="h4">
                     $24k
                  </Typography>
               </Grid>
               <Grid item>
                  <Avatar
                     sx={{
                        backgroundColor: 'error.main',
                        height: 56,
                        width: 56
                     }}
                  >
                     <MoneyIcon />
                  </Avatar>
               </Grid>
            </Grid>
            <Box
               sx={{
                  pt: 2,
                  display: 'flex',
                  alignItems: 'center'
               }}
            >
               <ArrowDownwardIcon color="error" />
               <Typography
                  color="error"
                  sx={{
                     mr: 1
                  }}
                  variant="body2"
               >
                  12%
               </Typography>
               <Typography color="textSecondary" variant="caption">
                  Since last month
               </Typography>
            </Box>
         </CardContent>
      </Card>
   );
};

export default SimpleDelta;
