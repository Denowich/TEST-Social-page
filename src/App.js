import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App() {
      return (
            <BrowserRouter>
                  <div className='app-wrapper'>
                        <Header />
                        <NavBar />
                        <Footer />
                        <div className='app-wrapper-content'>
                              <Routes>
                                    <Route
                                          path='/profile/*'
                                          element={<Profile />}
                                    ></Route>
                                    <Route
                                          path='/dialogs/*'
                                          element={<Dialogs />}
                                    ></Route>
                                    <Route
                                          path='/news/*'
                                          element={<News />}
                                    ></Route>
                                    <Route
                                          path='/music/*'
                                          element={<Music />}
                                    ></Route>
                                    <Route
                                          path='/settings/*'
                                          element={<Settings />}
                                    ></Route>
                              </Routes>
                        </div>
                  </div>
            </BrowserRouter>
      );
}

export default App;
