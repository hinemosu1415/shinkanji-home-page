import Explain from '../../../components/Home/Explain1'
import explainImage from '../../../assets/Precinct/test1.jpg'

function Precinct_kannondou() {
  return (
    <main>
      <Explain
        title="観音堂"
        paragraphs={[
          "テストテストテストテストテストテストテストテスト",
          "テストテストテストテストテストテストテストテストテストテストテストテスト",
          "テストテストテストテストテストテストテストテストテストテストテスト"
        ]}
        image={explainImage}
        alt="観音堂の写真"
      />
    </main>
  )
}

export default Precinct_kannondou