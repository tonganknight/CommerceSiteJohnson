import React from 'react';
import { Breakpoint } from 'react-socks';

function Nav({currentPage, handlepageChange}){

    const tabs =[ 'Home', 'Products1']

    return (
    <div>
        <Breakpoint large up>

            <nav>
                <div className="linkedditerlg">
                {tabs.map(tab => (
                    <div key={tab} ><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "Navtextlg"
                    } >{tab}</a></div>

                
                ))}
                </div>
            </nav>
        
        </Breakpoint>

        <Breakpoint small down>
            
        <nav>
            <div className="linkedditersm">
                {tabs.map(tab => (
                    <div key={tab} ><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "Navtextsm"
                    } >{tab}</a></div>


                ))}
                </div>
        </nav>


        </Breakpoint>
        </div>
    )
}

export default Nav