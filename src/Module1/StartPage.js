import './startPage.css';
import SearchPerson from './SearchPerson';
import Navbar from '../components/Navbar';

function StartPage() {
  return (
    <div className='page'>
      <Navbar />
      <div className="start-page">
        {/* devide yhe page to 2 main parts left and right */}
        <div className='top-part'>
          <h1>Opinion Mining</h1>
        </div>
        
        <div className="bottom-part">
          <SearchPerson />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
