import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import { Card } from "components/Card/Card";
import { FormInputs } from "components/FormInputs/FormInputs";
import Button from "components/CustomButton/CustomButton";
/*redux */
import { loginUserAction } from '../redux/actions/userActions';
import { connect } from "react-redux";
import { LOGIN_LOADING } from "redux/actions/types";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables";
import { LOGIN_SUCCESS } from "redux/actions/types";
import { _authCheck } from "utils/authCheck";

class Login extends Component {
  state = {
    email: '',
    password: '',
    _notificationSystem: null
  }

  componentDidMount(){
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    if(!!_authCheck()){
      this.props.history.push('/admin/dashboard')
    }
  }
  _onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUserAction({email, password})
  }

  _setValue = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  componentWillReceiveProps(nextProps){
    if(this.props.authUser !== nextProps.authUser){
      if(!!nextProps.authUser && !!nextProps.authUser.type){
        if(nextProps.authUser.type === LOGIN_LOADING){
          this._addNotification('Logging in, please wait...', 'info')
        }else if(nextProps.authUser.type === LOGIN_SUCCESS){
          this._addNotification(nextProps.authUser.message, 'success')
          this.props.history.push("/admin/dashboard")
        }else{
          this._addNotification(nextProps.authUser.message, 'error')
        }
      }
    }
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
    const { email, password } = this.state;
    console.log(email,password);
    const { authUser: {type, data} } = this.props
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <NotificationSystem ref="notificationSystem" style={style} />

            <Col md={12} className="bg-dark">
              <div  className="center-container width_50">
                <Card
                plain
                  title="Spineor Web Services"
                  category="welcome"
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
                        text="Forgot Password"
                        path="/forgotPassword"
                        properties={[
                          {
                            label: "Password",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "*******",
                            onChange: this._setValue.bind(this),
                            value: password,
                            name: 'password'
                          },
                        ]}
                      />
                      <Button 
                      bsStyle="danger" 
                      pullLeft 
                      fill 
                      type="submit" 
                      disabled={type === LOGIN_LOADING}
                      >
                        Login
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

export default connect(mapStateToProps, { loginUserAction })(Login);
