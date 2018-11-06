const GameUtility = {
    
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
        let colIndicies = GameUtility.getIndiciesInCol(colIndex, numCol, numRow);
        for(let i = colIndicies.length-1; i >= 0; i--){
            if(cells[colIndicies[i]] == 0){
                return colIndicies[i];
            }
        }
        return null;
    },


    // Accepts parameter, tokenType
    // tokenType = 1, player
    // tokenType = 2, cpu
    checkWin: ({cells, numRow, numCol}, tokenType) => {
        
        let count = 0;
        let winCount = 4;

        // Check rows
        for(let i = 0; i < cells.length; i++) {
            if(i%numCol === 0){
                count = 0;
            }
            if(cells[i] === tokenType){
                count++;
            } 
            else {
                count = 0;
            }

            if(count >= winCount){
                return true;
            }
        }

        // Check cols
        for(let i = 0; i < cells.length; i++){
            if(cells[i] === tokenType){
                count = 0;
                for(let a = i; a < cells.length; a += numCol){
                    if(cells[a] === tokenType){
                        count++;
                    } 
                    else {
                        count = 0;
                    }
                    if(count >= winCount){
                        return true;
                    }
                }
            } else {
                count = 0;
            }
            if(count >= winCount){
                return true;
            }
        }
        // Check main diagonal
        for(let i = cells.length; i >= 0; i--){
            count = 0;
            if(cells[i] === tokenType){
                for(let a = i; a >= 0; a -= numCol+1){
                    if(cells[a] === tokenType){
                        count++;
                    } else {
                        count = 0;
                    }
                    if(count >= winCount){
                        return true;
                    }
                }
            }
        }

        count = 0;

        // Check secondary diagonal
        for(let i = 0; i < cells.length; i++){
            count = 0;
            if(cells[i] === tokenType){
                for(let a = i; a < cells.length; a += numCol-1){
                    if(cells[a] === tokenType){
                        count++;
                    } else {
                        count = 0;
                    }
                    if(count >= winCount){
                        return true;
                    }
                }
            }
        }

        // If we didn't find a win state
        return false;

    }

}

export default GameUtility;