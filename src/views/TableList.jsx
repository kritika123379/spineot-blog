import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
//import { thArray, tdArray } from "variables/Variables.jsx";
import {connect} from "react-redux";
import * as action from "../redux/actions/fetchAction";
import Moment from 'react-moment';


class TableList extends Component {
  render() {
     console.log(this.props);
    
    const {thArray,tdArray}=this.props;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <button onClick={this.props.Data}>Submit</button>
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
                      {tdArray.map((prop, key) => {
                        console.log(prop);
                        console.log(tdArray);
                         {/* <td> Created: {moment(new Date(props.createdAt )).format("YYYY-MM-DD hh:mm:ss")}</td>*/}
                        return (
                          <tr key={key}>
                            {prop.slice(0,5).map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            {prop.slice(5,6).map((prop, key) => {
                              //const formatdate = moment(prop).format("YYYY-MM-DD") 
                              return <td key={key}><Moment>{new Date()}</Moment></td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {  
                        return (
                          <tr key={key}>
                            {prop.slice(0,5).map((prop, key) => {
                              return <td key={key}>{prop}</td>
                             
                            })}
                            {prop.slice(5,6).map((prop, key) => {
                              return <td key={key}><Moment>{prop}</Moment></td>
                             
                            })}
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return{
    userData: state.fetchdata.fetch_Data,
    error: state.fetchdata.fetch_Error,
    type: state.fetchdata.type,
    thArray:state.fetchdata.thArray,
    tdArray:state.fetchdata.tdArray
  }

}
const dispatchers = dispatch =>{
  console.log('p',dispatch);
  return{
    Data: ()=>dispatch(action.fetchTable())
  }
}

export default connect(mapStateToProps,dispatchers)(TableList);
