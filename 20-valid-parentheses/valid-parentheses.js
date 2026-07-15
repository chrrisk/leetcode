var isValid = function(s) {
    const stack = [];
    const pairs = { "(": ")", "[": "]", "{": "}" };

    for (let ch of s) {
        if (pairs[ch]) {
            stack.push(pairs[ch]);      // opener: push what should close it
        } else {
            if (stack.pop() !== ch) {   // closer: must match top of stack
                return false;
            }
        }
    }

    return stack.length === 0;          // leftovers = unclosed openers
};