import { initStore } from 'react-waterfall';
import GameUtility from 'src/util/gameutility';
import Coupler from 'src/util/coupler';

const store = {
  initialState: {
    loaded:false,
    cells: [],
    lastUpdated: Date.now(),
    numRow: 0,
    numCol: 0
  },
  actions: {
    toggleLoaded: ({ loaded }) => ({ loaded: !loaded }),
    generateCells: ({ cells, numRow, numCol, lastUpdated },col,row) => {
      let arrayOfCells = [];
      const maxCells = row*col;

      for(let i = 0; i < maxCells; i++){
        // Math.floor(Math.random()*3)
        arrayOfCells.push(0);
      }

      lastUpdated = Date.now();

      return {
        cells: arrayOfCells,
        numRow: row,
        numCol: col,
        lastUpdated: lastUpdated
      }
    },
    setCell: ({cells, lastUpdated}, index, value ) => {
      cells[index] = value;
      lastUpdated = Date.now();
      return{
          cells: cells,
          lastUpdated: lastUpdated
      }
    },
    dropTokenInColumn: ({cells, numRow, numCol}, colIndex, tokenType) => {
      // find first availble space in that column
      let validSpace = GameUtility.findFirstEmptyCellInCol(colIndex, cells, numRow, numCol);

      // can a token go in this column?
      if(validSpace === undefined){
        // exit
        // code stops
        // return
        return {}
      }

      // TokenType = 2 for cpu
      // TokenType = 1 for player
      // TokenType = 0 for none
      // set cell of first available space to blue
      cells[validSpace] = tokenType;
 
      // check if player won
      if(GameUtility.checkWin({cells, numRow, numCol}, 1)){
        console.log("Player won!");
      } else { // if player didn't win
        cells = Coupler.determineNextMove(cells);
        
        // check for enemy win
        if(GameUtility.checkWin({cells, numRow, numCol}, 2)){
            console.log("CPU won!");
        } 
      }


      let lastUpdated = Date.now();

      return {
        cells: cells,
        lastUpdated: lastUpdated
      }
    }
  }
};
 
export const { Provider, connect } = initStore(store);