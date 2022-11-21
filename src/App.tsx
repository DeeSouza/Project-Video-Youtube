import Header from "./components/Header";
import Menu from "./components/Menu";
import { MainContextProvider } from "./contexts/MainContext";

import GlobalStyle from "./globals/style";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyle />

      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
