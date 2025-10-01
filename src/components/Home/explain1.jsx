import './explain1.css'

// これは写真付きの説明を行うことができます。

//　使用例  左に写真　右に説明文

function Explain({ title, paragraphs, image, alt }) {
  return (
    <div className="explain-container">
      <img src={image} alt={alt || title} />
      <div className="explain-text">
        <h2>{title}</h2>
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default Explain
