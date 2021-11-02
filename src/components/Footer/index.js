import React from 'react';
import { Breakpoint } from 'react-socks';

function Footer(){

    return(
        <div>
            <Breakpoint large up>

                <div className="FooterFlexlg">
                    <div className="FooterSocialMediaCalllg">Check us out on Instagram!</div>
                     <a  alt="Link to Instagram" className="FooterInstagramIconlg"></a>
                </div>

                <div className="Brand">created by <a  href="https://react-malachi.herokuapp.com/#about"className="Brandlink">AlusaSolutions</a></div>
                
               
            </Breakpoint>

            <Breakpoint small down>

            <div className="FooterFlexsm">
                    <div className="FooterSocialMediaCalllg">Check us out on Instagram!</div>
                     <a className="FooterInstagramIconlg"></a>
            </div>

            <div className="Brand">created by <a  href="https://react-malachi.herokuapp.com/#about"className="Brandlink">AlusaSolutions</a></div>

            </Breakpoint>

        </div>

    );
}

export default Footer