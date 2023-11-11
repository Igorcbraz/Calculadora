const display  = document.getElementById('display')

function addInputToDisplay(input) {
  const displayValue = display.value
  display.value = displayValue + input
}

function calculate() {
  if (display.value === '') return

  const result = eval(display.value)
  display.value = result
}

function resetDisplayValue() {
  display.value = ""
}

function removeLastInput() {
  display.value = display.value.slice(0, -1)
}
