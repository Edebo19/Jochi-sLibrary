import React, { useState } from "react";
import "../CSS/Card.css";
import Card from "./Card";
import { CgClose } from "react-icons/cg";
import { Poems } from "../../poems";
import { poempicked } from "../../Global/Slice";
import { useSelector } from "react-redux";

const CardBody = ({setHome}) => {
    const {chosenPoem} = useSelector((state)=> state.Todolist)
    console.log(chosenPoem)

    const [openPoem, setOpenPoem] = useState(false)



  return (
    <div className="CardBody">
      <div className="CardBodyWrapper">
        <div className="CardbodyHeader">
          <i>Discover your new favorite poems...</i>
          <button onClick={()=>setHome(true)}>Back to home</button>
        </div>
        <div className="MainCardBody">
          {
            Poems.map((e, i)=>(
                <Card key={i} poem={e} setOpenPoem={setOpenPoem} openPoem={openPoem} />
            ))
          }
        </div>
      </div>
      {
        openPoem ? 
        <div className="displayPoem">
        <div className="close"><CgClose size={25} color="white" cursor= "pointer" onClick={()=>setOpenPoem(!openPoem)}/> </div>
        <div className="poemHolder">
            <div className="poemHeader">
                <p><strong>Title:</strong> {chosenPoem.Title}</p>
            </div>
            <div className="poemBody">
                {chosenPoem.Content}
            </div>
            <div className="poemFooter">
                <p>Penned by: <i>JochiWrites</i></p>
            </div>
        </div>
      </div> : null
      }
    </div>
  );
};

export default CardBody;
