import Style from './Precinct.module.css'
import Precinct_kannondou from './sections/explain'
import Seasons from './sections/Seasons'

function Precinct() {
  return (
    <main className={Style.about}>
      <h1 className={Style.about_title}>境内の紹介</h1>
      <div>
        <Precinct_kannondou />
      </div>
      <Seasons />
    </main>
  )
}

export default Precinct
