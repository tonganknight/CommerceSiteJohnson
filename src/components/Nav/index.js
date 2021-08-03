import React, {useState} from 'react';
import { Breakpoint } from 'react-socks';

function Nav({currentPage, handlepageChange}){

    const tabs =[ 'Home']

    return (
    <div>
        <Breakpoint large up>

            <nav>
                {tabs.map(tab => (
                    <div key={tab} className=""><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "Navtext"
                    } >{tab}</a></div>


                ))}
            </nav>
        
        </Breakpoint>
        </div>
    )
}

export default Nav