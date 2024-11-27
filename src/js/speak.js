export class Speak {
  #recognition
  #startBtn
  #isListening = false
  #microphoneIcon
  #microphoneTooltip
  #calculator

  constructor(
    calculator,
    startBtn = document.getElementById('startVoice'),
    microphoneIcon = document.getElementById('microphoneIcon'),
    microphoneTooltip = document.getElementById('microphoneTooltip')
  ) {
    this.#calculator = calculator
    this.#startBtn = startBtn
    this.#microphoneIcon = microphoneIcon
    this.#microphoneTooltip = microphoneTooltip
    this.setup()
  }

  setup() {
    if (!('webkitSpeechRecognition' in window)) {
      this.#startBtn.disabled = true
      console.error('Speech recognition not available')
      return
    }

    this.#recognition = new webkitSpeechRecognition()
    this.#recognition.continuous = true
    this.#recognition.lang = 'pt-BR'
    this.#recognition.interimResults = true

    this.addListeners()
  }

  start() {
    this.#recognition.onresult = (event) => {
      const results = Object.values(event.results)

      if (results.length) this.#startBtn.classList.add('listening')

      for (const result of results) {
        const { transcript } = result[0]
        const { isFinal } = result

        if (isFinal) this.#calculator.executeVoiceCommand(transcript.trim(), this.getVoiceActions())
      }
    }

    this.#recognition.onend = () => {
      this.updateListeningState(false)
    }

    this.#recognition.start()
    this.updateListeningState(true)
  }

  stop() {
    this.#recognition.stop()
    this.updateListeningState(false)
    this.#startBtn.classList.remove('listening')
  }

  toggleListening() {
    if (this.#isListening) return this.stop()

    this.start()
  }

  updateListeningState(isListening) {
    this.#isListening = isListening

    if (isListening) {
      this.#microphoneIcon.classList.remove('fa-microphone-slash')
      this.#microphoneIcon.classList.add('fa-microphone')
      this.#microphoneTooltip.textContent = 'Desativar microfone'
      return
    }

    this.#microphoneIcon.classList.remove('fa-microphone')
    this.#microphoneIcon.classList.add('fa-microphone-slash')
    this.#microphoneTooltip.textContent = 'Ativar microfone'
  }

  addListeners() {
    this.#startBtn.addEventListener('click', () => this.toggleListening())
  }

  getVoiceActions() {
    return {
      'calcular': () => this.#calculator.calculate(),
      'apagar': () => this.#calculator.handleRemoveLastInput(),
      'limpar': () => this.#calculator.handleResetValue()
    }
  }
}
