import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";
import { belowStyle} from "variables/Variables.jsx";
import {NavLink} from "react-router-dom";

function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} />
          <span style={belowStyle}> 
          <NavLink
          to={this.props.path}
          className="nav-link"
          activeClassName="active"
          > {this.props.text} 
        </NavLink>
        </span>
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
