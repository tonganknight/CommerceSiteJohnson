import React from 'react';
import { Breakpoint } from 'react-socks';

function Home() {

    return(

        <div>
            <Breakpoint large up>

            <div className="HomePageFlexlg">

                <div className="HomePageWelcomelg">
                    Welcome to The Enchanted Trunk!
                </div>

                <div className="HomePageWelcomePiclg">Place Holder</div>

                <div className="HomePageAboutlg">Prepare to have your mind 
                enchanted by our amazing products. We off many items 
                you can not find anywhere else. Our enchanting items include: 
                Necklaces , Rings, Keepsakes, Bracelets,  Blah, Blah, blah</div>


                <div className="HomePageVemmoIcon"></div>


                <div className="HomePageAboutlg">Here at the Enchanted Trunk 
                We use Vemmo for Safe and Secure Transactions. To Place an order,
                Browse our products from the Navigation bar at the top of the
                screen. When you have found the product you would like to buy,
                select the Vemmo Icon, Yada Yadda Yada</div>
            </div>

            </Breakpoint>

            <Breakpoint small down>

                <div className="HomePageFlexsm">

                <div className="HomePageWelcomesm">
                    Welcome to The Enchanted Trunk!
                </div>
                    

                </div>



            </Breakpoint>

        </div>

    );
}

export default Home