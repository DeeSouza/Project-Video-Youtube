import Header from "./components/Header";
import Menu from "./components/Menu";

import { Home } from "./pages/Home";
import { MainContextProvider } from "./contexts/MainContext";

import GlobalStyle from "./globals/style";

function App() {
   return (
      <MainContextProvider>
         <GlobalStyle />

         <Header />
         <Menu />
         <Home />
      </MainContextProvider>
   );
}

export default App;
