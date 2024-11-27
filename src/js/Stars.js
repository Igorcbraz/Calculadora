import { getStarsUrl } from '../constants/index.js'

export class Stars {
  #starsCountElement

  constructor(starsCountElement = document.getElementById('stars-count')) {
    this.#starsCountElement = starsCountElement
  }

  async init() {
    const starCount = await this.fetchStarsCount()
    this.animateStarCount(starCount)
  }

  async fetchStarsCount() {
    try {
      const response = await fetch(getStarsUrl)

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()

      return data.stargazers_count
    } catch (error) {
      console.error('Error fetching GitHub stars:', error)
      return 0
    }
  }


  animateStarCount(finalCount) {
    let currentCount = 0
    const increment = Math.ceil(finalCount / 100)
    const velocity = 35

    const interval = setInterval(() => {
      currentCount += increment
      if (currentCount >= finalCount) {
        currentCount = finalCount
        clearInterval(interval)
      }
      this.#starsCountElement.textContent = currentCount
    }, velocity)
  }
}
