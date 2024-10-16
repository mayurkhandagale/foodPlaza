import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import FoodItem from './FoodItem';
import { useKeenSlider } from 'keen-slider/react';

const FoodList = ({ foods }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    renderMode: 'performance',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    initial: 0,

    breakpoints: {
      '(max-width: 480px)': {
        slides: { perView: 4, spacing: 5 },
      },
      '(min-width: 480px)': {
        slides: { perView: 6, spacing: 5 },
      },
      '(min-width: 768px)': {
        slides: { perView: 8, spacing: 5 },
      },
    },
  });

  if (!foods) {
    return null;
  }

  return (
    <div className='container-max my-6 mt-8'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-4 font-bold text-2xl text-zinc-700'>
          {foods?.card?.card?.header?.title}
        </h1>

        {instanceRef.current && (
          <div className='flex gap-2 items-center'>
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'
            >
              <i className="fa-solid fa-arrow-left-long w-4 h-4"></i>{' '}
            </button>
            <button
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
              onClick={() => instanceRef.current?.next()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'
            >
              <i className="fa-solid fa-arrow-right w-4 h-4"></i>{' '}
            </button>
          </div>
        )}
      </div>

      <div ref={sliderRef} className='keen-slider'>
        {foods?.card?.card?.gridElements?.infoWithStyle?.info?.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};
export default FoodList;
