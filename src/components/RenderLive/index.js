import React, {useState} from 'react';
import { Breakpoint} from 'react-socks';
import Home from '../Home';
import Nav from '../Nav';
import Banner from '../Banner';

function RenderLive(){

const [currentPage, handlepageChange] = useState('Home');

    const renderPage =() =>{
        switch (currentPage) {
            case 'Home':
                return <Home/>;
            default: 
                return <Home />;
        }
    };


    return (
<div>


        <Banner/>

            <div>
           <Nav currentPage={currentPage} handlepageChange={handlepageChange} />
            <div>{renderPage(currentPage)}</div>
            </div>
   

</div>
    )
}

export default RenderLive