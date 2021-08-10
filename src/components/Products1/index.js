import React from 'react';
import Breakpoint from 'react-socks';

function Products1(){

    const items = [
        { name: 'Gold Chain', 
          Price: '$6.35',
          URL: '#',}
    ]

    return(
        <div>
            <Breakpoint large up>
                <div> This is the Page for Products1</div>

            </Breakpoint>

            <Breakpoint small down>
                <div className="Products1Flexsm">
                        <div className="Products1Title"> Title</div>

                        <div className="Product1ProductFlex">
                            <div className="PlaceHolderProduct"></div>
                        </div> 
                        <div className="PlaceHolderTitle">This is the First</div>
                </div>

            </Breakpoint>


        </div>
    );
}

export default Products1