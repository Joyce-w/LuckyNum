function starOutGrid(grid) {

    //find coordinates of '*'
    let n;
    let m = []

    //loop thru each row on grid
    for (let x of grid) {
        //find a row/col that contains '*'
        if (x.includes('*')) {
            n = grid.indexOf(x)
            m.push(x.indexOf('*'))

            //change row n to all '*' 
            for (row in grid) {
                if (parseInt(row) === n) {
                    grid[row] = ["*", "*", "*"]
                }
            }
        }

    }
    //change all values in same col to '*'
    for (row in grid) {
        for (let idx of m) {
            grid[row][idx] = '*'            
        }

    }
    return grid
}
