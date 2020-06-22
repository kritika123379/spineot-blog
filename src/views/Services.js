import React,{useState, useCallback ,useEffect, Fragment} from 'react'
import Card from "../components/Card/Card";
import Button from "../components/CustomButton/CustomButton";
import {Grid,Row,Col,Table} from "react-bootstrap";
import {withRouter,NavLink} from "react-router-dom";
import CustomModal from 'components/Modal/CustomModal';
import { getServicesAction } from "../redux/actions/serviceActions";
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {thServiceArray,logoStyle} from "../variables/Variables";
import CustomButton from '../components/CustomButton/CustomButton';
import Loader from 'components/Loader/Loader';



function Services(props) { 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch((getServicesAction()))
    }, [dispatch])
    const servicesData = useSelector(state => (state.service.data ), shallowEqual); 
    const servicesLoading = useSelector(state => (state.service.loading ), shallowEqual); 
    const servicesType = useSelector(state => (state.service.type ), shallowEqual); 
    const servicesMessage = useSelector(state => (state.service.message ), shallowEqual); 
    console.log('the services get data',servicesData);
    return (
        <div className="content">
        {servicesLoading === true
        ? <Loader/>
        :(<Grid fluid>
            <Row>
                <Col md={12}>
                <Card 
                content={
                    <Fragment>
                    <input type="text"
                    placeholder="Search"
                    />
                    <NavLink
                    to="/admin/add_service"
                    className="nav-link"
                    activeClassName="active"
                    >    
                    <CustomButton 
                    fill="true"
                    pullRight="true"
                    >  +Add New Service
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
                            title= "Services"
                            category="Spineor Web Services"
                            content={
                                <React.Fragment>
                                    <Table striped hover>  
                                        <thead>
                                            <tr>
                                                {thServiceArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                                })}
                                            </tr>
                                        </thead>
                                    <tbody>
                                        {servicesData && servicesData !== null ? servicesData.services.map((prop,key)=>{
                                            return (
                                                <Fragment>
                                                    <tr key={prop._id}>
                                                    <td>{prop._id}</td>
                                                    <td><img src={prop.picture} alt="picture"style={logoStyle}/></td>
                                                    <td>{prop.title}</td>
                                                    <td>{prop.user}</td>
                                                    <td>{prop.features}</td>
                                                    <td>{prop.description}</td>
                                                    <td>{prop.createdAt}</td>
                                                    <td>{prop.updatedAt}</td>
                                                    </tr>
                                                </Fragment>
                                            )
                                        }): null }
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
export default withRouter(Services)