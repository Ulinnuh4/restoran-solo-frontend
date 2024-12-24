import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


//styled typography because it's easier to style than button
const CustomButton = styled(Typography)(({ theme, isactive }) => ({
        backgroundColor: isactive ? "#6f635b" : "#1A1A1A",
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: "14px",
        minWidth: "50px",
        textAlign: "center",
        cursor: "pointer",
        padding: "0.75rem 1.25rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        "&:hover": isactive ? {
          backgroundColor: "#ece6d3",
          color: "#1A1A1A",
          borderColor: "#1A1A1A",
        } : {
          backgroundColor: "#FFFFFF",
          color: "#1A1A1A",
          borderColor: "#1A1A1A",
        },
        [theme.breakpoints.down("md")]: {
          width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem 2rem",
        }, 
        [theme.breakpoints.down("xs")]: {
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }))
      

export default CustomButton;

