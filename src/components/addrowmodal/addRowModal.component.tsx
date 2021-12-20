import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAddRowModalOpen} from "../../redux/dashboard.selectors";
import {Dispatch} from "redux";
import {DashboardAction} from "../../redux/type";
import Modal from "../modal/modal.component";
import {addRow, closeAddRowModal} from "../../redux/dashboard.actions";
import {Grid, ToggleButton, ToggleButtonGroup, Typography, useTheme} from "@mui/material";
import rowtype1PNG from '../../assets/images/rowtype1.png';
import rowtype2PNG from '../../assets/images/rowtype2.png';
import rowtype3PNG from '../../assets/images/rowtype3.png';
import rowtype4PNG from '../../assets/images/rowtype4.png';
import rowtype5PNG from '../../assets/images/rowtype5.png';
import {randomId} from "../../common/utils";
import {TRow, WidgetType} from "../../common/type.def";
import {
    OneHalfColumn,
    OneQuarterColumn,
    OneThirdColumn,
    TwoThirdsBiggerColumn,
    TwoThirdsSmallerColumn
} from "../../redux/dashboard.utils";

const style = {
    width: '470px',
    height: '160px',
    margin: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'white'
};

const createRowType1 = (): TRow => {
    return {
        id: randomId(),
        columns: [OneHalfColumn([null]), OneHalfColumn([null])]
    }
}

const createRowType2 = (): TRow => {
    return {
        id: randomId(),
        columns: [OneThirdColumn([null]), OneThirdColumn([null]), OneThirdColumn([null])]
    }
}

const createRowType3 = (): TRow => {
    return {
        id: randomId(),
        columns: [OneQuarterColumn([null]), OneQuarterColumn([null]), OneQuarterColumn([null]), OneQuarterColumn([null])]
    }
}

const createRowType4 = (): TRow => {
    return {
        id: randomId(),
        columns: [TwoThirdsBiggerColumn([null]), TwoThirdsSmallerColumn([null, null])]
    }
}

const createRowType5 = (): TRow => {
    return {
        id: randomId(),
        columns: [OneThirdColumn([null]), OneThirdColumn([null]), OneThirdColumn([null, null])]
    }
}

const rowTypes: Array<{ name: string, image: any, rowCreator: () => TRow }> = [
    {name: 'rowtype1', image: rowtype1PNG, rowCreator: createRowType1},
    {name: 'rowtype2', image: rowtype2PNG, rowCreator: createRowType2},
    {name: 'rowtype3', image: rowtype3PNG, rowCreator: createRowType3},
    {name: 'rowtype4', image: rowtype4PNG, rowCreator: createRowType4},
    {name: 'rowtype5', image: rowtype5PNG, rowCreator: createRowType5},
];


const AddRowModal: React.FC = () => {
    const open = useSelector(selectIsAddRowModalOpen);
    const dispatch: Dispatch<DashboardAction> = useDispatch();
    const [value, setValue] = useState(rowTypes[0].name);
    const theme = useTheme();
    const selectedStyle = {...style, border: `2px solid ${theme.palette.primary.light}`};

    return (
        <Modal
            open={open}
            closeModalCB={() => dispatch(closeAddRowModal())}
            headline="Add Row"
            saveButtonText="save"
            saveButtonCB={() => dispatch(addRow(rowTypes.filter(rowType => rowType.name === value)[0].rowCreator()))}
        >
            <Grid item xs={12}>
                <Typography sx={{mt: 2}}>
                    Select row type
                </Typography>
            </Grid>
            <Grid item xs={12} style={{maxHeight: '600px', overflowY: 'scroll'}}>
                <ToggleButtonGroup
                    orientation="vertical"
                    value={value}
                    exclusive
                    onChange={(event, newValue) => {
                        if (newValue !== null) {
                            setValue(newValue)
                        }
                    }}
                >
                    {rowTypes.map(rowType => (
                        <ToggleButton key={rowType.name} value={rowType.name}
                                      style={value === rowType.name ? selectedStyle : style}>
                            <img src={rowType.image}/>
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Grid>
        </Modal>
    )
}

export default AddRowModal;