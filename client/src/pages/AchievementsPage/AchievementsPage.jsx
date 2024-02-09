import fetchHelper from "../../utils/fetchHelper";

export const AchievementsPage = () => {
  const handleClick = async () => {
    try {
      const response = await fetchHelper('/api');
      const data = await response.json();
      console.log('API response:', data);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle errors
    }
  };

  return (
    <div className="achievements-wrapper">
      <header className="achievements-header">Your achievements</header>
      <button onClick={handleClick}>test</button>
    </div>
  );
};
