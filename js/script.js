var createBtn = document.querySelector("input[type='button']");
createBtn.addEventListener( "click", e => {
    let numFilas = document.querySelector("#numFilas").value;
    let numCols = document.querySelector("#numCols").value;
    removeErrorAlert();
    if ((!isNaN(numFilas)&&!isNaN(numCols)&&numFilas>0&&numCols>0)){
        crearTablaAvanzada(numFilas, numCols);
    } else {
        insertErrorAlert();
    }
} );

function insertErrorAlert(){
    let errorNode = document.createElement("p");
    errorNode.style.color = "red";
    let errorText = document.createTextNode("Debes proporcionar un número entero de valores para filas y columnas");
    errorNode.append(errorText);
    createBtn.after(errorNode);
    alert("ERROR");
}

function removeErrorAlert(){
    if (createBtn.nextElementSibling!=null){
        createBtn.nextElementSibling.remove(); 
    }
}

function crearTabla( numFilas, numCols ){
    if(document.querySelector("table")){
        document.querySelector("table").remove();
    }
    alert("Voy a crear una tabla de " + numFilas + "x" + numCols);
    let tabla = document.createElement("table");
    tabla.setAttribute("class","comicGreen");
    for(let i=0; i < numFilas; i++ ){
        let fila = document.createElement("tr");
        for (let j=0; j < numCols; j++ ){
            let columna = document.createElement("td");
            let colText = document.createTextNode(i + "," + j);
            columna.append(colText);
            fila.append(columna);
        }
        tabla.append(fila);
    }
    document.querySelector("main").append(tabla);
}

function crearTablaAvanzada( numFilas, numCols ){
    if(document.querySelector("table")){
        document.querySelector("table").remove();
    }
    alert("Voy a crear una tabla de " + numFilas + "x" + numCols);
    let tabla = document.createElement("table");
    tabla.setAttribute("class","comicGreen");
    let titNode = document.createElement("caption");
    let titText = document.createTextNode("Tabla avanzada de " + numFilas + "x" + "numCols");
    titNode.append(titText);
    tabla.append(titNode);
    let colCont = null;
    for(let i=-1; i <= numFilas; i++ ){        
        let fila = document.createElement("tr");
                
        for (let j=0; j < numCols; j++ ){
            let columna = null;
            let colText = null;
            if(i==-1){
                columna = document.createElement("th");
                colText = document.createTextNode("COL " + (j+1));           
            } else if (i == (numFilas) ) {
                columna = document.createElement("td");
                columna.setAttribute("colspan", numCols);
                colText = document.createTextNode("Pie de la tabla avanzada");
            }
            else{
                columna = document.createElement("td");
                colText = document.createTextNode((i+1) + "," + (j+1));
            }                 
                        
            columna.append(colText);
            fila.append(columna);
            
            if(i == (numFilas)){
                break;
            }
        }

        if(i==-1){
            colCont = document.createElement("thead"); 
            colCont.append(fila);  
            tabla.append(colCont);       
        } else if (i == (numFilas) ) {
            colCont = document.createElement("tfoot");
            colCont.append(fila);  
            tabla.append(colCont);
        }
        else{
            if(i == 0){
            colCont = document.createElement("tbody");
            }
            colCont.append(fila);
            if(i == (numFilas-1)){                
                tabla.append(colCont);
            }
        } 
        
    }
    document.querySelector("main").append(tabla);
}