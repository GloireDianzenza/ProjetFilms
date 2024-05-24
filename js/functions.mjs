
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