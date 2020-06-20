import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'40%',
    height:'40%'
  },
}));

 function CustomModal(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
              {/*Modal title*/}
            <section className="modal-header">
               <h3 id="transition-modal-title">{props.modalTitle}</h3>
            </section>
               {/*Modal Content*/}
            <section  className="modal-content">
               <p id="transition-modal-description">{props.modalContent}
               </p>
            </section>
              {/*Modal footer*/}
            <section  className="modal-footer">
              <Button variant="contained" color={props.primary} onClick={props.handleModalClick}>
                {props.btnLabel}
              </Button>
              <Button variant="contained" color={props.secondary} onClick={props.handleClose}>
                  {props.cancelBtn}
               </Button>
            </section>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default CustomModal;