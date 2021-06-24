import { Input, Button } from 'semantic-ui-react';
import './Search.css';
import '../App/App.css';

function Search({ searchTerm, setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Input
        className='searchbar'
        size='small'
        icon='search'
        placeholder='Search Contacts'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className='add'>
        <Button size='small' color='grey'>
          Add Contact
        </Button>
      </div>
    </div>
  );
}

export default Search;
