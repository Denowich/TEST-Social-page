import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';

function App(props) {
      return (
            <div className='app-wrapper'>
                  <Header />
                  <NavBar />
                  {/* <Friends state={props.state.sideBar} /> */}
                  <Footer />
                  <div className='app-wrapper-content'>
                        <Routes>
                              <Route
                                    path='/profile/*'
                                    element={
                                          <Profile
                                                state={props.state.profilePage}
                                          />
                                    }
                              ></Route>
                              <Route
                                    path='/dialogs/*'
                                    element={
                                          <Dialogs
                                                state={props.state.dialogsPage}
                                          />
                                    }
                              ></Route>
                              <Route path='/news/*' element={<News />}></Route>
                              <Route
                                    path='/music/*'
                                    element={<Music />}
                              ></Route>
                              <Route
                                    path='/settings/*'
                                    element={<Settings />}
                              ></Route>

                              <Route
                                    path='/friends/*'
                                    element={
                                          <Friends
                                                state={props.state.sideBar}
                                          />
                                    }
                              ></Route>
                        </Routes>
                  </div>
            </div>
      );
}

export default App;
