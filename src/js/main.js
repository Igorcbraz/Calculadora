import { Calculator } from './Calculator.js'
import { ThemeManager } from './ThemeManager.js'
import { Guide } from './Guide.js'
import { Speak } from './Speak.js'
import { Button } from './components/Button.js'
import { Stars } from './Stars.js'

import { themes } from '../constants/index.js'

document.addEventListener('DOMContentLoaded', async () => {
  const buttons = new Button()
  buttons.generateButtons()

  const calculator = new Calculator()
  const themeManager = initializeThemeManager()

  addEventListeners(calculator, themeManager)
  new Speak(calculator)
  initializeGuide()

  const stars = new Stars()
  await stars.init()
})

function initializeThemeManager() {
  const themeManager = new ThemeManager(themes)
  const btnTheme = themeManager.getBtnTheme()
  const keySelectors = themeManager.getKeySelectors()

  themeManager.setPreferColorSchemeTheme()
  themeManager.applyStoredKeys()
  btnTheme.addEventListener('change', () => themeManager.changeThemeById(btnTheme.value))

  keySelectors.forEach(selector => {
    selector.addEventListener('click', () => {
      alert('Ao clicar em OK, pressione uma tecla para associar a este tema.')

      const hiddenInput = document.getElementById('hiddenInput')
      hiddenInput.focus()

      const captureKey = (event) => {
        themeManager.setKeyForTheme(selector, event.key)
        document.removeEventListener('keydown', captureKey)
      }

      document.addEventListener('keydown', captureKey)
    })
  })

  return themeManager
}

function initializeGuide() {
  const guide = new Guide()

  guide.loadSteps()
  guide.loadConfig()
  guide.start()

  return guide
}

function addEventListeners(calculator, themeManager) {
  document.querySelector('.reset').addEventListener('click', () => calculator.handleResetValue())
  document.querySelector('.remove-last').addEventListener('click', () => calculator.handleRemoveLastInput())
  document.querySelector('.calculate').addEventListener('click', () => calculator.calculate())
  document.getElementById('reset-theme').addEventListener('click', () => themeManager.resetKeys())

  document.querySelectorAll('.add-input').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.operation || button.value
      calculator.handleAddInput(value)
    })
  })

  document.addEventListener('keydown', (event) => {
    const keyActions = calculator.getKeyboardActions()

    if (keyActions[event.key]) {
      keyActions[event.key](event)
    } else if ('0123456789+-*/.'.includes(event.key)) {
      calculator.handleAddInput(event.key)
    }

    const themeId = themeManager.getThemeIdByKey(event.key)
    if (themeId) themeManager.changeThemeById(themeId)
  })
}
