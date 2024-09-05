import { Calculator } from './calculator.js'
import { ThemeManager } from './themeManager.js'
import { Guide } from './guide.js'

import { themes } from '../constants/index.js'

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display')
  const calculator = new Calculator(display)

  const btnTheme = document.getElementById('btnTheme')
  const keySelectors = document.querySelectorAll('.key-selector')
  const themeManager = new ThemeManager(themes, btnTheme, keySelectors) 
    
  themeManager.setPreferColorSchemeTheme()
  themeManager.applyStoredKeys()

  const guide = new Guide()
  guide.loadSteps()
  guide.loadConfig()
  guide.start()

  document.querySelectorAll('.add-input').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.operation || button.value
      calculator.handleAddInput(value)
    })
  })

  document.querySelector('.reset').addEventListener('click', () => {
    calculator.handleResetValue()
  })

  document.querySelector('.remove-last').addEventListener('click', () => {
    calculator.handleRemoveLastInput()
  })

  document.querySelector('.calculate').addEventListener('click', () => {
    calculator.calculate()
  })

  btnTheme.addEventListener('change', () => {
    themeManager.changeThemeById(btnTheme.value)
  })

  keySelectors.forEach(selector => {
    selector.addEventListener('click', () => {
      alert('Ao clicar em OK, pressione uma tecla para associar a este tema.')
  
      const captureKey = (event) => {
        themeManager.setKeyForTheme(selector, event.key)
        document.removeEventListener('keydown', captureKey)
      }
  
      document.addEventListener('keydown', captureKey)
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

  document.getElementById('reset-theme').addEventListener('click', function() {
    themeManager.resetKeys()
  })
})
