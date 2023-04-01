import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  useMediaQuery,
  Divider,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Stack } from "@mui/system";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar
        component="div"
        position="static"
        sx={{
          bgcolor: "#161b22",
          marginTop: 15,
          height: matches ? 450 : 930,
        }}
      >
        <Stack
          sx={{ display: "flex", justifyContent: "space-around", padding: 7 }}
          direction={matches ? "row" : "column"}
          spacing={12}
        >
          <Typography
            sx={{
              "&:hover": { color: "grey" },
              textDecoration: "none",
              color: "white",
              textAlign: "left",
              fontSize: "40px",
              fontWeight: "1000",
              fontFamily: "'Inter', sans-serif",
            }}
            variant="h1"
            component="h1"
          >
            Abstract
            <Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginTop: 5,
                }}
              >
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  Subscribe our newsletter for
                </Typography>
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  updates and tips
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%",
                  marginTop: 5,
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              >
                <TextField
                  fullWidth
                  label="Search"
                  id="search"
                  InputProps={{
                    style: {
                      color: "white",
                      borderRadius: 30,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowCircleRightOutlinedIcon
                          sx={{ color: "#ff4dd2", height: 45, width: 45 }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </Typography>

          <Stack direction={"row"} spacing={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Help
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Community
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                University
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Blog
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Terms of service
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Privacy policy
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Features
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Roadmap
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>
                Update
              </Typography>
              <Typography sx={{ fontSize: 20, color: "white" }}>Job</Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider sx={{ color: "white" }} variant="middle" />
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: 1,
          }}
          direction={matches ? "row" : "column"}
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "white",
              marginTop: 5,
            }}
          >
            Copyright © 2021 UI18 LLC . All rights reserved .
          </Typography>
          <Typography sx={{ fontSize: 14, color: "white", marginTop: 5 }}>
            We use cookies for better services.
          </Typography>
        </Stack>
      </AppBar>
    </>
  );
};
