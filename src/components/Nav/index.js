import React from 'react';
import { Breakpoint } from 'react-socks';
import { Dropdown } from 'react-bootstrap';

function Nav({currentPage, handlepageChange}){

    const tabs =[ 'Home', 'Memorabilia', 'Necklaces']



  

    return (
    <div>
        <Breakpoint large up>

            <nav>
                <div className="linkedditerlg">
                {tabs.map(tab => (
                    <div key={tab} ><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}  data-toggle="dropdown"
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "Navtextlg"
                    } >{tab}</a></div>

                
                ))}
                </div>
            </nav>
        
        </Breakpoint>

        <Breakpoint small down>
            
        <Dropdown>
           

          

            <nav>
                <div className="MenuTitlesm">Menu</div>
        <div className="linkedditerlg">
            
            <Dropdown.Toggle variant="success" id="dropdown-basic" align="end" className="MapIconsm">
              
            </Dropdown.Toggle>

              <Dropdown.Menu>
                
                 {tabs.map(tab => (
                    <div key={tab} ><div className="linkFlexsm"></div><a href={'#' + tab.toLowerCase()}
                    onClick={() => handlepageChange(tab)}  data-toggle="dropdown"
                    className={ 
                    currentPage === tab ? 'nav-link active' : 'nav-link', "Navtextsm"
                    } >{tab}</a></div>
                
                ))}
            </Dropdown.Menu>

             </div>  
             </nav>
          
        </Dropdown>

        </Breakpoint>
        </div>
    )
}

export default Nav