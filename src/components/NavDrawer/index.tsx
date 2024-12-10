"use client";

import { useState } from "react";
import Link from "next/link";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_ITEMS } from "@/lib/nav_items";

export function NavDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
