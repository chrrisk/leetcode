/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const text = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) return false;
    }
    return true;
};