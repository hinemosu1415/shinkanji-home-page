import './Home.css'
import Topimg from './sections/Topimg.jsx'
import ExplainWhole from './sections/explain_whole.jsx'
import Precinct from './sections/Precinct.jsx'
import Acsess from './sections/acsess.jsx'

function Home() {
  return (
    <main className="home">
      <Topimg />
      <ExplainWhole />
      <Precinct />
      <Acsess />
    </main>
  )
}

export default Home
