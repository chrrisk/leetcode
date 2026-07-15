/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const counts = new Map();

    for (let i of s){
        if (counts.has(i)){
            counts.set(i,counts.get(i) + 1);
        }
        else{
            counts.set(i,1);
        }
    }


    for (const ch of t) {
        const count = counts.get(ch) ?? 0;
        if (count === 0) return false;
        counts.set(ch, count - 1);
    }
    return true;
    

};