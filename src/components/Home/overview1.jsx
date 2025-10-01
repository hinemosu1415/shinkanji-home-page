import { useState } from "react";
import './overview1.css'

function Overview({ title, items, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1ページに表示するアイテム数
  const itemsPerPage = 3;

  // 左右に移動
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, items.length - itemsPerPage)
    );
  };

  // 表示中のアイテム
  const visibleItems = items.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="overview">
      {/* タイトル行 */}
      <div className="overview-header">
        <h2>{title}</h2>
        {link && (
          <a href={link} className="overview-link">
            →
          </a>
        )}
      </div>

      {/* スライダー */}
      <div className="overview-slider">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          &lt;
        </button>

        <div className="overview-items">
          {visibleItems.map((item, index) => (
            <div key={index} className="overview-item">
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
