
const initialState = {
  loading: false,
  articles: [],
  total: 0,
  error: null,
  searchedWords: [],
  isSearchEnabled: false,
  currentWord: "",
  isSearchHidden: false
};

function reducer(state = initialState, action) {  
  let { searchedWords } = state;
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.articles
      };
    case "SEARCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        total: action.articles.length,
        articles: action.articles
      };
    case "SEARCHED_KEYS":      
      return {
        ...state,
        searchedWords: searchedWords.concat(action.words)
      };
    case "IS_SEARCH_ENABLED":
      return {
        ...state,
        isSearchEnabled: action.isSearchEnabled
      };
    case "SEARCHED_WORD":    
      return {
        ...state,
        currentWord: action.currentWord || action.words 
      };
    case "HIDE_SEARCH":
      return {
        ...state,
        isSearchHidden: action.isSearchHidden
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        articles: []
      };
    default:
      return state;
  }
};

export default reducer;
