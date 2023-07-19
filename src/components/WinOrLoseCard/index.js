import './index.css'

const WinOrLossCard = props => {
  const {isWon, playAgain, score} = props

  const onClickPlay = () => {
    playAgain()
  }

  const imgUrl =
    isWon === 'Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = isWon === 'Won' ? 'You Won' : 'You Lose'

  const scoreText = isWon === 'Won' ? 'Best Score' : 'Score'
  const activeClass = isWon === '' ? 'non-active' : 'active'

  return (
    <div className={`result-container ${activeClass}`}>
      <img src={imgUrl} alt="win or lose" className="result-img" />
      <div>
        <h1>{result}</h1>
        <p>{scoreText}</p>
        <p>{score}/12</p>
        <button type="button" className="play-btn" onClick={onClickPlay}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
