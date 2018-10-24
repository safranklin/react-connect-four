import { initStore } from 'react-waterfall';
import GridUtility from 'src/util/gridutility';
import Coupler from 'src/util/coupler';

const store = {
  initialState: {
    loaded:false,
    cells: [],
    lastUpdated: 0,
    numRow: 0,
    numCol: 0
  },
  actions: {
    toggleLoaded: ({ loaded }) => ({ loaded: !loaded }),
    generateCells: ({ cells, numRow, numCol, lastUpdated },row,col) => {
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
    dropTokenInColumn: ({cells, lastUpdated, numRow, numCol}, colIndex) => {
      // find first availble space in that column
      let validSpace = GridUtility.findFirstEmptyCellInCol(colIndex, cells, numRow, numCol);

      // can a token go in this column?
      if(validSpace === undefined){
        // exit
        // code stops
        // return
        return {}
      }

      // 1 is player
      // set cell of first available space to blue
      cells[validSpace] = 1;

      // check for win

        // if player didn't win
          cells = Coupler.determineNextMove(cells);
          // check for enemy win

      lastUpdated = Date.now();

      return {
        cells: cells,
        lastUpdated: lastUpdated
      }
    }
  }
};
 
export const { Provider, connect } = initStore(store);