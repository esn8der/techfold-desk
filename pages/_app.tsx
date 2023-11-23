import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#00d68f",
    },
    secondary: {
      main: "#005639",
    },
    background: {
      paper: "#184e4a",
    },
    text: {
      primary: "#fff",
      secondary: "#d1fae5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "all 200ms ease-in",
          padding: "0.75rem 1rem",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
        contained: {
          backgroundColor: "#00d68f",
          "&:hover": {
            backgroundColor: "#00d68f",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          fontWeight: "bold",
          borderWidth: "2px",
          borderColor: "#011a0b",
          borderBottomWidth: "0px",
          textAlign: "center",
          color: "#fff",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderWidth: "2px",
          borderColor: "#011a0b",
          borderTopWidth: "0px",
          borderBottomWidth: "0px",
          backgroundColor: "#184e4a",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          textAlign: "center",
          color: "#d1fae5",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#184e4a",
          "& .MuiFilledInput-root": {
            backgroundColor: "#17706a",
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#184e4a",
          gap: "0.5rem",
          borderWidth: "2px",
          borderColor: "#011a0b",
          borderTopWidth: "0px",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SnackbarProvider>
  );
}
