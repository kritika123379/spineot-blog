
import React, { Component } from "react";
import {categoryStyle} from "../../variables/Variables"

export class Card extends Component {
  render() {
    return (
      <div className={this.props.back}>
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
        <p className={"category"}>{this.props.category}</p>
          <h4 className="title">{this.props.title}</h4>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Card;
