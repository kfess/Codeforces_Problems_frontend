import React from "react";
import Box from "@mui/material/Box";
import type { TabItem } from "@features/ui/component/Tabs";
import { Tabs } from "@features/ui/component/Tabs";
import { createdContestTypes } from "@features/custom_contests/customContest";
import { PublicContestList } from "@features/custom_contests/components/PublicContestList";
import { PrivateContestList } from "@features/custom_contests/components/PrivateContestList";

export const CustomContestPage: React.FC = () => {
  const tabItems: TabItem[] = [
    ...createdContestTypes.map((contestType) => {
      return {
        label: contestType,
        children: <PublicContestList contestType={contestType} />,
        disabled: false,
      };
    }),
    {
      label: "MyContest",
      children: <PrivateContestList />,
      disabled: true,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs tabItems={tabItems} />
    </Box>
  );
};
