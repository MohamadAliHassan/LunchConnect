import { FaEdit } from "react-icons/fa";
import meal from "../assets/meal.jpg";

export const FavoriteMeal = () => {
  return (
    <>
      <div className="profile-plans-container">
        <section className="nav-events">
          <p>Favorite Meal</p>
          <FaEdit size={26} />
        </section>
        <div className="profile-plans-wrap">
          <div className="profile-plans-description">
            <img src={meal} alt="image" />
            <h3>Spaghetti Bolognese</h3>
          </div>
        </div>
      </div>
    </>
  );
};
