import React from "react";

const Head=()=>{

    return(
        <header>
        <div>
           <div> <h2>
                DigiVoter
            </h2></div>
            <div class="upper">
                <button type="button" className="navhead">Logout</button>
                <button type="button" className="navhead">Go To Previous</button>
                </div>
                <h2>Voting For</h2>
                <div>
                <button type="button" className="navhead">General Secretary</button>
                <button type="button" className="navhead">Sports Secretary</button>
                <button type="button" className="navhead">Cultural Secretary</button>
                <button type="button" className="navhead">Welfare Secretary</button>
                </div>
                <button type="button" className="navhead">Go Next⟶</button>
                
            </div>

          </header>
    );
}
export default Head;

