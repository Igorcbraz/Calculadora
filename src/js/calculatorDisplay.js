export class CalculatorDisplay {
  constructor(displayElement) {
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
}
