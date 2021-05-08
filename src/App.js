import { useState, useEffect } from 'react';
import './App.css';
import logo from './image/logo.png';
import ReserveForm from './components/Form';
import AlertModal from './components/AlertModal';

function App() {
  const [alertModalShow, setAlertModalShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setAlertModalShow(false), 3000);
    return () => clearTimeout(timer);
  }, [alertModalShow]);
  return (
    <div className="app-container">
      <AlertModal
        alertModalShow={alertModalShow}
        setAlertModalShow={setAlertModalShow}
      />
      <center>
        <main className="main-content">
          <div className="logo-container">
            <img src={logo} alt="company logo" />
          </div>
          <h1 className="topic">Reserve your spot</h1>
          <ReserveForm setAlertModalShow={setAlertModalShow} />
        </main>
      </center>
      {/* <SideNav /> */}
    </div>
  );
}

export default App;
