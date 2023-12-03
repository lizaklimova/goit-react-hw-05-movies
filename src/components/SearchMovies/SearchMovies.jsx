import { IoSearchOutline } from 'react-icons/io5';
import { Container } from 'components/App/App.styled';
import {
  SearchForm,
  SearchInput,
  SearchInputLabel,
  SearchBtn,
} from './SearchMovies.styled';
const SearchMovies = ({ search }) => {
  const handleSearch = e => {
    e.preventDefault();

    search(e.target.search.value);

    e.currentTarget.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <div style={{ position: 'relative' }}>
          <SearchInput
            id="search-input"
            type="text"
            name="search"
            required
            autoComplete="off"
          />
          <SearchInputLabel htmlFor="input">Search movie</SearchInputLabel>
        </div>
        <SearchBtn type="submit">
          <IoSearchOutline stroke="#fff" size={25} />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};

export default SearchMovies;
