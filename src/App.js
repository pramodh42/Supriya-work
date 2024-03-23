import Menu from "./Components/Menu"; 
import View from "./Components/View" 
import Header from "./Components/Header";
function App() {
  return (
    <div className="App"> 
      <Header/> 
      <div className="container">
      <Menu/> 
      <View/>
      </div>
    </div>
  );
}

export default App;
