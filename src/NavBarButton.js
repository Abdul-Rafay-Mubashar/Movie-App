import React from 'react'

export default function NavBarButton(props) {
    return (
        <>
            <div className='totel'>
                <button className='Show_MenuBar'onClick={props.func}>
                    <img src='data:image/png;base64,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' alt='pic' className='Menu_Pic'/>
                </button>
                <div className='Hided_MenuBar'>
                    <div className='main'>
                        <div className='info_com'>
                            Home :
                        </div>
                        <div className='info_com'>
                            Menu :
                        </div>
                        <div className='info_com'>
                            Movie Name :
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
