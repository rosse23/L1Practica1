//var cad="(bar)";
//var cad= "foo(bar)baz";
//var cad= "foo(bar)baz(blim)";
var cad= "foo(bar(baz))blim";

var part1="", part="";
while (cad.indexOf("(")>=0) {
    for (var i = cad.lastIndexOf("("); i<cad.length; i++) {
        if(cad.charAt(i)==")")
        {   part=cad.slice(cad.lastIndexOf("("),i+1);
            break;
        }}
     part1= rev( part);
     cad=cad.replace(part, part1)
}
console.log(cad);
function rev(part) {
    var res="";
    for (var i=part.length-2; i>0;i--){
        res= res+part.charAt(i);
    }
    return res; 
}