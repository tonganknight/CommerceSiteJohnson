import React from 'react';
import { Breakpoint } from 'react-socks';

function Rules(){


    return(
        <div>
        <Breakpoint large up>
        <div className="RulesTitleLg">Rules</div>
        <div className="RuleLg">1. We only use venmo for our Transactions</div>
        <div className="RuleLg">2. Our Prices are firm, and final!</div>
        <div className="RuleLg">3. Holds are only reserved when paid in full</div>
        <div className="RuleLg">4. If you live outside of Chico, California you will have to pay shipping. Please review how to Order <a href="#HowToOrder">Here</a></div>

        </Breakpoint>
        
        <Breakpoint small down>

        <div className="RulesTitleSm">Rules</div>
        <div className="RuleSm">1. We only use venmo for our Transactions</div>
        <div className="RuleSm">2. Our Prices are firm, and final!</div>
        <div className="RuleSm">3. Holds are only reserved when paid in full</div>
        <div className="RuleSm">4. If you live outside of Chico, California you will have to pay shipping. Please review how to Order <a href="#HowToOrder">Here</a></div>
        </Breakpoint>
        
        
        </div>
    )
}

export default Rules