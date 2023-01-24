import React, { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { Classification } from "@features/contests/contest";
import { classification } from "@features/contests/contest";

const buttonsCss = css({ display: "flex", justifyContent: "flex-start" });

type Props = {
  tab: Classification;
  setTab: Dispatch<SetStateAction<Classification>>;
};

export const FilterOptions: React.FC<Props> = (props: Props) => {
  const { tab, setTab } = props;

  return (
    <div css={buttonsCss}>
      <ContestTypeFilter tab={tab} setTab={setTab} />
      <PeriodFilter />
    </div>
  );
};

const ContestTypeFilter: React.FC<Pick<Props, "tab" | "setTab">> = ({
  tab,
  setTab,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="contest-type-filter-button"
        variant="contained"
        disableElevation
        color="inherit"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Contest Type: {tab}
      </Button>
      <Menu
        id="contest-type-filter-menu"
        MenuListProps={{
          "aria-labelledby": "contest-type-filter-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {classification.map((c) => (
          <MenuItem onClick={() => setTab(c)} disableRipple>
            {c}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const PeriodFilter: React.FC = () => {
  return (
    <Button
      variant="contained"
      disableElevation
      color="inherit"
      endIcon={<KeyboardArrowDownIcon />}
    >
      Period
    </Button>
  );
};