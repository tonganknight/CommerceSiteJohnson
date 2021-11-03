import React from 'react';
import { Breakpoint } from 'react-socks';
import Footer from '../Footer'

function Home() {

    return(

        <div>
            <Breakpoint large up>

            <div className="HomePageFlexlg">

                <div className="HomePageWelcomelg">
                    Welcome to Mele's Emporium!
                </div>

                <div className="HomePageWelcomePiclg"></div>

                <div className="HomePageAboutlg">Hello Chico Residents!<div className="break"></div> Welcome to my Shop!
                Here you can find some basic info for placing  orders, and for navigating our website. One thing to note... We use Venmo for all of our transactions, 
                so you will need to have an account with them.  
            
                
                <div className="HomePageRules">Rules</div>
                </div>


                <div className="HomePageVemmoIconlg"></div>


                <div className="HomePageAboutlg"> and Remember... We use Vemmo for all of our Transactions.</div>


            </div>

            </Breakpoint>

            <Breakpoint small down>

                <div className="HomePageFlexsm">

                    <div className="HomePageWelcomesm">
                        Welcome to Mele's Emporium!
                    </div>
                    
                    <div className="HomePageWelcomePicsm"></div>

                    <div className="HomePageAboutsm">Hello Chico Residents!<div className="break"></div> Welcome to my Shop!
                Here you can find some basic info for placing  orders, and for navigating our website. One thing to note... We use Venmo for all of our transactions, 
                so you will need to have an account with them.
                    </div>

                    <div className="HomePageVemmoIconsm"></div>

                    <div className="HomePageAboutsm">
                        We secure all Payments through Venmo!
                    </div>

                </div>



            </Breakpoint>

            <Footer/>

        </div>

    );
}

export default Home