import '../App/App.css';
import HeaderTitle from '../Header/HeaderTitle';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='headertitle'>
        <HeaderTitle />
      </div>
      <div className='search'>
        <Search />
      </div>
    </div>
  );
}

export default App;
