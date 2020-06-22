import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import Select from '@material-ui/core/Select';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { sortDataByService,
  searchByName,
  sortDataById,
  filterByDate } from "redux/actions/filterActions";


class FilterCard extends Component {
  state={
    searchinput:"",
    dateinput:"",
    idinput:"",
    serviceinput:"",
    checkedB:true
  }
  onSearchInput = (e) => {
    this.setState({searchinput:e.target.value})
    this.props.SearchDataByName(this.props.userData,e.target.value)
  }
  handleDateChange = (e) => {
    this.setState({dateinput:e.target.value})
    this.props.SearchDataByDate(this.props.userData,e.target.value)
  }
  SortDataById = (e) => {
    this.setState({idinput:e.target.value})
    this.props.SortDataById (this.props.userData,e.target.value)
  }
  handleServiceChange = (e) => {
    this.setState({serviceinput:e.target.value})
    this.props.SortDataByService(this.props.userData,e.target.value)
  }
  handleCheckbox = (e) => {
    this.setState({checkedB:!this.state.checkedB})
    this.props.SortDataById(this.props.userData,e.target.value)
  }
  render() {
    const {userData}=this.props;
    const {searchinput,dateinput,idinput,serviceinput,checkedB}=this.state;
   
    return (
      <div className="content">     
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card 
              content={
                <Fragment>
                <Row>
                <Col md={3}>
                <TextField
                label="Search"
                id="margin-dense"
                defaultValue="Global Search"
                onChange={this.onSearchInput}
                value={searchinput}
                helperText="Search by name ,email,phone,etc"
                margin="dense"
              />
              </Col>
              <Col md={2}>
              <label>
              Sort Date 
              <Select
              native
              value={dateinput}
              onChange={this.handleDateChange}
            >
              <option aria-label="None" value="" />
              <option value="isOldestFirst">isOldestFirst</option>
              <option value="isNewestFirst">isNewestFirst</option>
            </Select>
            </label>
              </Col>
              <Col md={2}>
              <label>
              Sort by Id
              <Select
              native
              value={idinput}
              onChange={this.SortDataById}
            >
            <option aria-label="None" value="" />
            <option value="highestfirst">highestfirst</option>
            <option value="lowestfirst">lowestfirst</option>
              
            </Select>
            </label>
              </Col>
              <Col md={2}>
              <Switch
              checked={checkedB}
              onChange={this.handleCheckbox}
              color="primary"
              name="checkedB"
              
            />
              </Col>
              <Col md={3}>
              <label>
              Sort by service
              <Select
              native
              value={serviceinput}
              onChange={this.handleServiceChange}
            >
            {userData.map(item => {
                return  <option key={item._id} value={item.service}>
                {item.service}
                </option>
              })}
             
            </Select>
            </label>
              </Col>
             
              </Row>
              </Fragment>
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

  return{
    userData: state.fetchdata.fetch_Data,
    error: state.fetchdata.fetch_Error,
     filteredData :state.filter.filteredData
  }

}
const dispatchers = dispatch =>{
  return{
   SearchDataByDate : (data,dateinput) => dispatch(filterByDate(data,dateinput)),
   SearchDataByName : (data,nameinput)  =>dispatch(searchByName(data,nameinput)),
   SortDataById : (data,searchinput) => dispatch(sortDataById(data,searchinput)),
   SortDataByService : (data,serviceinput) => dispatch(sortDataByService(data,serviceinput))
 
  }
}

export default connect(mapStateToProps,dispatchers)(FilterCard);






