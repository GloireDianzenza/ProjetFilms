
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