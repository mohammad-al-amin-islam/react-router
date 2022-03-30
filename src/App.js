import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Post from './components/Post/Post';
import PostDetail from './components/PostDetails/PostDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='friends' element={<Friends></Friends>}></Route>
        <Route path='friends/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/Post' element={<Post></Post>}>
          <Route
            path=':postId'
            element={<PostDetail></PostDetail>}
          ></Route>
        </Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/countries/:nameCountries' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
