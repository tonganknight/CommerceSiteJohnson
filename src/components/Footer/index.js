import React from 'react';
import { Breakpoint } from 'react-socks';

function Footer(){

    return(
        <div>
            <Breakpoint large up>

                <div className="FooterFlexlg">
                    <div className="FooterSocialMediaCalllg">Check us out on Instagram!</div>
                     <a className="FooterInstagramIconlg"></a>
                </div>
                
               
            </Breakpoint>

        </div>

    );
}

export default Footer