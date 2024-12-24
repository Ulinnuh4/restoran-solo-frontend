import { 
    Box, 
    Container, 
    styled, 
    Typography 
  } from "@mui/material";
  
  
  
  const AboutUs = () => {
    // CustomContainer is a styled Container component with additional styles for media queries
    const CustomContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: theme.spacing(4),
      },
    }));
  
    // CustomBox is a styled Box component with additional styles for media queries
    const CustomBox = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
          maxWidth: "15 rem",
      }, [theme.breakpoints.down("sm")]: {
          maxWidth: "15rem",
      },
      alignContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    }));
  
  
    return (
      <Box sx={{ mt: 5 }}>

        {/* Render a CustomBox component with an image and Typography component */}
        <CustomContainer>
          <CustomBox>
          <Box
            sx={{
              display: "inline-block",
              border: "5px solid #24292b", // Bingkai biru muda
              borderRadius: "8px", // Sudut melengkung
              padding: "4px", // Opsional, jarak antara gambar dan bingkai
            }}
          >
            <img 
              src='../images/place1.jpg' 
              alt="Place" 
              style={{ maxWidth: "20rem" }} 
            />
            <Typography
            variant="body2"
            sx={{
              color: "#24292b",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
              Variety of Traditional Dishes
            </Typography>
          </Box>
          
          </CustomBox>

          {/* Render a CustomBox component with an image and Typography component */}
          <CustomBox>
          <Box
            sx={{
              display: "inline-block",
              border: "5px solid #24292b", // Bingkai biru muda
              borderRadius: "8px", // Sudut melengkung
              padding: "4px", // Opsional, jarak antara gambar dan bingkai
            }}
          >
            <img 
              src='../images/place2.jpg' 
              alt="Place" 
              style={{ maxWidth: "20rem" }} 
            />
            <Typography
            variant="body2"
            sx={{
              color: "#24292b",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
              Reservations Available
            </Typography>
          </Box>
          
          </CustomBox>

          {/* Render a CustomBox component with an image and Typography component */}
          <CustomBox>
          <Box
            sx={{
              display: "inline-block",
              border: "5px solid #24292b", // Bingkai biru muda
              borderRadius: "8px", // Sudut melengkung
              padding: "4px", // Opsional, jarak antara gambar dan bingkai
            }}
          >
            <img 
              src='../images/place3.jpg' 
              alt="Place" 
              style={{ maxWidth: "20rem" }} 
            />
            <Typography
            variant="body2"
            sx={{
              color: "#24292b",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
              Beautiful Scenery
            </Typography>
          </Box>
          
          </CustomBox>
        </CustomContainer>
      </Box>
    );
  };
  
  export default AboutUs;