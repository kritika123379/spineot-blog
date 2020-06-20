import React,{useState} from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import {buttonStyle} from "../variables/Variables";



function Adduser(props) {
    console.log('Add user',props.history.location.pathname);  
    const [enteredName,setEnteredName]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPhone,setEnteredPhone]=useState('');
    const [enteredAction,setEnteredAction]=useState('');
    const [enteredUpdates,setEnteredUpdates]=useState('');
    const [errors,setErrors]=useState({
        fullName: '',
        email: '',
        phone: ''
      })
    const _setValue = (event) => {
        console.log(event.target.value);
        setEnteredName(event.target.value);   
    }
    const addSubmitHandler = event => {
        event.preventDefault()
        console.log('add submit handler');  
    }
    const editSubmitHandler = event => {
        event.preventDefault()
        console.log('edit submit hhandler');
    }
   
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const phonenoRegax = /^\d{10}$/;
   
    let contentClass
    {props.history.location.pathname === "/addUser"
    ? contentClass ="bg-light" 
    : props.history.location.pathname === "/editUser"
    ? contentClass = "bg-dark"
    : props.history.location.pathname === "/admin/blogs"
    ? contentClass = "bg-dark" 
    : contentClass = "bg-light" }

    
    return (
        <div className="content">
        <Grid fluid>
            <Row className={contentClass}>
                <Col md={11} >
                    <div className="center-container width_50">
                        <Card
                            ctAllIcons
                            ctTableFullWidth
                            ctTableResponsive
                            ctTableUpgrade
                            title= {props.history.location.pathname === "/addUser"
                            ? "ADD USER DETAILS"
                            : "EDIT USER DETAILS"}
                            category="Spineor Web Services"
                            content={
                                <React.Fragment>
                                    <form className="pd_30">
                                       <FormInputs
                                        ncols={["col-md-6"]}
                                        properties={[{
                                            label:"Name",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter Name",
                                            name:"name",
                                            value:enteredName,
                                            required:"true",
                                           // onChange:_setValue
                                            onChange:event => {
                                                errors.fullName = 
                                                event.target.value.length < 5
                                                  ? 'Full Name must be 5 characters long!'
                                                  : '';
                                                setEnteredName(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.fullName}
                                       <FormInputs
                                       ncols={["col-md-6"]}
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
                                       <FormInputs
                                       ncols={["col-md-6"]}
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
                                      <FormInputs
                                      ncols={["col-md-6"]}
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
                                      <FormInputs
                                      ncols={["col-md-6"]}
                                      properties={[{
                                          label:"Updated At",
                                          type:"date",
                                          bsClass:"form-control",
                                          placeholder:"Enter the Updated Date",
                                          name:"updatedat",
                                          defaultValue:new Date(),
                                          value:enteredUpdates,
                                          onChange:event=>{
                                              console.log(event.target.value);
                                              setEnteredUpdates(event.target.value)
                                          }
                                      }]}
                                      />
                                      <Button
                                      onClick={props.history.location.pathname === "/addUser"
                                      ? {addSubmitHandler}
                                      : {editSubmitHandler}}
                                      bsStyle= "primary"
                                      pullLeft
                                      fill
                                      type="submit">
                                      {props.history.location.pathname === "/addUser"
                                      ? "Add Details"
                                      : "Edit Details"}

                                      </Button>
                                      <NavLink
                                      to="/admin/table"
                                      className="nav-link"
                                      activeClassName="active"
                                      >    
                                      <Button
                                      bsStyle="white"
                                      pullLeft
                                      fill
                                      type="submit"> 
                                        Cancel
                                      </Button>
                                      </NavLink>
                                    </form>
                                </React.Fragment>
                            }
                        />
                    </div>
                </Col>
            </Row>
        </Grid>
        </div>
    )
}
export default withRouter(Adduser)