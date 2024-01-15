import fetchHelper from "../../utils/fetchHelper";

export const AchievementsPage = () => {
  async function onButtonClick() {
    try {
      const response = await fetchHelper("/", "get");
      const data = await response.text();
      console.log("Raw response:", data);

      const jsonData = JSON.parse(data);
      console.log("Parsed JSON:", jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="achievements-wrapper">
      <header className="achievements-header">Your achievements</header>
      <button onClick={onButtonClick}>test</button>
    </div>
  );
};
