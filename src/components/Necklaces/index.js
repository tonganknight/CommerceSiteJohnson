import React from 'react';
import { Breakpoint } from 'react-socks';
import Footer from '../Footer';

import RepunzelNecklace from '../../assets/Products/Necklaces/Repunzel Necklace.jpeg';
import LittleMermaid from '../../assets/Products/Necklaces/Little Mermaid Necklace.jpeg';
import ElvenNecklace from '../../assets/Products/Necklaces/Elven Necklace.jpeg';
import HocusPocus from '../../assets/Products/Necklaces/Hocus Pocus Necklace.jpeg';
import MermaidCharm from '../../assets/Products/Necklaces/Mermaid Charm.jpeg';
import MermaidNecklace from '../../assets/Products/Necklaces/Mermaid Necklace.jpeg';
import SeaNecklace from '../../assets/Products/Necklaces/Sea Necklace.jpeg';
import WishNecklace from '../../assets/Products/Necklaces/Wish Necklace.jpeg';
function Necklaces (){

    const items = [
        {Name: 'Repunzel Necklace', 
        Price: '$12.00',
        Image: RepunzelNecklace,
        Quantity: '5'},
        {Name: 'Mermaid Necklace', 
        Price: '$12.00',
        Image: LittleMermaid,
        Quantity: '5'},
        {Name: 'Elven Necklace', 
        Price: '$12.00',
        Image: ElvenNecklace,
        Quantity: '5'},
        {Name: 'HocusPocus Necklace', 
        Price: '$12.00',
        Image: HocusPocus,
        Quantity: '5'},
        {Name: 'Mermaid Necklace', 
        Price: '$12.00',
        Image: MermaidNecklace,
        Quantity: '5'},
        {Name: 'Sea Necklace', 
        Price: '$12.00',
        Image: SeaNecklace,
        Quantity: '5'},
        {Name: 'Wish Necklace', 
        Price: '$12.00',
        Image: WishNecklace,
        Quantity: '5'},
        {Name: 'Mermaid Charm', 
        Price: '$12.00',
        Image: MermaidCharm,
        Quantity: '5'},

        
    ]


    return(
        <div>
            <Breakpoint large up>
      
      <div className="Products1Titlesm">Necklaces</div>
      

          {items.map((item, index) => (


          <div className="Products1Flexlg">


              <div className="Product1ProductFlexsm">
              <img  src={item.Image} alt="a displayed Product" className="PlaceHolderProductlg"></img>
              </div> 
              <div  key={index} className="PlaceHolderTitlesm">{item.Name}</div>
              <div className="PlaceholderProduct1Pricesm">{item.Price}</div>
             
              <div className="VenmoButtonFlexsm">
              <a target="blank" href="https://account.venmo.com/pay?recipients=Mele-tutu" className="PlaceholderVenmobuttonlg">
                  Place Order With Venmo
              </a>
          </div>
      </div>


          ))}


      <Footer/>

      </Breakpoint>

      <Breakpoint small down>

          <div className="Products1Titlesm">Necklaces</div>

              {items.map(item => (

  
      <div className="Products1Flexsm">
          

          <div className="Product1ProductFlexsm">
          <img src={item.Image} alt="a displayed Product" className="PlaceHolderProductsm"></img>
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
    )
}

export default Necklaces