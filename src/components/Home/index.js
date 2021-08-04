import React from 'react';
import { Breakpoint } from 'react-socks';

function Home() {

    return(

        <div>
            <Breakpoint large up>

            <div className="HomePageFlexlg">

                <div className="HomePageWelcomelg">
                    Welcome to Mele's Emporium!
                </div>

                <div className="HomePageWelcomePiclg"></div>

                <div className="HomePageAboutlg">All of our products are magical. We want to help you find something unique and special.
                We want you to find the perfect gift or keepsake that speaks to your soul! Most of all we want to enchant you!
                <div className="break"></div>Feel free to browse our selections and find the special item that speaks to you.
                </div>


                <div className="HomePageVemmoIcon"></div>


                <div className="HomePageAboutlg">We use Vemmo for all of our Transactions.</div>
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