import React from 'react';
import Breakpoint from 'react-socks';
import Footer from '../Footer';
import Scooby from '../../assets/Products/Memorabilia/Scooby-Doo And the Witches Ghost.JPEG';
import EmperorsNewGroove from '../../assets/Products/Memorabilia/Emperors New Groove.jpeg';
import WillyWonka from '../../assets/Products/Memorabilia/Willy Wonka.jpeg';
import MonsterInc from '../../assets/Products/Memorabilia/Monster Inc.jpeg';
import Atlantis from '../../assets/Products/Memorabilia/Atlantis the Lost Empire.jpeg';
import Titanic from '../../assets/Products/Memorabilia/Titanic.jpeg';
import SenseandSensibility from '../../assets/Products/Memorabilia/Sense and Sensibility.jpeg';
import CinderellaStory  from '../../assets/Products/Memorabilia/A Cinderella Story.jpeg';
import MrsDoubtfire from '../../assets/Products/Memorabilia/MrsDoubtfire.jpeg';
import PricessBride from '../../assets/Products/Memorabilia/The Pricess Bride.jpeg';
import PeterPan from '../../assets/Products/Memorabilia/PeterPan.jpeg';

function Memorabilia(){


    const items = [
        { Name: 'Scooby-Doo Nightlight', 
          Price: '$12.00',
          Image: Scooby,
          Quantity: '5'},
        { Name: 'Emperors New Groove Nightlight',
          Price: '$12.00',
          Image: EmperorsNewGroove,
          Quantity: '5'},
        { Name: 'Willy Wonka Nightlight',
          Price: '$12.00',
          Image: WillyWonka,
          Quantity: '5'},
        { Name: 'Monster Inc. Nightlight',
          Price: '$12.00',
          Image: MonsterInc,
          Quantity: '5'},
        { Name: 'Titanic',
          Image: Titanic,
          Price: '$12.00',
          Quantity: '5'},
        { Name: 'Sense and Sensibility',
         Image: SenseandSensibility,
         Price: '$12.00',
         Quantity: '5'},
        { Name: 'Atlantis the Lost Empire',
         Image: Atlantis,
         Price: '$12.00',
         Quantity: '5'},
        { Name: 'A Cinderella Story',
         Image: CinderellaStory,
         Price: '$12.00',
         Quantity: '5'},
        { Name: 'Mrs.DoubtFire',
         Image: MrsDoubtfire,
         Price: '$12.00',
         Quantity: '5'},
        { Name: "Princes's Bride",
         Image: PricessBride,
         Price: '$12.00',
         Quantity: '5'},
        { Name: "Peter Pan",
         Image: PeterPan,
         Price: '$12.00',
         Quantity: '5'},

    ]


    return(
        <div>
            <Breakpoint large up>
      
            <div className="Products1Titlesm">Memorabilia</div>
            

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

                <div className="Products1Titlesm">Memorabilia</div>

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
    );
}

export default Memorabilia