import React, { useEffect, useState } from 'react';

import RecipeCards from './components/RecipeCards';

import './App.css';


const App = () => {
  const [serachText,setSearchText] = useState("");
  const [results,setResults] = useState([]);
  const [loading,setLoading] = useState(true);
  const [showResults,setShowResults] = useState(false);
  const [cache,setCache] = useState({});
  
  const fetchData = async () => {
    // how do you use the catch next time mango comes you don't i have to call and API
    // if data is not present in my cache then do this
    if(cache[serachText]){
       console.log("CACHE RETURNED",serachText);
       setResults(cache[serachText]);
       return;
    }

    console.log("API CALL",serachText);
    const URL = `https://dummyjson.com/recipes/search?q=${serachText}`;
    const data = await fetch(URL);
    const json = await data.json();
    setResults(json?.recipes);
    // update the cache
    setCache(prevState=>({...prevState,[serachText]:json?.recipes}));
    setLoading(false);
  }

  useEffect(() => {
    // when i write something then take a pause while typing suppose i'm typing tic tic tic 
    // and i take a pause then make and API Call then see the result
    // if i'm continues typing don't make an API CALL Every KEY Stroke this is handle by debouncing
   const timer = setTimeout(fetchData,300);
   return ()=> clearTimeout(timer);
  },[serachText]);
  // if this is empty it will be call once after the component has been  render
 //  if you write serachText over here so this function will be call everytime my serachText will be changes ok
 // so everytime my serachText  is changes this function will be call

  return (
    <div className='App'>
     <h1>Autocomplete Search Bar</h1>
      <div>
          <input 
           type="text"
           className='searchInput'
           onFocus={()=>setShowResults(true)}
           onBlur={()=>setShowResults(false)}
           onChange={(e)=>setSearchText(e.target.value)}
           />
      </div>
      {loading ? <div>Loading...</div> : showResults && (
          <div className='result_container'>
          {results?.map(result => <RecipeCards key={result?.id} result={result} /> )}
         </div>
      )}
     
    </div>
  )
}

export default App;


// First Optimization was i have reduce the number of calls using debouncing
// The second Optimization was i have caching the search result
// and it's returning the cache result and i'm not making the actual API CALL
// every time i'm searching for the same keyword ok
