export class Calculator {
  constructor(displayElement = document.getElementById('display')) {
    this.display = displayElement
  }

  handleAddInput(input) {
    this.display.value += input
  }

  handleResetValue() {
    this.display.value = ''
  }

  handleRemoveLastInput() {
    this.display.value = this.display.value.slice(0, -1)
  }

  calculate() {
    if (this.display.value === '') return

    try {
      const result = new Function('return ' + this.display.value)()
      this.display.value = result
    } catch (error) {
      this.display.value = 'Erro!'
    }
  }

  getKeyboardActions() {
    const keyActions = {
      'Enter': () => this.calculate(),
      'Backspace': (event) => {
        this.handleRemoveLastInput()
        event.preventDefault()
      },
      'Escape': () => this.handleResetValue(),
      'Delete': () => this.handleResetValue()
    }

    return keyActions
  }
}
