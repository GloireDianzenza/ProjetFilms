import {clamp,clampOperation,isInteger,resetInputNum} from "./common.mjs";

setInterval(()=>{
    for(var input of document.querySelectorAll(".numQuantity")){
        resetInputNum(input,1);
        changerPrix();
    }
},100);

for(var quan of document.querySelectorAll(".quantity")){
    quan.querySelector(".plus").addEventListener("click",(e)=>{
        var input = e.target.parentNode.querySelector("input");
        var value = input.value;
        if(!isInteger(value))
        {
            resetInputNum(input,1);
            return;
        }
        else
        {
            input.value = clampOperation(parseInt(value),1,10,"+").toString();
            changerPrix();
        }
    })
    quan.querySelector(".minus").addEventListener("click",(e)=>{
        var input = e.target.parentNode.querySelector("input");
        var value = input.value;
        if(!isInteger(value))
        {
            resetInputNum(input,1);
            changerPrix();
            return;
        }
        else
        {
            input.value = clampOperation(parseInt(value),1,10,"-").toString();
            changerPrix();
        }
    })
}

function changerPrix()
{
    var prix1 = parseInt(document.querySelectorAll(".quantity input")[0].value) * 15;
    var prix2 = parseInt(document.querySelectorAll(".quantity input")[1].value) * 10;
    var total = prix1 + prix2;
    $('#total').html(total.toString());
}