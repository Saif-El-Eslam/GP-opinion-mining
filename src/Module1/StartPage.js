import './startPage.css';
import SearchPerson from './SearchPerson';

function StartPage() {
  return (
    <div className="start-page">
      {/* devide yhe page to 2 main parts left and right */}
      <div className='top-part'>
        <h1>Opinion Mining</h1>
      </div>
      
      <div className="bottom-part">
        <SearchPerson />
      </div>
    </div>
  );
}

export default StartPage;
