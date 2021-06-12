/**
 * Joins an array of JSX elements using commas or provided joiner.
 * @param {*} array Array of JSX elements.
 * @param {*} joiner String to join with, defaults to a comma.
 * @returns JSX Array
 */
function JSXJoin (array, joiner = ', ') {
  return array.reduce((acc, elem) => {
    return acc === null ? [elem] : [...acc, joiner, elem]
  }, null)
}

export default JSXJoin
