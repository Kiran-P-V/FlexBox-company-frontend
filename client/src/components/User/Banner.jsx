import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BannerImage from "../../Assets/image 2.png";

export const Banner = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isTabletScreen = useMediaQuery(
    isSmallScreen ? "(max-width: 1px)" : "(max-width: 913px)"
  );

  return (
    <>
      <Stack direction={isSmallScreen ? "column" : "row"}>
        <Paper
          sx={{
            backgroundColor: "#e6b800",
            width: isTabletScreen ? 1000 : 900,
            height: isSmallScreen ? 500 : 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
          variant="outlined"
        >
          <Stack
            sx={{
              marginLeft: isSmallScreen ? -65 : isTabletScreen && 5,
              marginTop: isSmallScreen && 30,
            }}
            direction={"column"}
            spacing={2}
          >
            <Typography
              sx={{
                textDecoration: "none",
                color: "balck",
                textAlign: "left",
                fontSize: isSmallScreen ? "30px" : "70px",
                fontWeight: "1000",
                fontFamily: "'Inter', sans-serif",
                marginTop: isSmallScreen && -35,
              }}
              variant="h1"
              component="h1"
            >
              Go from Zero <br /> to 1ETH
            </Typography>
            <Typography
              sx={{
                textDecoration: "none",
                color: "white",
                textAlign: "left",
                fontSize: isSmallScreen ? "20px" : "30px",
                fontWeight: "50",
                fontFamily: "'Inter', sans-serif",
              }}
              variant="h6"
              component="h6"
            >
              With Abstract, anyone can {isSmallScreen && <br />} sell their NFT{" "}
              {!isSmallScreen && <br />} online. Sell {isSmallScreen && <br />}{" "}
              anything from your digital {!isSmallScreen ? <br /> : <br />} art
              to mixed reality videos.{" "}
            </Typography>
            <Button
              sx={{
                width: isSmallScreen ? 250 : 150,
                borderRadius: 10,
                color: "black",
                backgroundColor: "#ffb3ec",
                marginLeft: 3,
                alignSelf: "flex-start",
              }}
              variant="contained"
            >
              Start selling
            </Button>
          </Stack>
        </Paper>

        <Paper
          sx={{
            backgroundColor: "#e6b800",
            width: isTabletScreen ? 800 : 900,
            height: isSmallScreen ? 500 : 700,
          }}
          variant="outlined"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isSmallScreen ? 500 : 700,
            }}
          >
            <img
              src={BannerImage}
              alt="Avatar"
              style={{ width: "100%", height: isSmallScreen ? 500 : 700 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: isSmallScreen ? "78%" : "85%",
                left: isSmallScreen ? "23%" : "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(128, 128, 128, 0.5)",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "80%",
                width: isSmallScreen ? 300 : 500,
                backdropFilter: "blur(10px) grayscale(10%)",
                WebkitBackdropFilter: "blur(10px) grayscale(50%)",
              }}
            >
              <h2 style={{ display: "flex", justifyContent: "space-around" }}>
                women with blue and red hair{" "}
              </h2>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Stack sx={{ margin: -3 }}>
                  {" "}
                  <p>SOLD FOR </p>
                  <p style={{ marginTop: -5 }}>1.5 ETH</p>
                </Stack>{" "}
                <Stack sx={{ margin: -3 }}>
                  {" "}
                  <p>Owned by</p>
                  <p style={{ marginTop: -5 }}>@mrpuplehat</p>
                </Stack>
              </Stack>
            </Box>
          </div>{" "}
        </Paper>
      </Stack>
    </>
  );
};
