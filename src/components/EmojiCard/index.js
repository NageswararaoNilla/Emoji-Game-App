import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList, onUpdateScore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    shuffledEmojisList()
    onUpdateScore(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
