import React, {useState} from 'react';
import Home from '../Home';
import Nav from '../Nav';
import Banner from '../Banner';
import Products1 from '../Memorabilia';

function RenderLive(){

const [currentPage, handlepageChange] = useState('Home');

    const renderPage =() =>{
        switch (currentPage) {
            case 'Home':
                return <Home/>;
            case 'Memorabilia':
                return <Products1/>
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