import { buttons } from '../../constants/index.js'

export class Button {
  #buttonContainer
  #buttonRows = buttons

  constructor(buttonContainer = document.getElementById('buttons-container')) {
    this.#buttonContainer = buttonContainer
  }

  generateButtons() {
    this.#buttonRows.forEach(row => {
      const rowElement = document.createElement('div')
      rowElement.className = 'row'

      row.forEach(button => {
        const buttonElement = document.createElement('button')
        buttonElement.className = `col button-1 ${button.class || 'add-input'}`
        buttonElement.setAttribute('role', 'button')
        buttonElement.setAttribute('value', button.value)
        if (button.id) buttonElement.id = button.id
        if (button.dataOperation) buttonElement.setAttribute('data-operation', button.dataOperation)

        buttonElement.innerHTML = `
          <span class="button-1-shadow"></span>
          <span class="button-1-edge"></span>
          <span class="button-1-front text">${button.value}</span>
        `

        rowElement.appendChild(buttonElement)
      })

      this.#buttonContainer.appendChild(rowElement)
    })
  }
}
