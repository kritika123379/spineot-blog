import React,{useState, useCallback } from 'react'
import Card from "../components/Card/Card";
import FormInputs from "../components/FormInputs/FormInputs";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col,Table} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';
import { getBlogsAction,setBlogsAction } from "../redux/actions/blogActions";
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



function BlogsForm(props) { 
    const blogsData = useSelector(state => (state.blog.data ), shallowEqual); 
    const blogsLoading = useSelector(state => (state.blog.loading ), shallowEqual); 
    const blogsType = useSelector(state => (state.blog.type ), shallowEqual); 
    const blogsMessage = useSelector(state => (state.blog.message ), shallowEqual); 
    const dispatch = useDispatch()
    console.log('the blog data',blogsData,blogsLoading,blogsType,blogsMessage);
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredLastName,setEnteredLastName]=useState('');
    const [enteredDescription,setEnteredDescription]=useState('');
    const [enteredImage,setEnteredImage]=useState('');
    const [enteredUser,setEnteredUser]=useState('');
    const [open,setModalOpen]=useState(false);
    const [errors,setErrors]=useState({
        title: '',
        description: '',
      })
      
     const getBlogsData = useCallback(
        () => dispatch((getBlogsAction())),
        [dispatch]
     )

    //  React.useEffect(function submitHandler() {
    //     if (blogsData) {
    //         console.log('set entered title',enteredTitle,enteredDescription,enteredUser,enteredImage)
    //         alert(`Submitting Name ${enteredTitle} ${enteredUser}`);
    //         let blogposts=[];
    //         var object={
    //             title:enteredTitle,
    //             description:enteredDescription,
    //             user:enteredUser,
    //             picture:enteredImage
    //         }
    //         blogposts.push(object);
    //         //updatePosts=([...blogposts, ]);
    //         console.log('blog posts set array',blogposts,enteredTitle,enteredDescription,enteredUser)
    //         dispatch((setBlogsAction(blogposts)))
           
    //     }
    // }, []); 
   
 

    const submitHandler = useCallback(
        (e) => {
            console.log('set entered title',enteredTitle,enteredDescription,enteredUser,enteredImage)
            e.preventDefault()
            alert(`Submitting Name ${enteredTitle} ${enteredUser}`);
            let blogposts=[];
            var object={
                title:enteredTitle,
                description:enteredDescription,
                user:enteredUser,
                picture:enteredImage
            }
            blogposts.push(object);
            console.log('blog posts set array',blogposts,enteredTitle,enteredDescription,enteredUser)
            dispatch((setBlogsAction(blogposts)))},
        [dispatch]
     )
    const handleModalClose = () => {
        setModalOpen(false)
    }
    const handleModalOpen = () => {
        setModalOpen(true)
    }
   // console.log('set entered title',enteredTitle,enteredDescription,enteredUser)
    return (
        <div className="content">
        <Grid fluid>
            <Row>
                <Col md={11} >
                    <div className="center-container">
                        <Card
                            back="blogback"
                            ctTableFullWidth
                            ctTableResponsive
                            ctTableUpgrade
                            title= "Blogs"
                            category=""
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
                                            bind: {
                                                enteredTitle,
                                                onChange: event => {
                                                  setEnteredTitle(event.target.value);
                                                }
                                              },
                                              required:"true",
                                            // value:enteredTitle,
                                           
                                            // onChange:event => {
                                            //     errors.title = 
                                            //     event.target.value.length < 3
                                            //       ? 'Fisrt Name must be 3 characters long!'
                                            //       : '';
                                            //     setEnteredTitle(event.target.value)
                                            // }
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
                                                console.log('evetnt',event.target.value)
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
                                               console.log('evetnt',event.target.value)
                                               setEnteredUser(event.target.value)
                                           }
                                       }]}
                                       />
                                       </Col>
                                       <Col md={5}>
                                       <FormInputs
                                       ncols={["col-md-6"],["border-bottom"]}
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
                                            //onClick={() => dispatch({ type: 'GET_BLOG_SUCCESS' })}
                                            //onClick={handleModalOpen}
                                            type="submit">
                                            Post
                                            </Button>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                            //onClick={submitHandler}
                                            bsStyle= "primary"
                                            pullLeft
                                            fill
                                            onClick={getBlogsData}
                                            //onClick={() => dispatch((getBlogsAction()))}
                                            //onClick={handleModalOpen}
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
export default withRouter(BlogsForm)