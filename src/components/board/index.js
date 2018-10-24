import React, { Component } from 'react';

import { connect } from 'src/store';
import Cell from 'src/components/board/cell';
require('./style.less');

class Board extends Component {


  getIndiciesInCol(colIndex, numCol, numRow){
    let returnedIndicies = [];

    for(let i = 0; i < numRow; i++) {
      returnedIndicies.push((i * numCol) + colIndex);
    }

    return returnedIndicies;
  }

  renderCol(colIndicies, colIndex) {
    const col = [];


    for(let i = 0; i < colIndicies.length; i++) {
      let cellIndex = colIndicies[i];
      console.log(cellIndex);
      col.push(<Cell key={i} type={this.props.cells[cellIndex]} cellId={cellIndex} />);
    }

    return (
      <div className="board-col" key={colIndex}>
        {col}
      </div>
    );

  }

  renderCells(cells) {
    const renderArray = [];


    for(let i = 0; i < this.props.numCol; i++) {

      let indicies = this.getIndiciesInCol(i, this.props.numCol, this.props.numRow);

      renderArray.push(this.renderCol(indicies,i));

    }

    return renderArray;

  }

  render() {
    return(
        <div>
          <p>{"Board"}</p>
          {this.renderCells(this.props.cells)}
          <button onClick={ ()=>{ this.props.actions.generateCells(7,6)} } >{"Make Cells"}</button>
        </div>
    )
  }
}

//- pass this component through the connect method to attach store values to props.
//- actions get mapped to props without explicitly stating anything. you can use any action from the store.
export default connect(state => ({ 
  loaded: state.loaded,
  cells: state.cells,
  numRow: state.numRow,
  numCol: state.numCol
}))(Board);
