import {clamp,clampOperation,isInteger,resetInputNum} from "./common.mjs";

setInterval(()=>{
    var index = 0;
    while(index < cardNum.value.length){
        if([4,9,14].includes(index)){
            if(cardNum.value[index] !== " "){
                cardNum.value = "";
                return;
            }
        }
        else{
            if(!isInteger(cardNum.value[index])){
                cardNum.value = "";
                return;
            }
        }
        index++;
    }
},100);

setInterval(()=>{
    if(expDate.value.length >= 1)
    {
        if(!isInteger(expDate.value[0]) || parseInt(expDate.value[0]) >= 2)
        {
            expDate.value = "";
            return;
        }
    }
    if(expDate.value.length >= 2)
    {
        if(!isInteger(expDate.value[1]))
        {
            expDate.value = "";
            return;
        }
        else if(expDate.value[0] === "1" && parseInt(expDate.value[1]) > 2)
        {
            expDate.value = "";
            return;
        }
    }
    if(expDate.value.length >= 3)
        {
            if(expDate.value[2] !== "/")
            {
                expDate.value = "";
                return;
            }
        }
    if(expDate.value.length >= 4)
        {
            if(!isInteger(expDate.value[3]))
            {
                expDate.value = "";
                return;
            }
        }
        if(expDate.value.length >= 5)
            {
                if(!isInteger(expDate.value[4]))
                {
                    expDate.value = "";
                    return;
                }
            }
},100);

setInterval(()=>{
    try {
        for(var char of cvc.value)
        {
            if(!parseInt(char))
            {
                throw new Error("Cannot be converted in integer");
            }
        }
    } catch (error) {
        console.error(error);
        cvc.value = "";
        return;
    }
},100);