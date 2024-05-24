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

    }
});