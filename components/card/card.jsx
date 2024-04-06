import React, { useEffect, useState } from 'react';
import './card.css';
import Box from '../box/box';
import Table from '../table/table';
import Table2 from '../table2/table2';

const Card = () => {
    const [cook, setCook] = useState([]);
    const [updated, setUpdated] = useState([]);
    const [card, setCard] = useState([]);
    const [count, setCount] = useState(0);
    const [calories,setCal]=useState(0)

    useEffect(() => {
        fetch('/recipes.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, []);

    const cooking = item => {
        const { recipe_id } = item;
        const newCook = [...cook, item];
        setCook(newCook);
    }
    function remove(obj){
        console.log(obj);
        setUpdated([...updated,obj]);
        const id=obj.recipe_id;
        setCount(count + parseInt(obj.preparing_time, 10));
        setCal(count + parseInt(obj.calories, 10));
        

        const updatedItems = cook.filter(item => item.recipe_id !== id);
       
        setCook(updatedItems);
       
    }

    return (
        <div className='container'>
            <div className='card-section'>
                {card.map((box, index) => 
                    <Box key={index} box={box} cooking={cooking} />
                )}
            </div>
            
            <div className='side-top'>
                <h1>Want to cook <span style={{ backgroundColor: 'green', color: 'white',padding:'6px'}}>{cook.length}</span></h1>
 
      <div id="a">
        
        <h1>Name</h1>
        <h1>Time</h1>
        <h1>Calories</h1>
      </div>
   

                {cook.map((item, index) => (
                    <Table key={index} cook={item} remove={remove}/>
                ))}
               <hr ></hr>
            
               <div className="side-down">
               <h1>Currently cooking <span style={{ backgroundColor: 'green', color: 'white',padding:'4px'}}>{updated.length}</span></h1>
            {updated.map((item, index) => (
            <Table2 key={index} data={item}></Table2>
))}
<hr></hr>
<div>
<h1> Total time={count}  </h1>   
<h1>Total Calories={calories}</h1>
</div>
            </div>
            </div>
           
         
    
     
        </div>
    );
}

export default Card;
