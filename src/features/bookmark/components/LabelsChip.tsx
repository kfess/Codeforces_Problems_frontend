import React from "react";
import { useNavigate } from "react-router-dom";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import { Chip_ } from "@features/ui/component/Chip";
import { labelSelectors } from "@features/bookmark/labelActions";

export const LabelsChip: React.FC = () => {
  const navigate = useNavigate();
  const labels = labelSelectors.useLabels();

  return (
    <Chip_
      label={<div>{labels.length} Labels</div>}
      onClick={() => {
        navigate("/labels");
      }}
      icon={<StarBorderOutlined fontSize="small" />}
    />
  );
};