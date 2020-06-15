import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Moment from 'react-moment';
import Card from "components/Card/Card.jsx";
import { tdUserArray,thUserArray } from "variables/Variables.jsx";

class Currentusers extends Component {
  render() {
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
                        {thUserArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdUserArray.map((prop, key) => {
                        return (
                              <tr key={key}>
                                {prop.slice(0,1).map((prop, key) => {
                                  return <td key={key}><Moment>{prop}</Moment></td>;
                                  
                                })}
                                {prop.slice(1,5).map((prop, key) => {
                                  return <td key={key}>{prop}</td>;
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

export default Currentusers
