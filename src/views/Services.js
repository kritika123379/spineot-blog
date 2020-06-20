import React,{useState} from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';



function Services(props) {
    console.log('Add user',props.history.location.pathname);  
    const [enteredFirstName,setEnteredFirstName]=useState('');
    const [enteredLastName,setEnteredLastName]=useState('');
    const [enteredDescription,setEnteredDescription]=useState('');
    const [enteredImage,setEnteredImage]=useState('');
    const [enteredFeatures,setEnteredFeatures]=useState('');
    const [open,setModalOpen]=useState(false);
    const [errors,setErrors]=useState({
        firstname: '',
        lastname:'',
        description: ''
      })
  
    const submitHandler = event => {
        event.preventDefault()
        console.log('add submit handler');  
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }
    const handleModalOpen = () => {
        setModalOpen(true)
    }
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
                            title= "Services"
                            category="Spineor Web Services"
                            content={
                                <React.Fragment>
                                    <form className="pd_30">
                                    <Grid>
                                      <Row>
                                       <Col md={5}>
                                       <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"First",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter First Name",
                                            name:"firstname",
                                            value:enteredFirstName,
                                            required:"true",
                                            onChange:event => {
                                                errors.firstname = 
                                                event.target.value.length < 3
                                                  ? 'First Name must be 3 characters long!'
                                                  : event.target.value.length > 10 
                                                  ? 'First Name must be less than 10 characters!'
                                                  : ' '
                                                setEnteredFirstName(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.firstname}
                                       </Col>
                                       <Col md={5}>
                                        <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"Last",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter Last Name",
                                            name:"lastname",
                                            value:enteredLastName,
                                            required:"true",
                                            onChange:event => {
                                                errors.lastname = 
                                                event.target.value.length < 3
                                                    ? 'Last Name must be 3 characters long!'
                                                    : event.target.value.length > 10 
                                                    ? 'Last Name must be less than 10 characters!'
                                                    : ' '
                                                setEnteredLastName(event.target.value)
                                            }
                                        },]}
                                        /> 
                                        {errors.lastname}
                                      </Col>
                                      </Row>
                                      <Row>
                                       <Col md={5}>
                                        <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"Image",
                                            type:"text",
                                            bsclass:"form-control",
                                            placeholder:"Enter Image",
                                            name:"image",
                                            value:enteredImage,
                                            onChange:event => {
                                                console.log(event)
                                                const {  value } = event.target;
                                                setEnteredImage(value)}
                                        },]}
                                        />
                                       </Col>
                                       <Col md={5}>
                                       <FormInputs
                                       ncols={["col-md-5"],["border-bottom"]}
                                       properties={[{
                                           label:"Features",
                                           type:"text",
                                           bsClass:"form-control",
                                           placeholder:"Enter Features",
                                           name:"action",
                                           value:enteredFeatures,
                                           onChange:event=>{
                                               setEnteredFeatures(event.target.value)
                                           }
                                       }]}
                                       />
                                       </Col>
                                      </Row>
                                      <Row>
                                      <Col md={10}>
                                        <FormInputs
                                        ncols={["col-md-5"],["border-bottom"]}
                                        properties={[{
                                            label:"Description",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter Description",
                                            name:"description",
                                            value:enteredDescription,
                                            onChange:event => {
                                            errors.description= 
                                            event.target.value.length < 5
                                                ? 'Description must be 5 characters long!'
                                                : '';
                                                setEnteredDescription(event.target.value) 
                                            }
                                        },]}
                                        />{errors.description}
                                      </Col>
                                      </Row>
                                      <Row className="pt_20">
                                      <Col md={6}>
                                        <Button
                                            bsStyle="white"
                                            pullLeft
                                            fill
                                            type="submit"
                                            > 
                                         Cancel
                                        </Button>
                                     </Col>
                                     <Col md={3}>
                                        <Button
                                            onClick={submitHandler}
                                            bsStyle= "info"
                                            pullLeft
                                            fill
                                            onClick={handleModalOpen}
                                            type="submit"
                                        >
                                        Save & Quit
                                        </Button>
                                     </Col>
                                     <Col md={3}>
                                        <Button
                                            onClick={submitHandler}
                                            bsStyle= "primary"
                                            pullLeft
                                            fill
                                            onClick={handleModalOpen}
                                            type="submit"
                                        >
                                        Save & Continue
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
        btnLabel="Save & Continue"
        cancelBtn="Cancel"
        primary="secondary"
        secondary="primary"
      />
        </div>
    )
}
export default withRouter(Services)