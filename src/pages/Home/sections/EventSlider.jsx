import { useState } from "react";
import "./EventSlider.css";
import images from '../../../assets/Home/test4-1.jpg'

const events = [
  {
    title: "施餓鬼法要",
    description:
      "施餓鬼（せがき）は、飢えや渇きに苦しむ「餓鬼道」に落ちた餓鬼に対し、食べ物や飲み物などの「施し」を与えて供養する法会です。",
    image: images, // public フォルダに置いた画像
  },
  {
    title: "花祭り",
    description:
      "お釈迦様の誕生を祝う行事で、灌仏会（かんぶつえ）とも呼ばれます。甘茶をお釈迦様に注いでお祝いします。",
    image: images,
  },
  {
    title: "お盆",
    description:
      "ご先祖様の霊をお迎えし、供養する日本の伝統行事です。",
    image: images,
  },
];

function EventSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="event-slider">
      <h2 className="slider-title">行事</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          &lt;
        </button>

        <div className="slider-content">
          <img
            src={events[current].image}
            alt={events[current].title}
            className="slider-image"
          />
          <div className="slider-text">
            <h3>{events[current].title}</h3>
            <p>{events[current].description}</p>
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default EventSlider;
