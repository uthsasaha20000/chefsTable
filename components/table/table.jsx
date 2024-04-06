
import React from 'react';
import './table.css';
 
const Table = ({ cook ,remove}) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cook;
    return (
        <div className="recipe">
     
      <div className="" id="b">
    
        <h1>{recipe_name}</h1>
        <h1>{preparing_time}</h1>
        <h1>{calories}</h1>
        
        <button className="btn  btn-sm btn-success item-center  w-full" onClick={()=>remove(cook)}>preparing</button>
      </div>
    
</div>
        
    );
}

export default Table;