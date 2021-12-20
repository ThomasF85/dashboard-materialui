import React from "react";
import {Box, Button, Divider, Grid, Modal as MaterialModal, Typography} from "@mui/material";
import './modal.styles.scss';

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const { open, closeModalCB, headline, children, saveButtonCB, saveButtonText } = props;

    return (
        <MaterialModal
            open={open}
            onClose={closeModalCB}
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
                                { headline }
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        { children }
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid container item xs={12} direction="row-reverse" spacing={1}>
                            <Grid item>
                                <Button variant="contained" onClick={ saveButtonCB }>{ saveButtonText }</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" onClick={closeModalCB}>cancel</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </MaterialModal>
    )
}

type ModalProps = {
    open: boolean,
    closeModalCB: () => any,
    headline: string,
    saveButtonText: string,
    saveButtonCB: () => any,
    children: React.ReactNode,
}

export default Modal;