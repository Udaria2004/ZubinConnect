import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ClientNav from "@/components/clients/ClientNav";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F9EF1F",
      },
      secondary: {
        main: "#01A9FF",
      },
      text: {
        primary: "#585858", // Use 'primary' or 'secondary' to set text colors
      },
      error: {
        main: "#B23239",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <ClientNav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
