import { CalculatorDisplay } from './calculatorDisplay.js'
import { ThemeManager } from './themeManager.js';

import { themes } from '../constants/index.js'

const display = document.getElementById('display')
const calculatorDisplay = new CalculatorDisplay(display)

const btnTheme = document.getElementById('btnTheme')
const themeManager = new ThemeManager(themes, btnTheme) 

document.addEventListener('DOMContentLoaded', () => {
  themeManager.setPreferColorSchemeTheme();

  document.querySelectorAll('.add-input').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.operation || button.value
      calculatorDisplay.handleAddInput(value)
    })
  })

  document.querySelector('.reset').addEventListener('click', () => {
    calculatorDisplay.handleResetValue()
  })

  document.querySelector('.remove-last').addEventListener('click', () => {
    calculatorDisplay.handleRemoveLastInput()
  })

  document.querySelector('.calculate').addEventListener('click', () => {
    calculatorDisplay.calculate()
  })

  btnTheme.addEventListener('change', () => {
    themeManager.changeThemeById(btnTheme.value)
  })
})
