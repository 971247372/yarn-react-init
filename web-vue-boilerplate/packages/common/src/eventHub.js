const hub = {
  install(Vue) {
    const hub = new Vue()
    Object.defineProperties(hub, {
      on: {
        get: function() {
          return hub.$on
        }
      },
      emit: {
        get: function() {
          return hub.$emit
        }
      },
      off: {
        get: function() {
          return hub.$off
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$eventHub', {
      get: function() {
        return hub
      }
    })

    Object.defineProperty(Vue, 'eventHub', {
      get: function() {
        return hub
      }
    })
  }
}

export default hub
