import React from 'react'
import './App.css'
export default function Pic(props) {
    return (
        <div className='a'>
            <div className='For_Pic_Frame'>
                <div className='Pic_Frame'>
                    <img src={props.img} alt='pic' className='poster'/>
                </div>
            </div>
            <div className='Table_Component'>
                <div className='Table_Chart'>
                    <div className='info_table'>
                        <div className='info_heading'>
                            About Movie
                        </div>
                        <div className='info_com'>
                            Movie Name : {props.name}
                        </div>
                        <div className='info_com'>
                            Type : {props.type}
                        </div>
                        <div className='info_com'>
                            Actors : {props.actor}
                        </div>
                        <div className='info_com'>
                            Year : {props.year}
                        </div>
                        <div className='info_com'>
                            Rank : {props.rank}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
