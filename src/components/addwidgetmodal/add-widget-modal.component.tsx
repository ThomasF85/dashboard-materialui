import React, {useState} from "react";
import {Box, Button, Divider, Grid, MenuItem, Modal, Select, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectAddWidgetModalState} from "../../redux/dashboard.selectors";
import {Dispatch} from "redux";
import {DashboardAction} from "../../redux/type";
import {addWidget, closeAddWidgetModal} from "../../redux/dashboard.actions";
import {WidgetType} from "../../common/type.def";
import './add-widget-modal.styles.scss';

const AddWidgetModal: React.FC = () => {
    const {open, columnID, rowIndex} = useSelector(selectAddWidgetModalState);
    const dispatch: Dispatch<DashboardAction> = useDispatch();
    const [widgetType, setWidgetType] = useState(WidgetType.SIMPLE_DELTA);

    return (
        <Modal
            open={open}
            onClose={() => dispatch(closeAddWidgetModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-size">
                <Box
                    sx={{
                        flexGrow: 1,
                        p: 1
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add Widget
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
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
                                {Object.keys(WidgetType).map(type => <MenuItem value={type}>{type}</MenuItem>)}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid container item xs={12} direction="row-reverse" spacing={1}>
                            <Grid item>
                                <Button variant="contained"
                                        onClick={() => dispatch(addWidget(columnID, rowIndex, widgetType))}>add
                                    widget</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined"
                                        onClick={() => dispatch(closeAddWidgetModal())}>cancel</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Modal>
    )
}

export default AddWidgetModal;