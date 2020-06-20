import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card";
import Moment from 'react-moment';
import {logoStyle,textStyle,tdUserArray,thUserArray} from "../variables/Variables";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import CustomButton from "components/CustomButton/CustomButton"
import logo from "../assets/img/faces/face-1.jpg"
import {NavLink} from "react-router-dom";
import CustomModal from "components/Modal/CustomModal";

class Currentusers extends Component {
  state={
    open:false
  }
  handleModalClose = () => {
     this.setState({
       open:false
     })
  }
 handleModalOpen = () => {
  this.setState({
    open:true
  })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card 
              content={
                <Fragment>
                <input type="text"
                placeholder="Search"
                />
                <NavLink
                to="/addUser"
                className="nav-link"
                activeClassName="active"
                >    
                <CustomButton 
                fill="true"
                pullRight="true"
                >  +Add New Design
                </CustomButton>
                </NavLink>
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
                        {thUserArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {tdUserArray.map((prop, key) => {
                      return (
                            <tr key={key}>
                            <td><CustomCheckbox isChecked=""/></td>
                            <td><img src={logo} style={logoStyle}/></td>
                              {prop.slice(0,1).map((prop, key) => {
                                return <td key={key}><Moment>{prop}</Moment></td>;
                                
                              })}
                              {prop.slice(1,5).map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                              })}
                              <td> 
                              <NavLink
                              to="/editUser"
                              className="nav-link"
                              activeClassName="active"
                              >   
                              <p style={textStyle}>
                              <u>Edit</u>
                              </p>
                              </NavLink>
                              </td>
                           <td> 
                           <CustomButton 
                           onClick={this.handleModalOpen}
                           fill="true" 
                           round="true"
                           >
                                Delete
                            </CustomButton>
                           </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                }
              />
            </Col>    
          </Row>
        </Grid>
        <CustomModal 
        modalTitle = "title"
        modalContent="Content"
        handleClose ={this.handleModalClose}
        open={this.state.open}
        btnLabel="Delete & Continue"
        cancelBtn="Cancel"
        primary="secondary"
        secondary="primary"
      />
      </div>
    );
  }
}



export default Currentusers;






