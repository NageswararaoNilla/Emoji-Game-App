import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

// const idsList = []

class EmojiGame extends Component {
  state = {shuffleList: [], score: 0, topScore: 0, idsList: [], isWon: ''}

  playAgain = () => {
    this.setState({
      isWon: '',
      score: 0,
      idsList: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const newShuffleList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({
      shuffleList: newShuffleList,
    })
  }

  //   assignList = () => {
  //     const {emojisList} = this.props
  //     this.setState({
  //       shuffleList: emojisList,
  //     })
  //   }

  onUpdateScore = id => {
    const {emojisList} = this.props
    const {idsList, topScore} = this.state
    const isRepeat = idsList.includes(id)
    const len = emojisList.length
    if (isRepeat === false) {
      const updateIds = idsList
      updateIds.push(id)
      this.setState({
        idsList: updateIds,
        score: updateIds.length,
      })
      if (len === updateIds.length) {
        this.setState({
          isWon: 'Won',
        })
      }
      if (updateIds.length > topScore) {
        this.setState({topScore: updateIds.length})
      }
    } else {
      this.setState({isWon: 'Fail', idsList: []})
    }
  }

  onShuffleList = () => {
    const {emojisList} = this.props
    const {shuffleList} = this.state
    const updateList =
      shuffleList !== []
        ? emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              shuffledEmojisList={this.shuffledEmojisList}
              onUpdateScore={this.onUpdateScore}
            />
          ))
        : shuffleList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              shuffledEmojisList={this.shuffledEmojisList}
              onUpdateScore={this.onUpdateScore}
            />
          ))
    return updateList
  }

  render() {
    const {score, topScore, isWon} = this.state
    const winCard = isWon !== '' ? 'active-none' : ''

    // console.log(score)
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isWon={isWon} />
        <div className="responsive-container">
          <ul className={`emojis-container ${winCard}`}>
            {this.onShuffleList()}
            {/* {emojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))} */}
          </ul>
          <WinOrLossCard
            isWon={isWon}
            score={score}
            playAgain={this.playAgain}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
