import _ from 'lodash'
import computeClasses from './computeClasses'

let prevClasses = []

const handleChange = (node, components) => {
  const currentClasses = computeClasses(components)
  const forAdd = _.difference(currentClasses, prevClasses)
  const forRemoval = _.difference(prevClasses, currentClasses)

  _.forEach(forAdd, className => node.classList.add(className))
  _.forEach(forRemoval, className => node.classList.remove(className))

  prevClasses = currentClasses
}

export default handleChange
