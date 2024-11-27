export class Guide {
  #intro
  #config

  constructor() {
    this.#intro = introJs.tour()
    this.#config = {
      steps: [],
      dontShowAgain: true,
      dontShowAgainLabel: 'Não mostrar novamente',
      nextLabel: 'Próximo',
      prevLabel: 'Anterior',
      doneLabel: 'Finalizar',
    }
  }

  loadSteps() {
    this.#config.steps = [
      {
        title: 'Bem-vindo(a)!',
        intro: 'Este é um guia rápido para ajudar a configurar o aplicativo.',
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight'
      },
      {
        element: document.querySelector('#key-selector-container'),
        title: 'Temas favoritos',
        intro: 'É possível associar um tema a uma tecla do teclado. Clique em um dos temas abaixo e pressione uma tecla para associar.',
        position: 'right',
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight'
      },
      {
        element: document.querySelector('#reset-theme'),
        title: 'Voltar ao padrão',
        intro: 'Caso deseje voltar para configuração padrão, clique aqui.',
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight'
      },
      {
        element: document.querySelector('#btnTheme'),
        title: 'Escolher tema',
        intro: 'Altere o tema do aplicativo com um clique.',
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight'
      },
      {
        element: document.querySelector('#startVoice'),
        title: 'Comandos de voz',
        intro: `
          <p>Clique no botão para ativar os comandos de voz. Você pode usar os seguintes comandos:</p>
          <ul>
            <li><strong>calcular</strong>: Calcular a conta.</li>
            <li><strong>apagar</strong>: Apagar o último dígito.</li>
            <li><strong>limpar</strong>: Limpar a expressão.</li>
          </ul>
          <p>Além de ditar a conta que deseja calcular, como "4 mais 4".</p>
        `,
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight'
      }
    ]
  }

  loadConfig() {
    this.#intro.setOptions(this.#config)
  }

  start() {
    this.#intro.start()
  }
}
