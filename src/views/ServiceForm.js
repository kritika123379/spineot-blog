import React,{useState,useCallback,useEffect,Fragment} from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';
import { getServicesAction,setServicesAction } from "../redux/actions/serviceActions";
import { useSelector,shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';



function ServiceForm(props) {
    const dispatch=useDispatch(); 
         
    const { serviceData,message,type,loading } = 
    useSelector(state =>({     
            loading :  state.service.loading,
            message :  state.service.message,
            type :  state.service.type,
            serviceData : state.service.data    
      }), shallowEqual); 
    console.log('Add user',props.history.location.pathname);
    console.log('user..',serviceData);  
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredDescription,setEnteredDescription]=useState('');
    const [enteredImage,setEnteredImage]=useState('');
    const [enteredFeatures,setEnteredFeatures]=useState('');
    const [open,setModalOpen]=useState(false);
    const [errors,setErrors]=useState({
        title: '',
        username:'',
        description: ''
      })
   
    console.log('setentered ',setEnteredUserName);
    const getServicesData = useCallback(
        () => dispatch((getServicesAction())),
        [dispatch]
     )
        // useEffect(() => {
        //  dispatch((getServicesAction()))
        // }, [dispatch])
    const submitHandler = useCallback(
        (e) => {
            e.preventDefault()
            dispatch((setServicesAction()))},
        [dispatch]
     )
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
                                            label:"Enter Title",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter Title",
                                            name:"title",
                                            value:enteredTitle,
                                            required:"true",
                                            onChange:event => {
                                                errors.title = 
                                                event.target.value.length < 3
                                                  ? 'Title must be 3 characters long!'
                                                  : event.target.value.length > 10 
                                                  ? 'Title must be less than 10 characters!'
                                                  : ' '
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
                                            label:"UserName",
                                            type:"text",
                                            bsClass:"form-control",
                                            placeholder:"Enter User Name",
                                            name:"username",
                                            value:enteredUserName,
                                            required:"true",
                                            onChange:event => {
                                                errors.username = 
                                                event.target.value.length < 3
                                                    ? 'User Name must be 3 characters long!'
                                                    : event.target.value.length > 10 
                                                    ? 'User Name must be less than 10 characters!'
                                                    : ' '
                                                setEnteredUserName(event.target.value)
                                            }
                                        },]}
                                        /> 
                                        {errors.username}
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
                                            //onClick={handleModalOpen}
                                            onClick={getServicesData}
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
                                            //onClick={handleModalOpen}
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

export default withRouter(ServiceForm)