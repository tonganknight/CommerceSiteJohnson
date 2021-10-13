import React from 'react';
import Breakpoint from 'react-socks';
import Footer from '../Footer'

function Products1(){

    const items = [
        { Name: 'Gold Chain', 
          Price: '$6.35',
          Pic: '#',
          Quantity: '5'},
        { Name: 'Ruby Necklace',
          Price: '$3.25',
          Pic: '#',
          Quantity: '3'},
        { Name: 'Bronze Gem',
          Price: '$5.54',
          Pic: '#',
          Quantity: '3'}

    ]

    return(
        <div>
            <Breakpoint large up>
      
            <div className="Products1Titlesm">Title</div>
            

                {items.map(item => (


                <div className="Products1Flexlg">


                    <div className="Product1ProductFlexsm">
                    <div className="PlaceHolderProductlg"></div>
                    </div> 
                    <div className="PlaceHolderTitlesm">{item.Name}</div>
                    <div className="PlaceholderProduct1Pricesm">{item.Price}</div>

                    <div class="VenmoButtonFlexsm">
                    <a target="blank" href="https://account.venmo.com/pay?recipients=Mele-tutu" className="PlaceholderVenmobuttonlg">
                        Place Order With Venmo
                    </a>
                </div>
            </div>


                    ))}


            <Footer/>

            </Breakpoint>

            <Breakpoint small down>

                <div className="Products1Titlesm">Title</div>

                    {items.map(item => (

        
            <div className="Products1Flexsm">
                

                <div className="Product1ProductFlexsm">
                    <div className="PlaceHolderProductsm"></div>
               </div> 
                <div className="PlaceHolderTitlesm">{item.Name}</div>
                <div className="PlaceholderProduct1Pricesm">{item.Price}</div>

                <div class="VenmoButtonFlexsm">
                    <a target="blank" href="https://account.venmo.com/pay?recipients=Mele-tutu" className="PlaceholderVenmobuttonsm">
                        Place Order With Venmo
                    </a>
                </div>
                             </div>
              

                        ))}
                
   
                <Footer/>
            
            </Breakpoint>


        </div>
    );
}

export default Products1