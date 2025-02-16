# Autocomplete Search Bar

## Machine Coding Interview (Amazon, Ola) - Autocomplete Search Bar using React

### Optimizations

1. **Debouncing:**  
   The first optimization was reducing the number of API calls by implementing debouncing. This ensures that the API is not called on every keystroke, but rather after the user stops typing for a short period of time (300ms in this case).

2. **Caching:**  
   The second optimization involved caching the search results. When a search is made for a particular keyword, the result is stored in memory. On subsequent searches for the same keyword, the cached result is returned, thus avoiding unnecessary API calls and improving performance.

### Features

- Autocomplete search bar.
- API calls are made only after a short delay (debounced), reducing the number of API requests.
- Caches search results to avoid redundant API calls for the same search term.
- Results are displayed as cards.
