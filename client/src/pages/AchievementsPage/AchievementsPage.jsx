import fetchHelper from "../../utils/fetchHelper"

export const AchievementsPage = () => {

  async function onbuttonclick() {
    const response = await fetchHelper(`/`, "get");
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="achievements-wrapper">
      <header className="achievements-header">Your achievements</header>
      <button onClick={onbuttonclick}>test</button>
    </div>
  )
};
