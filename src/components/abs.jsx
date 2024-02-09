import React, { useEffect, useState } from "react";
import './agenda_c.css';
const lists=[
    {
        id:'0',
        name:'Raj',
        agenda:'slfhkahfnlewnf'
    },
    {
        id:'1',
        name:'Raj2',
        agenda:'slfhkahfzdzfsgsfgnlewnf'
    },
    {
        id:'2',
        name:'Raj3',
        agenda:'slfhka;dfjglkfdghfnlewnf'
    },
    {
        id:'3',
        name:'Raj4',
        agenda:'slfhkadkfkgjldkfjghfnlewnf'
    },

]

const Agenda=({agenda,agendaStyle})=>{

    return(
        <React.Fragment>
        <div className="agenda_block" style={agendaStyle}><p className="agenda_text">{agenda}</p></div>


        </React.Fragment>
    )
}





const Abc=()=>{
    const [agenda , setAgenda]=useState(null);
    const [voterStyle,setVoterstyle]=useState({opacity:1});
    const [agendaStyle,setAgendaStyle]=useState({opaciyt:0});



    useEffect=(()=>{
        console.log('Rendering...');
        
    
    },[]);

  /*  const handleClick=(list)=>{
        // const c_agenda=lists[key].agenda;
        // console.log(c_agenda);
         console.log("clicked");
         setAgenda(list.agenda);
     };*/

   


    return(
    <React.Fragment>
    <div className="main_wrapper">

    <div className="voter_section" style={voterStyle}>
        {
            lists.map((list)=>(
                <div key={list.id}>
                    <img src='Person.png'></img>
                    <h1>{list.name}</h1>
                    <button onClick={()=>{
                        setAgenda(list.agenda);
                        setVoterstyle({opacity:0.2});
                        setAgendaStyle({display:1});
                    }}
                    >View agenda</button>
                </div>
            ))
        }
        
    </div>

    {agenda && <Agenda agenda={agenda} agendaStyle={agendaStyle}/>}
    </div>


    </React.Fragment>)
}
export default Abc; 