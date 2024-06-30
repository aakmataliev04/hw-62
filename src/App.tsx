import './App.css';
import Home from './containers/Home/Home';
import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Men from './containers/Men/Men';
import Women from './containers/Women/Women';
import Combos from './containers/Combos/Combos';
import Joggers from './containers/Joggers/Joggers';

function App() {

  return (
    <>
      <header>
        <Toolbar />
      </header>
    <main>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/men'} element={<Men />}></Route>
        <Route path={'/women'} element={<Women />}></Route>
        <Route path={'/combos'} element={<Combos />}></Route>
        <Route path={'/joggers'} element={<Joggers />}></Route>
      </Routes>

    </main>
      <Footer />
    </>
  );
};

export default App;
