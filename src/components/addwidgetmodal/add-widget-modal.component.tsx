import React, {useState} from "react";
import {Grid, MenuItem, Select, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectAddWidgetModalState} from "../../redux/dashboard.selectors";
import {Dispatch} from "redux";
import {DashboardAction} from "../../redux/type";
import {addWidget, closeAddWidgetModal} from "../../redux/dashboard.actions";
import {WidgetType} from "../../common/type.def";
import Modal from "../modal/modal.component";

const AddWidgetModal: React.FC = () => {
    const {open, columnID, rowIndex} = useSelector(selectAddWidgetModalState);
    const dispatch: Dispatch<DashboardAction> = useDispatch();
    const [widgetType, setWidgetType] = useState(WidgetType.SIMPLE_DELTA);

    return (
        <Modal
            open={open}
            closeModalCB={() => dispatch(closeAddWidgetModal())}
            headline="Add Widget"
            saveButtonText="save"
            saveButtonCB={() => dispatch(addWidget(columnID, rowIndex, widgetType))}
        >
            <Grid item xs={12}>
                <Typography sx={{mt: 2}}>
                    Select widget type
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={widgetType}
                    onChange={(event) => setWidgetType(event.target.value as WidgetType)}
                >
                    {Object.keys(WidgetType).map(type => <MenuItem key={`selectitem-${type}`} value={type}>{type}</MenuItem>)}
                </Select>
            </Grid>
        </Modal>
    )
}

export default AddWidgetModal;