import './App.css';
import logo from './image/logo.png';
import SideNav from './components/SideNav';
import ReserveForm from './components/Form';

function App() {
  return (
    <div className="app-container">
      <center>
        <main className="main-content">
          <div className="logo-container">
            <img src={logo} alt="company logo" />
          </div>
          <h1 className="topic">Reserve your seat</h1>
          <ReserveForm />
        </main>
      </center>
      {/* <SideNav /> */}
    </div>
  );
}

export default App;
