import React from "react";
import { Score } from "./components/Score";
import { DailyMissons } from "./components/DailyMissons";
export const HomePage = () => {
  return (
    <div>
      <Score />
      <DailyMissons />
    </div>
  );
};
