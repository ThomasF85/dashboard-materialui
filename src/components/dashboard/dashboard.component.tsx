import React, {useState} from "react";
import './dashboard.styles.scss';
import {Box, Button, Container, Grid} from "@mui/material";
import WidgetContainer from "../widgetcontainer/widget-container.component";
import {TColumn} from "../../common/type.def";
import {useSelector} from "react-redux";
import {selectRows} from "../../redux/dashboard.selectors";

const gridElement = (column: TColumn) => {
    if (column.widgets.length === 1) {
        return (
            <Grid key={column.id} item xs={column.xs} sm={column.sm} md={column.md}>
                <WidgetContainer type={column.widgets[0].type}/>
            </Grid>);
    } else {
        return (<Grid key={column.id} container item spacing={3} xs={column.xs} sm={column.sm} md={column.md}>
            <Grid key={column.id + 1} item xs={12}><WidgetContainer type={column.widgets[0].type}/></Grid>
            <Grid key={column.id + 2} item xs={12}><WidgetContainer type={column.widgets[1].type}/></Grid>
        </Grid>);
    }
}

const Dashboard: React.FC = () => {
    const [editMode, setEditMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const rows = useSelector(selectRows);

    const buttonGroupEdit = (
        <Grid container direction="row-reverse" spacing={1}>
            <Grid item>
                <Button variant="contained">cancel</Button>
            </Grid>
            <Grid item>
                <Button variant="contained">save</Button>
            </Grid>
            <Grid item>
                <Button variant="contained">Add row</Button>
            </Grid>
        </Grid>
    );
    const buttonGroupWatch = (
        <Grid container direction="row-reverse" spacing={1}>
            <Grid item>
                <Button variant="contained">edit</Button>
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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {editMode ? buttonGroupEdit : buttonGroupWatch}
                    </Grid>
                    {rows.map(row => row.columns).flat().map(column => gridElement(column))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Dashboard;