const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

/*START SOLUTION*/
const isObject = function(object) {
  // This is needed to disambiguate a plain object literal from other types of objects.
  // E.g., `Date` objects (which would instead say "[object Date]").
  // See ECMAScript 5 Section 8.6.2 for the gory details.
  return Object.prototype.toString.call(object) === '[object Object]';
};

const stringifyArray = function(object) {
  return '[' + _(object).map(function(item) {
    return stringify(item);
  }).join(',') + ']';
};

const stringifyObject = function(object) {
  const strings = [];

  _.each(object, function(item, key) {
    if (_.isUndefined(item) || _.isFunction(item)) {
      return;
    }

    strings.push(stringify(key) + ':' + stringify(item));
  });

  return '{' + strings.join(',') + '}';
};
/*END SOLUTION*/

const stringify = function(obj) {
  // your code goes here
  /*START SOLUTION*/
  if (Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (isObject(obj)) {
    return stringifyObject(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  } else {
    return obj + '';
  }
  /*END SOLUTION*/
};

module.exports = {
  stringify: stringify
};