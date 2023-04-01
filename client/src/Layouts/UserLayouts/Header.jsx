import React, { useState } from "react";
import "./Navbar.css";
import {
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Container,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md" && "lg"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: matches ? "black" : "white",
          width: matches && "98vw",
          marginLeft: matches && 0,
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          height: matches ? 100 : 70,
          zIndex: 1,
        }}
      >
        {!matches ? (
          <Box>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={handleCloseDrawer}
              PaperProps={{ sx: { backgroundColor: "white" } }}
            >
              <List
                sx={{
                  width: { xs: 210, sm: 250, md: 300, lg: 400, xl: 500 },
                }}
              >
                <ListItem button onClick={handleCloseDrawer}>
                  <HomeRoundedIcon sx={{ color: "info.dark", padding: 2 }} />
                  <ListItemText sx={{ color: "info.dark" }} primary="Home" />
                </ListItem>
                <ListItem button onClick={handleCloseDrawer}>
                  <ManageAccountsRoundedIcon
                    sx={{ color: "info.dark", padding: 2 }}
                  />
                  <ListItemText sx={{ color: "info.dark" }} primary="Explore" />
                </ListItem>
                <ListItem button onClick={handleCloseDrawer}>
                  <MenuBookRoundedIcon
                    sx={{ color: "info.dark", padding: 2 }}
                  />
                  <ListItemText sx={{ color: "info.dark" }} primary="Blog" />
                </ListItem>
                <ListItem button onClick={handleCloseDrawer}>
                  <RssFeedRoundedIcon sx={{ color: "info.dark", padding: 2 }} />
                  <ListItemText sx={{ color: "info.dark" }} primary="About" />
                </ListItem>
                <Divider variant="middle" />
                <ListItem button onClick={handleCloseDrawer}>
                  <LogoutRoundedIcon
                    sx={{ color: "warning.main", padding: 2 }}
                  />
                  <ListItemText
                    sx={{ color: "warning.main" }}
                    primary="Logout"
                  />
                </ListItem>
              </List>
            </Drawer>
            <Box>
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        ) : null}
        <Typography
          sx={{
            textDecoration: "none",
            color: matches ? "white" : "black",
            width: "100%",
            textAlign: "center",
            fontSize: matches ? "10vw" : "8vw",
            fontWeight: "1000",
            letterSpacing: "0.6em",
            fontFamily: "'Inter', sans-serif",
          }}
          variant="h1"
          component="h1"
        >
          Abstract
        </Typography>
      </Box>
      {matches && (
        <AppBar
          className="navBarMain"
          component="div"
          position="static"
          sx={{
            bgcolor: "white",
            height: "80px",
            marginBottom: 2,
            borderRadius: 0,
            marginTop: 2,
            // height: 80,
          }}
        >
          <Toolbar
            sx={{
              display: matches && "flex",
              justifyContent: !matches && "space-between",
            }}
          >
            {matches ? (
              <Container>
                <Stack
                  spacing={{ xs: 0, sm: 2, md: 6, lg: 4 }}
                  direction={"row"}
                  sx={{
                    marginLeft: "-40px",
                  }}
                >
                  <Typography
                    sx={{
                      "&:hover": { color: "grey" },
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 700,
                    }}
                    variant="body1"
                    component="a"
                    href="#text-buttons"
                  >
                    Home
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": { color: "grey" },
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 700,
                    }}
                    variant="body1"
                    component="a"
                    href="#text-buttons"
                  >
                    explore
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": { color: "grey" },
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 700,
                    }}
                    variant="body1"
                    component="a"
                    href="#text-buttons"
                  >
                    Blog
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": { color: "grey" },
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 700,
                    }}
                    variant="body1"
                    component="a"
                    href="#text-buttons"
                  >
                    About
                  </Typography>
                </Stack>
              </Container>
            ) : null}
            <Box>
              <Button sx={{color:"black"}} variant="text">Login</Button>

              <Button
                sx={{
                  width: 150,
                  borderRadius: 10,
                  color: "black",
                  backgroundColor: "#ffb3ec",
                  marginLeft: 3,
                }}
                variant="contained"
              >
                Start selling
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
