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
      paper: "#1f2933",
    },
    text: {
      primary: "#fff",
      secondary: "#C4C4FF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "all 200ms ease-in",
          padding: "0.75rem 1rem",
          "&:hover": {
            transform: "scale(1.05)",
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
          borderColor: "#374151",
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
          borderColor: "#374151",
          borderTopWidth: "0px",
          borderBottomWidth: "0px",
          backgroundColor: "#1f2933",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          textAlign: "center",
          color: "#C4C4FF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#283542",
          "& .MuiFilledInput-root": {
            backgroundColor: "#283542",
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f2933",
          gap: "0.5rem",
          borderWidth: "2px",
          borderColor: "#374151",
          borderTopWidth: "0px",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </SnackbarProvider>
  );
}
