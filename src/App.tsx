import Routing from "./routes";
import  GlobalStyles  from "./styles/globalStyle";
import Home from "./pages/home/index"


function App() {
  return (
    <>
      {/*<Routing /> quando o elemento é colocado , ele duplica o conteúdo da pág */} 
      <GlobalStyles />
      <Home/>
      </>
  );
}

export default App;
