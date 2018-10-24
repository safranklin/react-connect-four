const GridUtility = {
    
    getIndiciesInCol: (colIndex, numCol, numRow) => {
        let returnedIndicies = [];

        for(let i = 0; i < numRow; i++) {
          returnedIndicies.push((i * numCol) + colIndex);
        }

        return returnedIndicies;
    },

    getIndex: (row,col,numRow,numCol) => {
        let maxIndex = numRow*numCol;
        let index = row*(numCol-1) + col;
        if (index >= maxIndex || index < 0){
            return -1;
        } else {
            return index;
        }
    },

    findFirstEmptyCellInCol: (colIndex, cells, numRow, numCol) => {
        let colIndicies = GridUtility.getIndiciesInCol(colIndex, numCol, numRow);
        for(let i = colIndicies.length-1; i >= 0; i--){
            if(cells[colIndicies[i]] == 0){
                return colIndicies[i];
            }
        }
        return null;
    }


}

export default GridUtility;