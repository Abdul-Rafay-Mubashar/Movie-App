import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Pic from './Pic';

function App() {
  const [copy, seTcopy] = useState(null)
  const [check, seTcheck] = useState(false)
  const [text,setText]=useState(null);
  const searchinput=(event)=>{
      var a=document.getElementsByClassName('Search_Input')[0].value;
      setText(a);
      console.log(text)
    }
  const info = () => {
    var url='https://online-movie-database.p.rapidapi.com/auto-complete?q='+text
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0f7ce9d7dbmshfad9572257facf7p1cc103jsn371c92257f31',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        seTcopy(data.d)
        seTcheck(true)
        return copy
      })
  }
  return (
    <>
      <NavBar info={info} input={searchinput}/>
      {check&&
        copy.map((res,index)=>{
        if(res.y>2019)
        {
         return <Pic name={res.l} type={res.q} rank={res.rank} actor={res.s} year={res.y} img={res.i.imageUrl}/>
        }
            
      })
      }
    </>
  );
}

export default App;
