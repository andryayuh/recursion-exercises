
const visitAllNodes = function(node, callback) {
  // Your code here
  /* BEGIN SOLUTION */
  node.childNodes.forEach(child => visitAllNodes(child, callback));
  callback(node);
  /* END SOLUTION */
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  /* BEGIN SOLUTION */
  const nodes = [];
  visitAllNodes(node, node => nodes.push(node));
  return nodes;
  /* END SOLUTION */
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};