import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import HeroButton from "./HeroButton";

export default function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#1A1A1A",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const [profile, setProfile] = React.useState({});

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profile/")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  const scrollTo = (id) => {
    const menuElement = document.getElementById(id);
    window.scrollTo({
      top: menuElement.offsetTop - 75,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#ece6d3", minHeight: "92vh" }}>
      <Container>
        <CustomBox>
          {/* Gambar di bagian kiri */}
          <Box
            sx={{
              flex: "1.25",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="../images/hero.jpg"
              alt="heroImg"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>

          {/* Teks di bagian kanan */}
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#6f635b",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Good Place. Good Food.
            </Typography>
            <Title variant="h1">{profile[0] && profile[0].name}</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#6f635b", my: 4 }}
            >
              {profile[0] &&
                profile[0].about_us.split(" ").slice(0, 20).join(" ")}
            </Typography>
            <div onClick={() => scrollTo("about")}>
              <HeroButton
                backgroundColor="#1A1A1A"
                color="#FFFFFF"
                buttonText="More About Us"
                heroBtn={true}
              />
            </div>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}
