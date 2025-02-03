import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router";
import { theme } from "../theme";

interface LibraryProviderProps {
  children: React.ReactNode;
}
export const LibraryProvider = (props: LibraryProviderProps) => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </BrowserRouter>
    </>
  );
};
