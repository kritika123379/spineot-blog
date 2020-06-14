import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,

} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class Login extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
         
            <Col md={12}>
            
              <Card
                title="Spineor Web Services"
                category="welcome"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5"]}
                      properties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "johndoe@gmail.com",
                          defaultValue: "johndoe@gmail.com"
                        } 
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5"]}
                      text="Forgot Password"
                    
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "******"
                        },
                      ]}
                    />
                    <Button bsStyle="danger" pullLeft fill type="submit">
                      Login
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
