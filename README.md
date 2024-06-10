<h1 align="center"> 📚 Calculadora 📊 </h1>
<h3 align="center">
  ⚡ <a href="https://igorcbraz.github.io/Calculadora/" target="_blank">Calculadora</a> Responsiva e com opções para troca de temas ⚡
</h3>

<p align="center">
  <img src="https://img.shields.io/github/stars/Igorcbraz/Calculadora?style=social" alt="GitHub Stars"/>
  <img src="https://api.netlify.com/api/v1/badges/344dc66c-0b96-4f11-8a84-87fdfed0b4fd/deploy-status" alt="Netlify Status"/>
  <img src="https://img.shields.io/github/license/Igorcbraz/Calculadora" alt="MIT License"/>
</p>

<p align="center">
  <a href="#prefer-color-scheme">Prefer Color Scheme</a> •
  <a href="#resultado-final">Resultado Final</a> •
  <a href="#sugestoes">Sugestões</a> •
</p>

<div align="center">
  <img
    width="584px"
    height="372px" 
    src="https://user-images.githubusercontent.com/82618164/126012518-19b8e31c-6388-48ad-aa82-610bbab838c3.gif"
  />
  <br>
  <span>
    Desafio feito por
    <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29">
    <em>Frontend Mentor</em>
    </a>
  </span>
</div>    
    
<h1 align="left" id="prefer-color-scheme">🌗 Prefer Color Scheme</h2>
<p>
  Além dos 3 diferentes temas da calculadora, foi usado o recurso de mídia <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank"><code>prefer-color-scheme</code></a>.
</p>

<p>Esse recurso possibilita o entendimento de qual a preferência do usuário em relação aos temas, assim podendo receber dois valores:</p>

<ul>
  <li>Light (Claro)</li>
  <li>Dark (Escuro)</li>
</ul>

<p>A maneira de aplicar esse recurso de acordo com a developer.mozilla é da seguinte maneira:</p>

```
@media (prefers-color-scheme: dark) {
  // Configurações CSS para o tema dark
}

@media (prefers-color-scheme: light) {
  // Configurações CSS para o tema light
}
```
<p>Mas com esse método o carregamento do código irá ficar mais lento pois seria necessário repetir todas as propriedades desejadas com suas novas colorações.</p>

> **Então qual a solução ? 🤔**

<p>Iremos apenas mudar os valores das variáveis do CSS com JS.</p>

```
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
```
<p>Primeiro identificamos qual a preferência de tema do usuário e guardamos o resultado em uma constante.</p>
<p>Agora só precisamos verificar qual o valor das constantes e modificar os valores das variáveis do CSS</p>

```
if (darkThemeMq.matches) {
  document.getElementById('btnTheme').value = "3";
  theme.dark();
} else if(lightThemeMq.matches){
  document.getElementById('btnTheme').value = "2";
  theme.light();    
} else {
  document.getElementById('btnTheme').value = "1";
  theme.default();    
}
```
<p>theme.dark(),theme.light()... Armazenam os comandos para modificar os valores das variáveis no CSS. Sendo eles:</p>

```
const root = document.querySelector(':root');

const theme = {
  default() {
    root.style.setProperty('--background'          , '#3a4764');
    // E as demais variáveis
  },
  light() {
    root.style.setProperty('--background'          , '#e6e6e6');
    // E as demais variáveis
  },
  dark() {
    root.style.setProperty('--background'          , '#17062a');
    // E as demais variáveis
  }
}
```

> **Como é Possível fazer o Teste/Debug ? 🤔**

</p>Podemos usar a ferramenta de desenvoledor do google chrome e alterar os valores Dark ou Light</p>
<img width="400px" height="300px" src="images/Debug.jpg"/>

<div align="left">

<h1 id="resultado-final">Resultado Final 🥳</h3>

<img width="584px" height="372px" src="https://user-images.githubusercontent.com/82618164/126012352-7c19f908-f04b-4c66-a568-191bdfa5d8b8.gif"/>

<h1 id="sugestoes">Você também ṕode gostar 🤩</h3>

- [Gitfest](https://github.com/Igorcbraz/GitFest) - Gere uma lineup de festival com base nos seus principais repositórios do Github
- [Enkoji](https://github.com/Igorcbraz/Enkoji) - Site feito para o Enkoji, um templo zen-budista japonês fundado em 1920 no Japão

---

> GitHub [@Igorcbraz](https://github.com/Igorcbraz) &nbsp;&middot;&nbsp;
> Linkedin [@Igorcbraz](https://www.linkedin.com/in/igorcbraz/)

---

<img width="140px" height="33px" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/> <img width="140px" height="33px" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img width="100px" height="33px" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img width="100px" height="33px" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
