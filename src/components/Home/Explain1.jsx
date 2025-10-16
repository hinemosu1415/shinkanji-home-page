import styles from "./Explain1.module.css";

// 写真付きの説明コンポーネント
function Explain({ title, paragraphs, image, alt }) {
  return (
    <div className={styles.explainContainer}>
      <img src={image} alt={alt || title} />
      <div className={styles.explainText}>
        <h2>{title}</h2>
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default Explain;
