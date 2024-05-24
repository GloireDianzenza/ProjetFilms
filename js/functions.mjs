
/**
 * Returns a new number between min and max where n >= min and n <= max; returns value if the condition is already respected
 * @param {number} value The value to test
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number} The new number or value
 */
export function clamp(value,min,max){
    return Math.max(min,Math.min(max,value));
}

/**
 * Returns a clamped number plus an additional operation : + - * X /
 * @param {number} value The value to test
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @param {string} operation The operator
 * @returns {number} The clamped new number or value
 */
export function clampOperation(value,min,max,operation){
    if(operation === "+")
    {
        value++;
        return clamp(value,min,max);
    }
    if(operation === "-")
    {
        value--;
        return clamp(value,min,max);
    }
    if(operation === "*" || operation.toUpperCase() == "X")
    {
        value *= 2;
        return clamp(value,min,max);
    }
    if(operation === "/")
    {
        value /= 2;
        return clamp(value,min,max);
    }
    else{
        return value;
    }
}

/**
 * Checks if a string can be converted to an integer
 * @param {string} text The text to analyze
 * @returns {boolean} The result
 */
export function isInteger(text){
    try{
        var num = parseInt(text);
        if((isNaN(num) || !num) && text !== "0")
        {
            var e = new Error("String cannot be converted to int");
            throw e;
        }
        else{
            return true;
        }
    }catch(exc){
        return false;
    }
}

/**
 * Resets an input to its default value if the value ain't an integer
 * @param {HTMLInputElement} input The concerned input
 * @param {number} defaultValue The default value
 */
export function resetInputNum(input,defaultValue){
    if(!isInteger(input.value)){
        input.value = defaultValue.toString();
    }
}