import { SearchBar,  Button} from './styled'
  
import React, { useState, useEffect } from "react";

const SearchBarra = (props) => {
   


   
    

  return (

    <>
      
      <SearchBar
        placeholder="Artista"
        onChange={(event) => setArtistName(event.target.value)}
      ></SearchBar>
       <Button onClick=''>
        Search 
      </Button>
     
    </>
   
  );
};


export default SearchBarra;