import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer firstName = "Paul" lastName = "Nguyen"/>
    </div>
  );
}

export default App;