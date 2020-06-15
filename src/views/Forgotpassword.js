import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
/*redux */
import { loginUserAction } from '../redux/actions/userActions';
import { connect } from "react-redux";
import { LOGIN_LOADING } from "redux/actions/types";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";



class Forgotpassword extends Component {
  state = {
    email: '',
    password: '',
    newpassword:'',
    _notificationSystem: null
  }
  componentDidMount(){
    this.setState({ _notificationSystem: this.refs.notificationSystem });
  }
  
  _onSubmit = e => {
    e.preventDefault();
    const { email, password ,newpassword} = this.state;
    this.validatePassword(email,password,newpassword);
    
  }
  validatePassword = (email,pass,newpass) => {
    console.log(pass,newpass);
  
    let isValid =true;

    if(pass == null && newpass == null && email == null){
        isValid = false
        this._addNotification('Please Enter Values to reset Password....', 'error')
    }
    if(pass !== newpass){
        isValid=false
        this._addNotification('Password and ConfirmPassword donot match ...', 'error')
    }
    if(pass.maxLength !== newpass.maxLength){
        isValid= false
        this._addNotification('Password is too weak...', 'error')
    }
    return isValid
  
  }


  _setValue = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  componentWillReceiveProps(nextProps){
   
  }

  _addNotification = (message, type) => {
    // event.preventDefault();
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          {message}
        </div>
      ),
      level: type,
      position: 'tr',
      autoDismiss: 15
    });
  };
  render() {
    const { email, password,newpassword } = this.state;
    const { authUser: {type, data} } = this.props
    return (
      <div className="content">
        <Grid fluid>
          <Row> 
          <NotificationSystem ref="notificationSystem" style={style} />
            <Col md={12} className="bg-light">
              <div  className="center-container width_50">
                <Card
                  title="Spineor Web Services"
                  category="forgot Password"
                  content={
                    <form onSubmit={this._onSubmit.bind(this)}>
                      <FormInputs
                        ncols={["col-md-5"]}
                        properties={[
                          {
                            label: "Email",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "johndoe@gmail.com",
                            onChange: this._setValue.bind(this),
                            value: email,
                            name: 'email'
                          }
                        ]}
                      />
                      <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                        {
                          label: "Enter New password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Enter New Password",
                          onChange: this._setValue.bind(this),
                          value: password,
                          name: 'password'
                        }
                      ]}
                    />
                      <FormInputs
                        ncols={["col-md-5"]}
                        text=" Login again ?"
                        path="/Login"
                        properties={[
                          {
                            label: "Confirm Password",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "Confirm Password",
                            onChange: this._setValue.bind(this),
                            value: newpassword,
                            name: 'newpassword'
                          },
                        ]}
                      />
                      <Button bsStyle="primary" pullLeft fill type="submit" disabled={type === LOGIN_LOADING}>
                       Confirm Password 
                      </Button>
                      <div className="clearfix" />
                    </form>
                  }
                />
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return {
    authUser
  }
}

export default connect(mapStateToProps, { loginUserAction })(Forgotpassword);
