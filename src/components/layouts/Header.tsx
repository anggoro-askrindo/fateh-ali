import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { MenuRounded, MenuOpenRounded } from "@mui/icons-material";
import { withContainer } from "@/components/hoc/withContainer";
import { UserProfile } from "@/components/UserProfile";
import { TogglerDarkMode } from "@/components/TogglerDarkMode";
import { NotificationBell } from "../NotificationBell";
import { Search } from "@/components/Search";
import { toggleLeftSidebarFold } from "@/libs/stores/models/layout";
import type { RootState } from "@/libs/stores";

/* ------------------------------ Start ------------------------------*/
export const Header = () => {
  const { header, sidebar } = useSelector((state: RootState) => state.layout);
  const { containerWidth } = header;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleLeftSidebarFold());
  };

  return (
    <AppBar component={"header"} elevation={0} color="default">
      <Toolbar className="my-auto" disableGutters>
        {withContainer({
          containerWidth,
          children: (
            <Box className="flex items-center justify-between p-4 w-full">
              {/* Left Column: Logo */}
              <Box className="mr-4 flex items-center border">
                <IconButton onClick={handleClick}>
                  {sidebar.folded ? <MenuRounded /> : <MenuOpenRounded />}
                </IconButton>
              </Box>

              {/* Middle Column */}
              <Box className="flex-1 text-center mx-4 border">
                <Search />
              </Box>

              {/* Right Column */}
              <Box className="ml-4 flex items-center border">
                <TogglerDarkMode />
                <NotificationBell />
                <UserProfile />
              </Box>
            </Box>
          ),
        })}
      </Toolbar>
    </AppBar>
  );
};
