import React, { Component } from 'react';

import { connect } from 'src/store';
require('./style.less');

class Cell extends Component {

  render() {
    let myClassName = "cell";
    switch(this.props.type){
        case 0: myClassName += " cell-empty";
        break;
        case 1: myClassName += " cell-player";
        break;
        case 2: myClassName += " cell-computer";
        break;
        default: myClassName += " cell-empty";
    }

    return(
        <div className={myClassName}>
            <p>{this.props.cellId}</p>
        </div>
    )
  }
}

export default Cell;
