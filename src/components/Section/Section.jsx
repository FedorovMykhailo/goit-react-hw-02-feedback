import React, { Component } from "react";
import css from "../Section/Section.module.css"

export default class Section extends Component {
    render() {
        const { title, children } = this.props;
        return(
            <div className={css.section}>
                <h2>{title === "" ? 'Please leave feedback' : title}</h2>
                {children}
            </div>)
  }
}