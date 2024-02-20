import { Score } from "./components/Score";
import { DailyMissions } from "./components/DailyMissons";
import { UpcomingEvents } from "./components/UpcomingEvents";

export const HomePage = () => {
  return (
    <>
      <Score />
      <DailyMissions />
      <UpcomingEvents />
    </>
  );
};
