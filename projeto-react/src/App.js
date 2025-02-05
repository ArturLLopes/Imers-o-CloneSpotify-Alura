
import './App.css';
import Sidebar from './componentes/sidebar/_sidebar';
import Header from './componentes/header/_header';
import Footer from './componentes/footer/_footer';
import Main from './componentes/main/_main';
import SearchComponent from './componentes/utils/_script';



function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
      <SearchComponent />
      
    </div>    
  );
}

export default App;
