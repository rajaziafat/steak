// React
import { useRoutes } from "react-router-dom";

// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

// Hooks
import useSettings from "./hooks/useSettings";

// Config
import routes from "./routes";
import { scTheme } from "./theme";
import "./i18n";

// Custome CSS
import './App.css'

  // Landing Page
import LadingPage from "./components/Landing Page/landing";

const App = () => {
  const pages = useRoutes(routes);

  const { settings } = useSettings();

  // App theme
  const appTheme = scTheme({
    theme: settings.theme,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        {pages}
        <LadingPage/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
