export default function (defaults, extras) {
  // eslint-disable-next-line no-param-reassign
  defaults = defaults || {};
  // eslint-disable-next-line no-param-reassign
  extras = extras || {};
  return Object.keys(defaults).concat(Object.keys(extras)).reduce((acc, val) => {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val];
    return acc;
  }, {});
}
