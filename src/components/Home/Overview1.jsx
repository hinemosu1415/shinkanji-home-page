import { useState } from "react";
import styles from "./Overview1.module.css";

function Overview({ title, items, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, items.length - itemsPerPage)
    );
  };

  const visibleItems = items.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className={styles.overview}>
      {/* タイトル行 */}
      <div className={styles.overviewHeader}>
        <h2>{title}</h2>
        {link && (
          <a href={link} className={styles.overviewLink}>
            →
          </a>
        )}
      </div>

      {/* スライダー */}
      <div className={styles.overviewSlider}>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          &lt;
        </button>

        <div className={styles.overviewItems}>
          {visibleItems.map((item, index) => (
            <div key={index} className={styles.overviewItem}>
              {item.image && (
                <img src={item.image} alt={item.alt || item.text} />
              )}
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= items.length - itemsPerPage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Overview;
