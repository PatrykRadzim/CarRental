import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "@emotion/react";
import { Stack, createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: { main: "#1648FA" },
    secondary: { main: "#141619" },
    background: "#F4F3F3",
    backgroundSecondary: "#D8D8D8",
  },
});

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Stack
        sx={{
          height: "100vh",
          flexDirection: "column",
          backgroundColor: "background",
          overflowX: "hidden",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default MainLayout;
