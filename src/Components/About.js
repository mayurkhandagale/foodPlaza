import food from '../../Images/burger-image.png';
import Profile from './Profile';
const About = () => {
  return (
    <div className="flex flex-wrap flex-col mt-28 mx-auto mb-0 justify-center items-center h-[72vh]">
      <div className="pl-3">
        <h1 className="font-bold text-3xl">
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4 className="font-bold text-xl">
          "Better you will feel if you eat a Food<span>Plaza</span> healthy meal"
        </h4>
        <h4 className="font-bold text-xl">
          <Profile />
        </h4>
      </div>
      <div className="pt-4">
        <img className='W-[500PX] pr-[70px]' src={food} alt="Food Image" />
      </div>

    </div>
  )
}
export default About;