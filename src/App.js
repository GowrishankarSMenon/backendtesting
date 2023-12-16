import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav';
import AllRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
