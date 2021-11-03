import React, {useState} from 'react';
import Home from '../Home';
import Nav from '../Nav';
import Banner from '../Banner';
import Memorabilia from '../Memorabilia';
import Necklaces from '../Necklaces';

function RenderLive(){

const [currentPage, handlepageChange] = useState('Home');

    const renderPage =() =>{
        switch (currentPage) {
            case 'Home':
                return <Home/>;
            case 'Memorabilia':
                return <Memorabilia/>
            case 'Necklaces':
                return <Necklaces/>
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