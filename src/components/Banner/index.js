import React from 'react';
import { Breakpoint } from 'react-socks';

function Banner(){

    return (
    <div>
        <Breakpoint large up>

            <div className="BannerFlexlg">
                <div>The Enchanted Trunk</div>
            </div>

        </Breakpoint>

        <Breakpoint small down>

            <div className="BannerFlexsm">
                <div>The Enchanted Trunk</div>
            </div>

        </Breakpoint>
    </div>
    );
}

export default Banner