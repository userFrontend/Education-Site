import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Teacher from './pages/Teacher/Teacher';
import Branches from './pages/Branches/Branches';
import Course from './pages/Course/Course';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/teachers' index element={<Teacher/>}/>
        <Route path='/courses' index element={<Course/>}/>
        <Route path='/branches' index element={<Branches/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
