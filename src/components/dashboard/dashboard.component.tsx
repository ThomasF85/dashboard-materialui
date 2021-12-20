import React from "react";
import './dashboard.styles.scss';
import {Box, Button, Container, Divider, Grid, IconButton, Theme, useTheme} from "@mui/material";
import WidgetContainer from "../widgetcontainer/widget-container.component";
import {TColumn, TRow} from "../../common/type.def";
import {useDispatch, useSelector} from "react-redux";
import {selectIsEditMode, selectRows} from "../../redux/dashboard.selectors";
import {DashboardAction} from "../../redux/type";
import {Dispatch} from "redux";
import {
    cancelEditMode,
    enterEditMode,
    moveRowDown,
    moveRowUp,
    saveAndExitEditMode
} from "../../redux/dashboard.actions";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddWidgetModal from "../addwidgetmodal/add-widget-modal.component";

const gridElement = (column: TColumn, editMode: boolean) => {
    const xs: number = editMode ? 2 * column.xs : column.xs;
    const sm: number = editMode ? 2 * column.sm : column.sm;
    const md: number = editMode ? 2 * column.md : column.md;
    if (column.widgets.length === 1) {
        return (
            <Grid key={column.id} item xs={xs} sm={sm} md={md}>
                <WidgetContainer widget={column.widgets[0]} editMode={editMode} columnID={column.id} rowIndex={0}/>
            </Grid>);
    } else {
        return (<Grid key={column.id} container item spacing={3} xs={xs} sm={sm} md={md}>
            <Grid key={column.id + 1} item xs={editMode ? 24 : 12}>
                <WidgetContainer widget={column.widgets[0]} editMode={editMode} columnID={column.id} rowIndex={0}/>
            </Grid>
            <Grid key={column.id + 2} item xs={editMode ? 24 : 12}>
                <WidgetContainer widget={column.widgets[1]} editMode={editMode} columnID={column.id} rowIndex={1}/>
            </Grid>
        </Grid>);
    }
}

const gridEditMode = (buttonGroup: JSX.Element, rows: TRow[], dispatch: Dispatch<DashboardAction>, theme: Theme) => {
    return <Grid container spacing={3} columns={24}>
        <Grid item xs={24}>
            {buttonGroup}
        </Grid>
        {rows.map((row, index) => {
            const columns: any =
                [<Grid item key={row.id + "1"} xs={21} md={22}>
                    <Grid container spacing={3}>
                        {row.columns.map(column => gridElement(column, true))}
                    </Grid>
                </Grid>
                ];
            columns.push(
                <Grid item key={row.id + "2"} xs={3} md={2}>
                    <div style={{
                        backgroundColor: theme.palette.primary.light,
                        width: '50px',
                        height: 'calc(100% - 30px)',
                        marginTop: '10px'
                    }}>
                        <IconButton onClick={() => dispatch(moveRowUp(row.id))} color="primary">
                            <ArrowUpwardIcon fontSize="large"/>
                        </IconButton>
                        <IconButton onClick={() => dispatch(moveRowDown(row.id))} color="primary">
                            <ArrowDownwardIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </Grid>
            );
            if (index !== rows.length - 1) {
                columns.push(<Grid item key={'divider' + index} xs={24}><Divider
                    style={{marginBottom: '15px'}}/></Grid>);
            }
            return columns;
        }).flat()}
    </Grid>
        ;
}

const gridWatchMode = (buttonGroup: JSX.Element, rows: TRow[]) => {
    return <Grid container spacing={3} columns={12}>
        <Grid item xs={12}>
            {buttonGroup}
        </Grid>
        {rows.map(row => row.columns).flat().map(column => gridElement(column, false))}
    </Grid>;
}

const Dashboard: React.FC = () => {
    const editMode = useSelector(selectIsEditMode);
    const rows = useSelector(selectRows);
    const theme = useTheme();
    const dispatch: Dispatch<DashboardAction> = useDispatch();

    const buttonGroupEdit = (
        <Grid container direction="row-reverse" spacing={1}>
            <Grid item>
                <Button variant="contained" onClick={() => dispatch(cancelEditMode())}>cancel</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => dispatch(saveAndExitEditMode())}>save</Button>
            </Grid>
            <Grid item>
                <Button variant="contained">Add row</Button>
            </Grid>
        </Grid>
    );
    const buttonGroupWatch = (
        <Grid container direction="row-reverse" spacing={1}>
            <Grid item>
                <Button variant="contained" onClick={() => dispatch(enterEditMode())}>edit</Button>
            </Grid>
        </Grid>
    );

    return (
        <Box
            sx={{
                flexGrow: 1,
                py: 2
            }}
        >
            <Container maxWidth={false}>
                {editMode ? gridEditMode(buttonGroupEdit, rows, dispatch, theme) : gridWatchMode(buttonGroupWatch, rows)}
            </Container>
            <AddWidgetModal />
        </Box>
    );
}

export default Dashboard;