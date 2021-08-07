import React from 'react';
import { Breakpoint } from 'react-socks';
import { ButtonGroup, DropdownButton, Dropdown,  } from 'react-bootstrap';

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
            
        <nav className=" linkedditersm navbar navbar-light ">  
        <ButtonGroup className="dropdown">
         <DropdownButton as={ButtonGroup} menuAlign={{ lg: 'right' }} id="bg-nested-dropdown" className="mobileMenuButton">

                {tabs.map(tab => (
                    <Dropdown.Item><div key={tab} className="navtext"><a href={'#' + tab.toLowerCase()} 
                    onClick={() => handlepageChange(tab)} data-toggle="dropdown"
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "mobileNavText"
                    } >{tab}</a></div>
               </Dropdown.Item> ))}
       </DropdownButton>
       </ButtonGroup>
       </nav>


        </Breakpoint>
        </div>
    )
}

export default Nav