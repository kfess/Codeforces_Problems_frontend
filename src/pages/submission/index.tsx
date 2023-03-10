import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { RecentSubmissionPage } from "@pages/submission/recent";
import { UserSubmissionPage } from "@pages/submission/user/index";
import { TabItem, Tabs } from "@features/ui/component/Tabs";

export const SubmissionPage: React.FC = () => {
  const { search } = useLocation();
  const urlQueries = new URLSearchParams(search);
  const userId = urlQueries.get("userId") ?? "";

  const tabItems: TabItem[] = [
    {
      label: "Recent Submission",
      children: <RecentSubmissionPage />,
      disabled: false,
    },
    {
      label: `${userId ? userId : "User"}'s Submission`,
      children: <UserSubmissionPage />,
      disabled: !userId,
    },
  ];

  return (
    <>
      <h2 css={{ textAlign: "left" }}>Submission</h2>
      <Box sx={{ width: "100%" }}>
        <Tabs tabItems={tabItems} />
      </Box>
    </>
  );
};
