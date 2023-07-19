import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props

  const resultClass = isWon !== '' ? 'score-inactive' : ''

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      <div className={`scores-container ${resultClass}`}>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
