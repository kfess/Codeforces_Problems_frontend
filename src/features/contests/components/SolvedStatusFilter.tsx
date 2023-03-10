import React from "react";
import { DropDownMenuButton } from "@features/ui/component/DropDownMenuButton";

const solvedStatuses = [
  "All Contests",
  "Completed",
  "Attempting",
  "Not Solved yet",
] as const;
export type SolvedStatus = typeof solvedStatuses[number];

type Props = {
  solvedStatus: SolvedStatus;
  setSolvedStatus: (arg: SolvedStatus) => void;
};

export const SolvedStatusFilter: React.FC<Props> = (props: Props) => {
  const { solvedStatus, setSolvedStatus } = props;

  return (
    <DropDownMenuButton
      title="Solved Status"
      items={solvedStatuses.map((ss) => {
        return { item: ss };
      })}
      selectedItem={solvedStatus}
      setSelectedItem={setSolvedStatus}
    />
  );
};
