Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      copied: false
    }
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
      }
    }
  },
  methods: {
    reset() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
      this.copied = false
      this. resetH2Color()
    },
    async copy() {
      let text = `transform:${this.box.transform};`
      await navigator.clipboard.writeText(text)
      this.copied = true
      this. setH2Color()

      alert("CSS Copied to Clipboard!")
    },
    setH2Color() {
      const h2Element = document.querySelector('h2');
      if (h2Element) {
        h2Element.style.color = 'orange';
      }
    },
    resetH2Color() {
      const h2Element = document.querySelector('h2');
      if (h2Element) {
        h2Element.style.color = '#8d81f3'; // Volte à cor original do h2
      }
    }
  }
}).mount('#app')