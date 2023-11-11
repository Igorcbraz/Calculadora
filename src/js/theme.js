const root = document.querySelector(':root');
const theme = {
  default() {
    root.style.setProperty('--background'          , '#3a4764');
    root.style.setProperty('--background-dark'     , '#232c43');
    root.style.setProperty('--background-very-dark', '#182034');
    
    root.style.setProperty('--key-color-top'       , '#ffffff');
    root.style.setProperty('--key-color-bottom'    , '#3a4764');
    root.style.setProperty('--key-background'      , '#eae3dc');
    root.style.setProperty('--key-background-dark' , '#dfd9d2');
    root.style.setProperty('--key-shadow'          , '#b4a597');

    root.style.setProperty('--key-blue-background' , '#637097');
    root.style.setProperty('--key-blue-shadow'     , '#404e72');

    root.style.setProperty('--key-red-background'  , '#d03f2f');
    root.style.setProperty('--key-red-shadow'      , '#93261a');
  },
  light() {
    root.style.setProperty('--background'          , '#e6e6e6');
    root.style.setProperty('--background-dark'     , '#d3cdcd');
    root.style.setProperty('--background-very-dark', '#eeeeee');
    
    root.style.setProperty('--key-color-top'       , '#3d3d33');
    root.style.setProperty('--key-color-bottom'    , '#3d3d33');
    root.style.setProperty('--key-background'      , '#e5e4e0');
    root.style.setProperty('--key-background-dark' , '#dfd9d2');
    root.style.setProperty('--key-shadow'          , '#b4a597');

    root.style.setProperty('--key-blue-background' , '#388187');
    root.style.setProperty('--key-blue-shadow'     , '#1c6166');

    root.style.setProperty('--key-red-background'  , '#d03f2f');
    root.style.setProperty('--key-red-shadow'      , '#93261a');
  },
  dark() {
    root.style.setProperty('--background'          , '#17062a');
    root.style.setProperty('--background-dark'     , '#1e0836');
    root.style.setProperty('--background-very-dark', '#1e0836');
    
    root.style.setProperty('--key-color-top'       , '#f7de43');
    root.style.setProperty('--key-color-bottom'    , '#f7de43');
    root.style.setProperty('--key-background'      , '#331b4d');
    root.style.setProperty('--key-shadow'          , '#851c9c');

    root.style.setProperty('--key-blue-background' , '#56077c');
    root.style.setProperty('--key-blue-shadow'     , '#851c9c');

    root.style.setProperty('--key-red-background'  , '#00decf');
    root.style.setProperty('--key-red-shadow'      , '#00decf');
  }
}

function changeThemeById(themeId) {
  switch (themeId) {
    case '1':
      theme.default()
      break;
    case '2':
      theme.light()
      break;
    case '3':
      theme.dark()
      break;
    default:
      theme.default()
      break;
  }  
}

function setPreferColorSchemeTheme() {
  const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
  const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
  
  if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = '3'
    theme.dark()
  } else if (lightThemeMq.matches){
    document.getElementById('btnTheme').value = '2'
    theme.light()   
  } else {
    document.getElementById('btnTheme').value = '1'
    theme.default()
  }
}

window.addEventListener('load', setPreferColorSchemeTheme)
