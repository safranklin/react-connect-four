import { initStore } from 'react-waterfall';

const store = {
  initialState: {
    loaded:false,
    cells: [],
    numRow: 0,
    numCol: 0
  },
  actions: {
    toggleLoaded: ({ loaded }) => ({ loaded: !loaded }),
    generateCells: ({ cells, numRow, numCol },row,col) => {
      let arrayOfCells = [];
      const maxCells = row*col;

      for(let i = 0; i < maxCells; i++){
        arrayOfCells.push(Math.floor(Math.random()*3));
      }

      return {
        cells: arrayOfCells,
        numRow: row,
        numCol: col
      }
    }
  }
};
 
export const { Provider, connect } = initStore(store);