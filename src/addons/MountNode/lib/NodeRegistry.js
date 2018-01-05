export default class NodeRegistry {
  constructor() {
    this.nodes = new Map()
  }

  add = (node, component) => {
    if(this.nodes.has(node)) {
      const set = this.nodes.get(node)

      set.add(component)
      return
    }

    const set = new Set()
    set.add(component)

    this.nodes.set(node, set)
  }

  del = (node, component) => {
    const set = this.nodes.get(node)

    if(set.size === 1) {
      this.nodes.delete(node)
      return
    }

    set.delete(component)
  }

  emit = (node, callback) => {
    callback(node, this.nodes.get(node))
  }
}