/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let node = preorder.split(',');
    let n = node.length;
    let slot = 1;

    for(let i =0 ; i<n; i++){
        slot--;

        if(slot < 0) return false;

        if(node[i] !== '#'){
            slot += 2;
        }
    }


    return slot === 0
};