import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { useFetchUserInfo } from "@features/layout/useUserInfo";
import { useFetchUserSubmission } from "@features/submission/useFetchSubmission";
import { UniqueACCount } from "@features/achievement/components/UniqueACCount";
import { TotalRatingSum } from "@features/achievement/components/TotalRatingSum";
import { StreakSum } from "@features/achievement/components/StreakSum";
import { CurrentStreak } from "@features/achievement/components/CurrentStreak";
import { LongestStreak } from "@features/achievement/components/LongestStreak";
import { DailyChart } from "@features/achievement/components/DailyChart";
import { LanguageACCount } from "@features/achievement/components/LanguageACCount";
import { ClimbingChart } from "@features/achievement/components/ClimbingChart";
import { HeatMap } from "@features/achievement/components/HeatMap";
import { createTableData } from "@features/achievement/helper";
import { DifficultyPies } from "@features/achievement/components/DifficultyPies";
import { ClassificationPies } from "@features/achievement/components/ClassificationPies";
import { TagACCount } from "@features/achievement/components/TagACCount";
import { Profile } from "@features/achievement/components/Profile";
import { Divider } from "@mui/material";
import { Community } from "@features/achievement/components/Community";

export const AchievementPage: React.FC = () => {
  const { search } = useLocation();
  const urlQueries = new URLSearchParams(search);
  const userId = urlQueries.get("userId") ?? "";

  const { data, isError, error, isLoading } = useFetchUserSubmission({
    userId: userId,
  });
  const tableData = createTableData();

  const userInfo = useFetchUserInfo({ userId }).data;

  return (
    <Box sx={{ display: { xs: "block", sm: "flex" } }} gap={1}>
      <Box
        sx={{
          m: 0.5,
          p: 2,
          width: { sm: "300px" },
          backgroundColor: "white",
          borderRadius: 3,
          boxShadow: [3, 3, 3, 3],
        }}
      >
        <Profile userInfo={userInfo} />
        <Divider />
        <Community
          contribution={userInfo?.contribution}
          friendsOfCount={userInfo?.friendOfCount}
        />
        <Divider />
        {data && <LanguageACCount submissions={data} />}
        <Divider />
        {data && <TagACCount submissions={data} />}
      </Box>
      <Box sx={{ flex: { sm: 1 } }}>
        <Box
          sx={{
            m: 0.5,
            p: 2,
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow: [3, 3, 3, 3],
          }}
        >
          {data && (
            <>
              <UniqueACCount submissions={data} />
            </>
          )}
        </Box>
        {data && (
          <>
            <TotalRatingSum submissions={data} />
            <Divider />
            <StreakSum submissions={data} />
            <CurrentStreak submissions={data} />
            <LongestStreak submissions={data} />
            <Divider />
            <DailyChart submissions={data} />
            <ClimbingChart submissions={data} />
            <Divider />
            <HeatMap tableData={tableData} />
            <Divider />
            <DifficultyPies submissions={data} />
            <ClassificationPies submissions={data} />
          </>
        )}
      </Box>
    </Box>
  );
};
