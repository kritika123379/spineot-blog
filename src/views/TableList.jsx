import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Table,Button } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {connect} from "react-redux";
import * as action from "../redux/actions/fetchAction";
import Moment from 'react-moment';
import logo from "../assets/img/faces/face-1.jpg"
import {logoStyle,textStyle,buttonStyle} from "../variables/Variables";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import CustomButton from "components/CustomButton/CustomButton"
import FilterCard from "components/FilterCard";

class TableList extends Component {
  componentDidMount(){
    this.props.Data();
  }
  render() {
    const {thArray,userData,filteredData}=this.props;
    console.log('props  dd',this.props);
    return (
      <div className="content">     
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card 
              content={
                <Fragment>
             <FilterCard
             userData={userData}
             />
                
                {/*
                     <input type="text"
                placeholder="Search"
                />
                <CustomButton 
                fill="true"
                pullRight="true"
                >  +Add New Design
                </CustomButton>
                <Button variant="primary"
                 size="lg" 
                 style={buttonStyle}>
                  +Add New Design
                </Button>*/}
              </Fragment>
            }
              />
              <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>  
                    
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item,key)=>{
                      return (
                        <tr key={item._id}>
                        <td><CustomCheckbox isChecked=""/></td>
                        <td><img src={logo} style={logoStyle}/></td>
                        <td>{item.name}</td>
                        <td>{item._id}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.service}</td>
                        <td><Moment>{item.createdAt}</Moment></td>
                        <td><Moment>{item.updatedAt}</Moment></td>
                        <td>  
                        <p style={textStyle}>
                        <u>Edit</u> </p>
                        </td>
                        <td><Button 
                        bsStyle="primary" 
                        pullRight="true" 
                        fill ="true">
                        Delete</Button></td>
                       {/* <td> <CustomButton fill="true" round="true">Delete</CustomButton></td> 
                        <Button variant="primary" size="sm" style={buttonStyle}>
                            Action
                      </Button>*/}
                          
                        </tr>
                      )
                    })}
                    </tbody>
                  </Table>
                }
              />
            </Col>          
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state',state);
  return{
    userData: state.fetchdata.fetch_Data,
    error: state.fetchdata.fetch_Error,
    thArray:state.fetchdata.thArray,
    filteredData:state.filter.filteredData
  }

}
const dispatchers = dispatch =>{
  console.log('p',dispatch);
  return{
    Data: ()=>dispatch(action.fetchTable())
  }
}

export default connect(mapStateToProps,dispatchers)(TableList);






