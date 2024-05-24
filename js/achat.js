import {clamp,clampOperation,isInteger,resetInputNum} from "./common.mjs";

setInterval(()=>{
    resetInputNum(numProducts,1);
},100);

$('.range-minus').click(function(){
    if(!isInteger(numProducts.value))
    {
        resetInputNum(numProducts,1);
    }
    else{
        var num = parseInt(numProducts.value);
        numProducts.value = clampOperation(num,1,10,"-").toString();
        changerPrix();
    }
});
$('.range-plus').click(function(){
    if(!isInteger(numProducts.value))
    {
        resetInputNum(numProducts,1);
    }
    else{
        var num = parseInt(numProducts.value);
        numProducts.value = clampOperation(num,1,10,"+").toString();
        changerPrix();
    }
});

function changerPrix(){
        if(!isInteger(numProducts.value))
        {
            resetInputNum(numProducts,1);
        }
        else{
            var num = parseInt(numProducts.value);
            console.log(num);
        } 
}