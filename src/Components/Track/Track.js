import React from "react";
import './Track.css';

function Track(){
   function renderAction(){
        if(props.isRemoval){
          return <button className="Track-action">-</button>

        }
        else{
            return <button className="Track-action">+</button>
        }
    }


    return (
        <div className="Track">
            <div className="Track-information">
              {renderAction()}
            </div>
        </div>
    );
}

export default Track;