export class ThemeManager {
  constructor(themesConfig, btnTheme, root = document.querySelector(':root')) {
    this.themesConfig = themesConfig
    this.btnTheme = btnTheme
    this.root = root
  }

  applyTheme(themeColors) {
    themeColors.forEach(({ name, value }) => {
      this.root.style.setProperty(name, value)
    })
  }

  changeThemeById(themeId) {
    const theme = Object.values(this.themesConfig).find(theme => theme.id === themeId)
    if (!theme) return

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
}
