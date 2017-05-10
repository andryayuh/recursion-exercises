const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  /* BEGIN SOLUTION */
  const nodes = flattenTreeToArray(root);
  const matches = _.filter(nodes, node => node.id === id);
  return matches.length > 0 ? matches[0] : null;
  /* END SOLUTION */
};

const getElementsByClassName = function(root, className) {
  /* BEGIN SOLUTION */
  const nodes = flattenTreeToArray(root);
  return _.filter(nodes, node => (node.className || '').indexOf(className) !== -1);
  /* END SOLUTION */
};

const getElementsByTagName = function(root, tagName) {
  /* BEGIN SOLUTION */
  const nodes = flattenTreeToArray(root);
  return _.filter(nodes, node => (node.tagName || '').toUpperCase() === tagName.toUpperCase());
  /* END SOLUTION */
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
