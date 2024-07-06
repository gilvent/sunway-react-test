/** Please write the sample code to debounce handleOnChange (Do not use any 3th party libs other than react) **/

function debounced(fn, timeout) {
  let timeoutID;
  return (...args) => {
    clearTimeout(timeoutID)

    timeoutID = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}

async function fetchStarWarsCharacters(searchTerm) {
  const apiUrl = `https://swapi.dev/api/people?search=${searchTerm}`;
  const response = await fetch(apiUrl);
  const { results } = await response.json();
  return results;
}

const SearchBox = () => {
  const fetchCharacters = debounced(fetchStarWarsCharacters, 1000);

  handleOnChange = (event) => {
    fetchCharacters(event.target.value);
  };

  return <input type="search" name="p" onChange={handleOnChange} />;
};

export default SearchBox