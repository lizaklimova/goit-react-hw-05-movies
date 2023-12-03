import { IoSearchOutline } from 'react-icons/io5';
import { Container } from 'components/App/App.styled';
import { SearchForm, SearchInput, SearchBtn } from './SearchMovies.styled';
const SearchMovies = ({ search }) => {
  const handleSearch = e => {
    e.preventDefault();

    search(e.target.search.value);

    e.currentTarget.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          name="search"
          placeholder="Search movie"
          required
          autoComplete="off"
        />
        <SearchBtn type="submit">
          <IoSearchOutline stroke="#fff" size={25} />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};

export default SearchMovies;
