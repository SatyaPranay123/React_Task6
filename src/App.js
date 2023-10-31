import './App.css';
import {Nav} from './Components/Nav';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import {Project} from './Components/Project';
import {Home} from './Components/Home';
import { HashRouter,Routes,Route } from 'react-router-dom';

function App() { 
  return (
    <div>
     <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
      <Contact />
     </HashRouter>
    </div>
  );
}
export default App;