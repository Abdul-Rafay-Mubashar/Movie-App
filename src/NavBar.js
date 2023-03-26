import React from 'react'
import './App.css'
import NavBarButton from './NavBarButton';
export default function NavBar(props) {
    var i = 0;
    var q=0;
    const fun = () => {
        if (i <= 75&&q===0) {
            if (i === 0) {
                document.getElementsByClassName('Hided_MenuBar')[0].style.display = "flex";
            }
            i = i + 3;
            document.getElementsByClassName('Hided_MenuBar')[0].style.width = i + "%";
            if (i >= 74) {
                clearInterval(cle);
                document.getElementsByClassName('main')[0].style.display = "flex";
                q=1;
                console.log(i + 'clear');
            }
        }
        else
        {
            document.getElementsByClassName('main')[0].style.display = "none";
            i = i - 3;
            document.getElementsByClassName('Hided_MenuBar')[0].style.width = i + "%";
            if(i<=0)
            {
                i=0;
                q=0;
                clearInterval(cle)
            }
        }
    }
    var cle;
    const func = () => {

        cle = setInterval(fun, 1);
    }

    return (
        <div className='NavBar_OutLine'>
            <NavBarButton func={func} />
            <div className='NavBar_Part1'>
                <div className='Option1'>
                    Home
                </div>
                <div className='Option2'>
                    Menu
                </div>
                <div className='Option2'>
                    Top Movies
                </div>
            </div>
            <div className='NavBar_Part2'>
                <div className='Part1_Part2'>
                    <div className='Search'>
                        <input placeholder='Search movie Name' className='Search_Input' onChange={props.input} />
                        <button className='Search_Button'>
                            <img src='https://www.pngmart.com/files/8/Search-Button-PNG-Image-Free-Download.png' alt='pic' className='Search_Pic' onClick={props.info} />
                        </button>
                    </div>
                </div>
                <div className='Part2_Part2'>
                    <div className='Option1_Part2'>
                        Sign In
                    </div>
                </div>
            </div>
        </div>
    )
}
