import food from '../../Images/burger-image.png';
import Profile from './Profile';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Food<span>Plaza</span> healthy meal"
        </h4>
        <h4>
          <Profile />
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>

    </div>
  )
}
export default About;