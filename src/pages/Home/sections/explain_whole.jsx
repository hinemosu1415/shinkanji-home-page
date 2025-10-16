import Explain from '../../../components/Home/Explain1'
import explainImage from '../../../assets/Home/test2.jpg'

function ExplainWhole() {
  return (
    <main>
      <Explain
        title="真観寺について"
        paragraphs={[
          "真観寺は、歴史と自然に囲まれた美しいお寺です。訪れる人々に安らぎと癒しを提供します。",
          "四季折々の風景が楽しめる境内では、静かな時間を過ごすことができます。",
          "ぜひ一度、真観寺を訪れて、その魅力を感じてください。"
        ]}
        image={explainImage}
        alt="真観寺の写真"
      />
    </main>
  )
}

export default ExplainWhole