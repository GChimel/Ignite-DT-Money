import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyles } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Transactions/>
    </ThemeProvider>
  )
}