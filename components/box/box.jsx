

const Box = ({box,cooking}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories}=box;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"><b>{recipe_name}:</b></h2>
    <p>{short_description}</p>
    <hr></hr>
    {ingredients.map((ingredient, index) => (

<li style={{ color: 'green', fontSize: '10px'}} key={index}>{ingredient}</li>


))}
<hr></hr>
<div style={{display:'flex',justifyContent: 'space-between'}}>
    <h1>Time:{preparing_time}</h1>
    <h1>{calories}</h1>
</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>cooking(box)}>Want to cook</button>
    </div>
  </div>
</div> 
        </div>
    );
}

export default Box;
