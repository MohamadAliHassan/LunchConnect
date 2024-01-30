import React from "react";
import { Score } from "./components/Score";
import { DailyMissons } from "./components/DailyMissons";
import { UpcomingEvents } from "./components/UpcomingEvents";
export const HomePage = () => {
  return (
    <div>
      <Score />
      <DailyMissons />
      <UpcomingEvents />
    </div>
  );
};
