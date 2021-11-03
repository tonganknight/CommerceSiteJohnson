import React from 'react';
import { Breakpoint } from 'react-socks';
import Footer from '../Footer';
import Rules from '../Rules';

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
            
                <Rules/>

                <div className="HomePagePromiseLg">Our Promise to you!</div>
                <div className="PromisetextLg">I promise a unique gift! I never make the same set twice.</div>
                    <div className="PromisetextLg">When applicable, I include 4 felt dots on the bottom of products to protect furniture</div> 

                <section id="HowToOrder">
                <div className="HomePagePromiseLg"> How to Place an order</div>

                </section>

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

                    <Rules/>

                    <div className="HomePagePromiseSm">Our Promise</div>

                    <div>I promise a unique gift! I never make the same set twice.</div>
                    <div>When applicable I include 4 felt dots on the bottom of products to protect furniture</div> 


                <section id="HowToOrder">
                    <div className="HomePagePromiseSm"> How to Place an order</div>

                </section>
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