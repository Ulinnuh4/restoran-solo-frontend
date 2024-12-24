import * as React from "react";
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import CustomDrawer from "./CustomDrawer";

export default function MyNavbar() {
  const [value, setValue] = React.useState(); // Deklarasikan state untuk nilai tab yang dipilih
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md")); // Periksa apakah lebar layar lebih kecil dari ukuran medium

  // Fungsi scrollTo untuk menggulir ke elemen dengan id yang ditentukan
  const scrollTo = (id) => {
    const menuElement = document.getElementById(id);
    window.scrollTo({
      top: menuElement.offsetTop - 75,
      left: 0,
      behavior: "smooth",
    });
  };

  const [logo, setLogo] = React.useState(null); // Deklarasikan state untuk logo dan setel ke null secara awal

  React.useEffect(() => {
    // Mengambil logo dari API
    fetch("http://127.0.0.1:8000/api/profile/")
      .then((response) => response.json())
      .then((data) => {
        setLogo(data[0].logo);
      });
  }, []);

  return (
    <React.Fragment>
      {/* AppBar dengan posisi sticky dan warna latar belakang */}
      <AppBar position="sticky" sx={{ background: "#6f635b", paddingX: isMedium ? 3 : 9.5 }}>
        <Toolbar>
          {/* menampilkan logo dengan atribut klik untuk menuju ke halaman utama */}
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/home";
            }}
          />
          {isMedium ? ( // Jika lebar layar lebih kecil dari medium, tampilkan drawer
            <CustomDrawer />
          ) : (
            <>
              {/* Tabs untuk menu navigasi */}
              <Tabs sx={{ marginLeft: "auto" }} indicatorColor="" textColor="inherit" value={value} onChange={(e, value) => setValue(value)}>
                <Tab
                  label="Home"
                  onClick={() => {
                    scrollTo("home");
                  }}
                />
                <Tab
                  label="Menu"
                  onClick={() => {
                    scrollTo("menu");
                  }}
                />
                <Tab
                  label="FAQ"
                  onClick={() => {
                    scrollTo("faq");
                  }}
                />
                <Tab
                  label="Contact Us"
                  onClick={() => {
                    scrollTo("contact");
                  }}
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
