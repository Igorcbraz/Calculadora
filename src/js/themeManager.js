export class ThemeManager {
  constructor(themesConfig, btnTheme, keySelectors, root = document.querySelector(':root')) {
    this.themesConfig = themesConfig
    this.btnTheme = btnTheme
    this.keySelectors = [...keySelectors]
    this.root = root
  }

  applyTheme(themeColors) {
    themeColors.forEach(({ name, value }) => {
      this.root.style.setProperty(name, value)
    })
  }

  applyStoredKeys() {
    this.keySelectors.forEach(selector => {
      const key = localStorage.getItem(selector.getAttribute('data-key'))
      if (key) this.setKeyForTheme(selector, key)
    })
  }

  changeThemeById(themeId) {
    const theme = Object.values(this.themesConfig).find(theme => theme.id === themeId)
    if (!theme) return

    this.btnTheme.value = theme.id
    this.applyTheme(theme.colors)
  }

  setPreferColorSchemeTheme() {
    if (!this.btnTheme || !window.matchMedia) return

    Object.keys(this.themesConfig).forEach(themeName => {
      const matchedPreferredScheme = window.matchMedia(`(prefers-color-scheme: ${themeName})`)?.matches

      if (matchedPreferredScheme) this.btnTheme.value = this.themesConfig[themeName].id
    })

    this.changeThemeById(this.btnTheme.value)
  }

  setKeyForTheme(selector, key) {
    selector.setAttribute('data-chosen-key', key)
    selector.textContent = key.toUpperCase()
    localStorage.setItem(selector.getAttribute('data-key'), key)
  }

  resetKeys() {
    this.keySelectors.forEach(selector => {
      selector.removeAttribute('data-chosen-key')
      selector.textContent = selector.getAttribute('data-key')
      localStorage.removeItem(selector.getAttribute('data-key'))
    })
  }

  getThemeIdByKey(key) {
    const themeId = this.keySelectors.find(selector => selector.getAttribute('data-chosen-key') === key)?.getAttribute('data-key')

    return themeId
  }
}
