import { useState, useEffect } from "react";
import springImg from "../../../assets/Seasons/test1.jpg";
import summerImg from "../../../assets/Seasons/test2.jpg";
import autumnImg from "../../../assets/Seasons/test3.jpg";
import winterImg from "../../../assets/Seasons/test4.jpg";
import styles from "./Seasons.module.css";

function SeasonDetail({ season, onClose }) {
  useEffect(() => {
    document.body.style.overflow = season ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [season]);

  if (!season) return null;

  return (
    <div className={styles.seasonOverlay}>
      <div className={styles.seasonDetail}>
        <div className={styles.seasonDetailContent}>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
          <h2>{season.title}</h2>
          <img
            className={styles.mainImage}
            src={season.image}
            alt={season.title}
          />
          <div className={styles.seasonDescription}>
            <h3>{season.subtitle}</h3>
            <p>{season.text}</p>
          </div>
          <div className={styles.seasonSubImages}>
            {season.subImages.map((src, i) => (
              <img key={i} src={src} alt={`${season.title}の画像${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const seasons = [
    {
      title: "春",
      image: springImg,
      subtitle: "桜が咲き誇る季節",
      text: "真観寺の境内では春になると桜が満開になり、多くの参拝者が訪れます。",
      subImages: [springImg, springImg, springImg],
    },
    {
      title: "夏",
      image: summerImg,
      subtitle: "緑豊かな真観寺",
      text: "夏の真観寺は深い緑に包まれ、涼やかな風が境内を通り抜けます。",
      subImages: [summerImg, summerImg, summerImg],
    },
    {
      title: "秋",
      image: autumnImg,
      subtitle: "紅葉の美しさ",
      text: "秋には紅葉が境内を彩り、鮮やかな景観が楽しめます。",
      subImages: [autumnImg, autumnImg, autumnImg],
    },
    {
      title: "冬",
      image: winterImg,
      subtitle: "静寂の雪景色",
      text: "冬の真観寺は雪に包まれ、静かな時間が流れます。",
      subImages: [winterImg, winterImg, winterImg],
    },
  ];

  return (
    <div className={styles.season}>
      <h1>真観寺の四季</h1>
      <div className={styles.seasonGrid}>
        {seasons.map((season) => (
          <div
            key={season.title}
            className={styles.seasonCard}
            onClick={() => setSelectedSeason(season)}
          >
            {season.title}
          </div>
        ))}
      </div>

      <SeasonDetail
        season={selectedSeason}
        onClose={() => setSelectedSeason(null)}
      />
    </div>
  );
}

export default Seasons;
