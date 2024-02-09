import React from "react";
const navbar=()=>
{
  console.log("A");
        return(  <div>
           <div> <h2>
                DigiVoter
            </h2></div>
            <div class="upper">
                <button type="button" class="btn btn-danger">Logout</button>
                <button type="button" class="btn btn-light">Go To Previous</button>
                <h2>Voting For</h2>
                <h1></h1>
                <div class="dropdown">
                  <button class="dropbtn">Dropdown</button>
                  <div class="dropdown-content">
                    <a href="#" value="Position">Link 1</a>
                    <a href="#" value="Position">Link 2</a>
                    <a href="#" value="Position">Link 3</a>
                  </div>
                </div> 
                <button type="button" class="btn btn-success">Go Next⟶</button>
                
            </div>

          </div>
        );
   
}
export default navbar;