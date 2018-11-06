import React, { Component } from 'react';
import Icon_Example from '../../images/icon.svg';

import { connect } from 'src/store';
import Board from 'src/components/board';
require('./style.less');

class Main extends Component {

  render() {
    return(
        <div>
          <Board size="large" />
        </div>
      )
  }
}

//- pass this component through the connect method to attach store values to props.
//- actions get mapped to props without explicitly stating anything. you can use any action from the store.
export default connect(state => ({ 
  loaded: state.loaded
}))(Main);
