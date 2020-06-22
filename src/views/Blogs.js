import React,{useState, useCallback,useEffect, Fragment } from 'react'
import Card from "../components/Card/Card";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col,Table} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';
import { getBlogsAction } from "../redux/actions/blogActions";
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {thBlogArray} from "../variables/Variables";
import {connect} from "react-redux";
import CustomButton from '../components/CustomButton/CustomButton';
import Loader from 'components/Loader/Loader';



function Blogs(props) { 
    const dispatch=useDispatch(); 
    useEffect(() => {
        dispatch((getBlogsAction()))
    }, [dispatch])
    const blogsData = useSelector(state => (state.blog.data ), shallowEqual); 
    const blogsLoading = useSelector(state => (state.blog.loading ), shallowEqual); 
    const blogsType = useSelector(state => (state.blog.type ), shallowEqual); 
    const blogsMessage = useSelector(state => (state.blog.message ), shallowEqual); 
    console.log('the blogs messsage',blogsData,blogsLoading,blogsType,blogsMessage)
    //console.log('the ueser blog data',props.userdata, blogsData);
    return (
        <div className="content">
        {blogsLoading === true
        ? <Loader/>
        :
        (<Grid fluid>
            <Row>
                <Col md={12}>
                    <Card 
                     content={
                        <Fragment>
                            <input type="text"
                            placeholder="Search"
                            />
                            <NavLink
                            to="/admin/add_blog"
                            className="nav-link"
                            activeClassName="active"
                            >    
                            <CustomButton 
                            fill="true"
                            pullRight="true"
                            >  +Add New Blog
                            </CustomButton>
                            </NavLink>
                        </Fragment>
                     }
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
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
                                    <Table striped hover>  
                                        <thead>
                                            <tr>
                                                {thBlogArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                    <tbody>
                                      {blogsData && blogsData !== null ? blogsData.queries.map((prop,key)=>{
                                          return (
                                              <React.Fragment>
                                                <tr key={prop._id}>
                                                    <td>{prop._id}</td>
                                                    <td>{prop.name}</td>
                                                    <td>{prop.email}</td>
                                                    <td>{prop.phone}</td>
                                                    <td>{prop.service}</td>
                                                    <td>{prop.createdAt}</td>
                                                    <td>{prop.updatedAt}</td>
                                                </tr>
                                              </React.Fragment>
                                          )
                                      }) : null}
                                    </tbody>
                                    </Table>
                                </React.Fragment>
                            }
                        />
                    </div>
                </Col>
            </Row>
            
        </Grid>)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        userdata:state.blog.data
    }
}
export default connect(mapStateToProps)(withRouter(Blogs))