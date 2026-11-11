var findMaximumXOR = function (nums) {
    let max = 0;
    let mask = 0;

    // Evaluate bits from MSB (30) to LSB (0)
    for (let i = 30; i >= 0; i--) {
        // Expand the mask to include the current bit
        mask |= (1 << i);

        const prefixes = new Set();
        for (let j = 0; j < nums.length; j++) {
            // Keep only the prefix up to the i-th bit
            prefixes.add(nums[j] & mask);
        }

        // Try to set the i-th bit in our answer
        const candidate = max | (1 << i);

        // Check if there are two prefixes that XOR to `candidate`
        for (const prefix of prefixes) {
            if (prefixes.has(prefix ^ candidate)) {
                max = candidate;
                break;
            }
        }
    }

    return max;
};