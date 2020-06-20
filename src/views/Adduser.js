import React,{useState} from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import {buttonStyle} from "../variables/Variables";
import CustomModal from 'components/Modal/CustomModal';



function Adduser(props) { 
    const [enteredFirstName,setEnteredFirstName]=useState('');
    const [enteredLastName,setEnteredLastName]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPhone,setEnteredPhone]=useState('');
    const [enteredAction,setEnteredAction]=useState('');
    const [enteredUpdates,setEnteredUpdates]=useState('');
    const [open,setModalOpen]=useState(false);
    const [errors,setErrors]=useState({
        firstName: '',
        lastName:'',
        email: '',
        phone: ''
      })
    const _setValue = (event) => {
        setEnteredFirstName(event.target.value);   
    }
    /*function for Modal*/
    const handleModalClose = () => {
        setModalOpen(false)
    }
    const handleModalOpen = () => {
        setModalOpen(true)
    }
    {/* functions for save & Continue*/}
    const addSubmitHandler = event => {
        event.preventDefault()
        console.log('add submit handler');  
    }
    const editSubmitHandler = event => {
        event.preventDefault()
        console.log('edit submit handler');
    }
    {/* function for save & quit */}
    const addQuitSubmitHandler = event => {
        event.preventDefault()
        console.log('add submit handler');  
    }
    const editQuitSubmitHandler = event => {
        event.preventDefault()
        console.log('edit submit hhandler');
    }
   
   const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
   const phonenoRegax =RegExp( /^\d{10}$/);
   

    
    return (
        <div className="content">
        <Grid fluid>
            <Row>
                <Col md={11} >
                    <div className="center-container">
                        <Card
                            ctAllIcons
                            ctTableFullWidth
                            ctTableResponsive
                            ctTableUpgrade
                            title= {props.history.location.pathname === "/admin/adduser"
                            ? "ADD USER DETAILS"
                            : "EDIT USER DETAILS"}
                            category="Spineor Web Services"
                            content={
                                <React.Fragment>
                                    <form className="pd_30">
                                    <Grid>
                                    <Row>
                                    <Col md={6}>
                                       <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"FirstName",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter First Name",
                                            name:"firstname",
                                            value:enteredFirstName,
                                            required:"true",
                                           // onChange:_setValue
                                            onChange:event => {
                                                errors.firstName =
                                                event.target.value.length < 3
                                                ? 'First Name must be 3 characters long!'
                                                :  event.target.value.length > 10
                                                ? 'First Name must be less than 10 characters!'
                                                : ' '
                                                setEnteredFirstName(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.firstName}
                                    </Col>
                                    <Col md={6}>
                                       <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"LastName",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter Last Name",
                                            name:"lastname",
                                            value:enteredLastName,
                                            required:"true",
                                           // onChange:_setValue
                                            onChange:event => {
                                                errors.lastName = 
                                                event.target.value.length < 3
                                                  ? 'Last Name must be 3 characters long!'
                                                  :  event.target.value.length > 10
                                                  ? 'Last Name must be less than 10 characters!'
                                                  : ' '
                                                setEnteredLastName(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.lastName}
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={6}>
                                       <FormInputs
                                       ncols={["col-md-5"],["border-bottom"]}
                                       properties={[{
                                           label:"Email Address",
                                           type:"text",
                                           bsClass:"form-control",
                                           placeholder:"Enter Email",
                                           name:"email",
                                           value:enteredEmail,
                                           onChange:event => {
                                            errors.email = 
                                            validEmailRegex.test(event.target.value)
                                              ? ''
                                              : 'Email is not valid!';
                                                setEnteredEmail(event.target.value)
                                              
                                            }
                                       },]}
                                       />{errors.email}
                                    </Col>   
                                    <Col md={6}>
                                       <FormInputs
                                       ncols={["col-md-5"],["border-bottom"]}
                                       properties={[{
                                           label:"Phone Number",
                                           type:"number",
                                           bsclass:"form-control",
                                           placeholder:"Enter Phone Number",
                                           name:"phone",
                                           value:enteredPhone,
                                           onChange:event => {
                                               console.log(event)
                                               const {  value } = event.target;
                                               errors.phone = 
                                               value.length < 8
                                               ? 'Phone Number must be 8 characters long!'
                                               : value.match(phonenoRegax)
                                               ? 'Phone Number is not valid'
                                               :  ''
                                               setEnteredPhone(value)}
                                       },]}
                                       />{errors.phone}
                                    </Col>   
                                    </Row>
                                    <Row>
                                    <Col md={6}>
                                       <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                          label:"Enter Actions",
                                          type:"text",
                                          bsClass:"form-control",
                                          placeholder:"Enter your Actions/Profile",
                                          name:"action",
                                          value:enteredAction,
                                          onChange:event=>{
                                              console.log(event.target.value)
                                              setEnteredAction(event.target.value)
                                          }
                                      }]}
                                      />
                                    </Col>
                                    <Col md={6}>
                                      <FormInputs
                                      ncols={["col-md-5"],["border-bottom"]}
                                      properties={[{
                                          label:"Updated At",
                                          type:"date",
                                          bsClass:"form-control",
                                          placeholder:"Enter the Updated Date",
                                          name:"updatedat",
                                          defaultValue:new Date(),
                                          value:enteredUpdates,
                                          onChange:event=>{
                                              setEnteredUpdates(event.target.value)
                                          }
                                      }]}
                                      />
                                    </Col>
                                    </Row>
                                    <Row className="pt_20">
                                    <Col md={3}>
                                        <NavLink
                                        to="/admin/table"
                                        className="nav-link"
                                        activeClassName="active"
                                        >    
                                        <Button
                                        bsStyle="white"
                                        onClick={handleModalClose}
                                        pullLeft
                                        fill
                                        type="submit"> 
                                            Cancel
                                        </Button>
                                        </NavLink>
                                    </Col>
                                    <Col md={4}>
                                        <Button
                                        onClick={props.history.location.pathname === "/admin/adduser"
                                        ? {addQuitSubmitHandler}
                                        : {editQuitSubmitHandler}}
                                        bsStyle= "info"
                                        pullLeft
                                        fill
                                        onClick={handleModalOpen}
                                        type="submit">
                                        {props.history.location.pathname === "/admin/adduser"
                                        ? "Add Details & Quit"
                                        : "Edit Details & Quit"}
                                        </Button>
                                    </Col>     
                                    <Col md={4}>
                                        <Button
                                        onClick={props.history.location.pathname === "/admin/adduser"
                                        ? {addSubmitHandler}
                                        : {editSubmitHandler}}
                                        bsStyle= "primary"
                                        pullLeft
                                        fill
                                        onClick={handleModalOpen}
                                        type="submit">
                                        {props.history.location.pathname === "/admin/adduser"
                                        ? "Add Details & Continue"
                                        : "Edit Details & Continue"}
                                        </Button>
                                    </Col>     
                                    </Row>
                                    </Grid>
                                    </form>
                                </React.Fragment>
                            }
                        />
                    </div>
                </Col>
            </Row>
        </Grid>
        <CustomModal 
        modalTitle = "title"
        modalContent="Content"
        handleClose ={handleModalClose}
        open={open}
        cancelBtn="Cancel"
        primary="secondary"
        secondary="primary"
        btnLabel={props.history.location.pathname === "/admin/adduser"
        ? "Add Details & Continue"
        : "Edit Details & Continue"}
      />
        </div>
    )
}
export default withRouter(Adduser)