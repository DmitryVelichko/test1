<script>
 
// JavaScript Program to sort 2D matrix row-wise
 
    function sortRowWise(m)
    {
     

    // printing the sorted matrix
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++)
            document.write(m[i][j] + " ");
        document.write("<br/>");
    }

    return 0;
    }
 
// Driver code
 
        let m = [[ 9, 8, 7, 1 ],
                      [ 7, 3, 0, 2 ],
                      [ 9, 5, 3, 2 ],
                      [ 6, 3, 1, 2 ]];
        sortRowWise(m);

</script>