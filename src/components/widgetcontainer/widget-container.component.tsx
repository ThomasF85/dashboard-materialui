import React from "react";
import "./widget-container.styles.scss";
import {TWidget, WidgetType} from "../../common/type.def";
import {Widget} from "../widgets/widgets";
import {Grid, IconButton, useTheme} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import EmptyWidget from "../widgets/emptywidget/empty-widget.component";
import {Dispatch} from "redux";
import {DashboardAction} from "../../redux/type";
import {useDispatch} from "react-redux";
import {deleteWidget, openAddWidgetModal} from "../../redux/dashboard.actions";

const WidgetContainer: React.FC<WidgetContainerProps> = (props) => {
    const {widget, editMode, columnID, rowIndex} = props;
    const theme = useTheme();
    const dispatch: Dispatch<DashboardAction> = useDispatch();
    const height: string = editMode ? 'calc(100% - 51px)' : '100%';

    return (
        <div className="widget-container" style={{height: "100%"}}>
            {editMode ? <div style={{width: '100%', height: '51px', backgroundColor: theme.palette.grey["300"]}}>
                { widget === null ?
                    <Grid container direction="row-reverse" spacing={1}>
                        <IconButton onClick={() => dispatch(openAddWidgetModal(columnID, rowIndex))} color="primary">
                            <AddIcon fontSize="large"/>
                        </IconButton>
                    </Grid> :
                    <Grid container direction="row-reverse" spacing={1}>
                        <IconButton onClick={() => dispatch(deleteWidget(widget !== null ? widget.id : "DELETE ME"))}
                                    color="error">
                            <DeleteForeverIcon fontSize="large"/>
                        </IconButton>
                        <IconButton color="primary">
                            <SettingsIcon fontSize="large"/>
                        </IconButton>
                    </Grid> }
            </div> : null}
            {widget === null ? <EmptyWidget height={height}/> : <Widget height={height} widgetType={widget.type}/>}
        </div>
    );
}

type WidgetContainerProps = {
    widget: TWidget | null
    editMode: boolean,
    columnID: string,
    rowIndex: number
}

export default WidgetContainer;