module.exports = function({ addBase, config }) {
  const variables = Object.keys(config('theme.colors')).map(set => {
    const colors = config(`theme.colors.${set}`)
    const obj = {}

    if (typeof colors === 'object') {
      Object.keys(colors).forEach(color => {
        const cssVar = color === 'default' ? '' : `-${color}`
        obj[`--color-${set}${cssVar}`] = config(`theme.colors.${set}.${color}`)
      })
    } else {
      obj[`--color-${set}`] = config(`theme.colors.${set}`)
    }
    return obj
  })
  addBase({
    ':root': Object.assign({}, ...variables),
  })
}