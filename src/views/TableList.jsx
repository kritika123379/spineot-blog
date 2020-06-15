import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {connect} from "react-redux";
import * as action from "../redux/actions/fetchAction";
import Moment from 'react-moment';


class TableList extends Component {
  componentDidMount(){
    console.log('com',this.props.Data)
    this.props.Data();
  }
  render() {
    const {thArray,userData}=this.props;
     console.log('props',this.props);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
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
                    {userData.map((item,key)=>{
                      return (
                        <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item._id}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.service}</td>
                        <td><Moment>{item.createdAt}</Moment></td>
                        <td><Moment>{item.updatedAt}</Moment></td>
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
  console.log(state);
  return{
    userData: state.fetchdata.fetch_Data,
    error: state.fetchdata.fetch_Error,
    thArray:state.fetchdata.thArray
  }

}
const dispatchers = dispatch =>{
  console.log('p',dispatch);
  return{
    Data: ()=>dispatch(action.fetchTable())
  }
}

export default connect(mapStateToProps,dispatchers)(TableList);






