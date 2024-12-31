import {
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import {
  LogoDevRounded,
} from "@mui/icons-material";
import Link from "next/link";

/* ------------------------------ Start ------------------------------*/
export const SidebarTop = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <Link href={'/'}>
            <LogoDevRounded fontSize="large" />
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
