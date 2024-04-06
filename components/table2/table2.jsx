import React from 'react';
import './table2.css'
const Table2 = ({data}) => {
    const { recipe_id, recipe_name, preparing_time, calories } = data;
    return (
        <div className="recipe">
     
      <div className="" id="c">
    
        <h1>{recipe_name}</h1>
        <h1>{preparing_time}</h1>
        <h1>{calories}</h1>
        
      </div>
    
</div>
        
    );
}

export default Table2;
