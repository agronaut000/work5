import './App.css';
import My_shops from './pages/My_shops';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavMenu/Navbar';
import css from './App.module.css'
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter className="App">
      <div className={`${css.background} container`}>
        <div className='row'>
          <div className='col-auto'>
            <Navbar/>
          </div>
          <div className={`${css.main_page} col`}>
            <Header />
            <div className='row MainTmp'>
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/my_shops" element={<My_shops />} />
                <Route path="/promo" element={<> </>} />
                <Route path="/stats" element={<> </>} />
                <Route path="/balance" element={<> </>} />
                <Route path="/personal_data" element={<> </>} />
                <Route path="/FAQ" element={<> </>} />
                <Route path="/tech" element={<> </>} />
                <Route path="/sign_out" element={<> </>} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
