import _ from 'lodash/fp'

const computeClasses = (components) => components && _.flow(
  _.map('props.className'),
  _.filter(_.isString),
  _.map(_.split(/\s+/)),
  _.flatten,
  _.uniq,
)([...components])

export default computeClasses
