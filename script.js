function matrix_generator(rows,columns){
    //console.log("matrix")
    let element_section = document.getElementById("matrix");
    //console.log(element_section)
    let table = "<table>";

    for(let i = 0; i < rows; i++){
        table = table +"<tr>"
        for (let j= 0; j < columns; j++){
            table = table + "<td></td>"
        }
        table = table +"</tr>"
    }
    table = table +"</table>"

    element_section.innerHTML = table;

    console.log("Matrix of %i x %i generated",rows,columns);

}


let number_of_rows = parseInt(prompt("Select the number of rows") )
let number_of_columns = parseInt(prompt("Select the number of columns"))

matrix_generator(number_of_rows,number_of_columns);