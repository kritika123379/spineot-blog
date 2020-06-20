import React,{useState} from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';



function Blogs(props) {  
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredLastName,setEnteredLastName]=useState('');
    const [enteredDescription,setEnteredDescription]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredUser,setEnteredUser]=useState('');
    const [open,setModalOpen]=useState(false);
    const [errors,setErrors]=useState({
        title: '',
        description: '',
      })
   
    const submitHandler = event => {
        event.preventDefault()
        console.log('edit submit hhandler');
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
                            back="blogback"
                            ctAllIcons
                            ctTableFullWidth
                            ctTableResponsive
                            ctTableUpgrade
                            title= "Blogs"
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
                                            value:enteredTitle,
                                            required:"true",
                                            onChange:event => {
                                                errors.title = 
                                                event.target.value.length < 3
                                                  ? 'Fisrt Name must be 3 characters long!'
                                                  : '';
                                                setEnteredTitle(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.title}
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
                                                errors.title = 
                                                event.target.value.length < 3
                                                  ? 'Last Name must be 3 characters long!'
                                                  : '';
                                                setEnteredLastName(event.target.value)
                                            }
                                        },]}
                                       /> 
                                       {errors.title}
                                       </Col>
                                       </Row>
                                       <Row>
                                       <Col md={5}>
                                       <FormInputs
                                       ncols={["col-md-6"],["border-bottom"]}
                                       properties={[{
                                           label:"User",
                                           type:"text",
                                           bsClass:"form-control",
                                           placeholder:"Enter UserName",
                                           name:"action",
                                           value:enteredUser,
                                           onChange:event=>{
                                               setEnteredUser(event.target.value)
                                           }
                                       }]}
                                       />
                                       </Col>
                                       <Col md={5}>
                                       <FormInputs
                                       ncols={["col-md-6"],["border-bottom"]}
                                       properties={[{
                                           label:"Price",
                                           type:"number",
                                           bsclass:"form-control",
                                           placeholder:"Enter Price",
                                           name:"price",
                                           value:enteredPrice,
                                           onChange:event => {
                                               console.log(event)
                                               const {  value } = event.target;
                                               setEnteredPrice(value)}
                                       },]}
                                       />
                                       </Col>
                                       </Row>
                                       <Row>
                                       <Col md={8}>
                                       <FormInputs
                                       ncols={["col-md-6"],["border-bottom"]}
                                       properties={[{
                                           label:"Description",
                                           type:"text",
                                           bsClass:"form-control",
                                           placeholder:"Enter Description with 20 characters",
                                           name:"description",
                                           value:enteredDescription,
                                           onChange:event => {
                                            errors.description = 
                                            event.target.value.length < 5 
                                              ? 'Description must be 5 characters long!'
                                              : event.target.value.length > 40
                                              ? 'Description must be less than 40 characters!'
                                              : " "
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
                                            type="submit"> 
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
                                            type="submit">
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
                                            type="submit">
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
export default withRouter(Blogs)