import { useState,useEffect } from "react";
const useFetch = (url) => {
    const[data,setData]=useState(null);
    const[isPending,setPending]=useState(true);
    const[error,setError]=useState(null)
  
    useEffect(()=>{
      const abortCont=new AbortController();

        setTimeout(()=>{
          fetch(url,{signal:abortCont.signal}).then(res=>{
            console.log(res);
            if(!res.ok){
              throw Error("could not fetch the data for that resource");
            }
         return res.json();
        })
        .then(data=>{
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch(err=>{//network error if no json not connected ...erorr in console
          if(err.name==='AbortError'){
            console.log('fetched aborted')
          }
          else{
          setPending(false);
        setError(err.message);
          }
        })
        },500);

        return ()=>abortCont.abort();//clean up function
      },[url]);


      return {data,isPending,error}
}
 
export default useFetch;