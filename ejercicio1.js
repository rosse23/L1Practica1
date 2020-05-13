var StringArray= ["aba", "aa", "ad", "vcd", "aba"];

function cadm(cad) {
    var max=cad [0].length, cadaux= [];
    for (var i=0; i<cad.length;i++){
        if(max<cad[i].length){
            max=cad[i].length;
            cadaux.splice(0,cadaux.length);
            cadaux.push(cad[i]);
        }    
        else if(max==cad[i].length)
            cadaux.push(cad[i]);
    }
    return cadaux;
}


console.log(cadm(StringArray));