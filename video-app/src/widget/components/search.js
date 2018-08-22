import React from 'react'
import '../components/search.css'


const Search=(props)=>(

    <form 
     className="Search" 
     onSubmit={props.handleSubmit}
     >
        <input  
                ref={props.setRef}
                type="text" 
                className="Search-input" 
                placeholder="Busca tu video favorito"
                name="search"
                onChange={props.handleChange}
                value={props.value}
                
        ></input>
    </form>
)




export default Search