import testimg from '../../../assets/Home/test1.jpg'
import './Topimg.css'

function Topimg() {
  return (
    <div className="topimg">
      <div className="topimg-text">
        <p>真観寺にようこそ</p>
      </div>
      <div className="topimg-image">
        <img src={testimg} alt="Top" />
      </div>
    </div>
  )
}

export default Topimg
