import React, { useState, useEffect } from "react";
import './app.css';

import PostList from "../post-list"


const App = () =>  {
  
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);

        (async function() {
          await fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => { 
            if(res.ok) {
              return res.json() 
            } else {
              throw new Error(res.status)
            }
          })
          .then(res => setData(res))
          .catch(e => {
            setError(e.toString())
          })
          .finally(() => setIsLoading(false))
        }())
      }, [])
    
      if (isLoading) {
          return(<div>Loading...</div>)
      } 
      if (error) {
        return(<div>{error}</div>) 
      }
        return(
            <div className='app'> 
                
                <PostList 
                    posts={data} 
                    />
                
            </div> 
        )
    
}

export default App