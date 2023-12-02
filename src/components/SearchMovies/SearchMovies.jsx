const SearchMovies = ({ search }) => {
  const handleSearch = e => {
    e.preventDefault();

    search(e.target.search.value);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" required />
      <button type="submit">Search for movies</button>
    </form>
  );
};

export default SearchMovies;
