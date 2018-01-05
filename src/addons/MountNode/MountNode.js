import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {TYPES} from '../../lib/META'
import handleChange from './lib/handleChange'
import NodeRegistry from './lib/NodeRegistry'

const nodeRegistry = new NodeRegistry()

/**
 * Component.
 */
export default class MountNode extends Component {
  static propTypes = {
    /** Primary content. */
    className: PropTypes.string,

    node: PropTypes.node,
  }

  static _meta = {
    name: 'MountNode',
    type: TYPES.ADDON,
  }

  shouldComponentUpdate({className: next}) {
    const {className: current} = this.props

    return next !== current
  }

  componentWillMount() {
    const { node } = this.props

    nodeRegistry.add(node, this)
    nodeRegistry.emit(node, handleChange)
  }

  componentDidUpdate() {
    const { node } = this.props

    nodeRegistry.emit(node, handleChange)
  }

  componentWillUnmount() {
    const { node } = this.props

    nodeRegistry.del(node, this)
    nodeRegistry.emit(node, handleChange)
  }

  render() {
    return null
  }
}
