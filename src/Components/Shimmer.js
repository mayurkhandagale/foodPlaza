import { shimmer_card_unit, shimmer_menu_card_unit } from "../utils/constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div class="border border-gray-300 shadow rounded-md p-4 max-w-[250px] h-60 w-full mx-auto">
      <div class="animate-pulse flex flex-col space-x-4">
        <div class="rounded bg-slate-400 h-28 w-52 mb-10"></div>
        <div class="flex-1 space-y-10 py-1">
          <div class="h-2 w-36 bg-slate-400 rounded"></div>
          <div class="h-2 w-36 bg-slate-400 rounded "></div>
        </div>
      </div>
    </div>

  );
};

export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate">
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(shimmer_menu_card_unit).fill("").map((element, index) =>
              <div className="shimmer-menu-card" key={index}>
                <div className="shimmer-item-details">
                  <h3 className="shimmer-w40  stroke animate"></h3>
                  <p className="shimmer-w20  stroke animate"> </p>
                  <p className="shimmer-w60  stroke animate"></p>
                </div>
                <div className="shimmer-img-wrapper">
                  <img className="shimmer-img stroke animate" />
                  <div className="shimmer-btn stroke animate"> </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(shimmer_card_unit).fill("").map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;