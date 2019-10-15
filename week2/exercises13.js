// X dan O

var o = 0;
var x = 0;

function xo(str){
    for (var i = 0; i < str.length; i++){
        if(str[i]=== 'x'){
            x++;
        }else {
            o++;
        }
    }
    if ( x == o){
        return true
    }else {
        return false
    }
}
console.log(xo('xo'))