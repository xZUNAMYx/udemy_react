import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Luffy']);
    console.log(categories);

    const onAddCategory = ()=>{
        setCategories([...categories, 'One Piece']); // una forma de hacerlo
        // setCategories( (category)=>[...category, 'One Piece']); // Otra forma de hacerlo
    }

    return (
        <>
            {/* // Título */}
            <h1>GifExpertApp</h1>

            {/* // Input */}

            {/* // Listado de Gif */}
            <button onClick={(event)=>onAddCategory(event)}>Agregar</button>
            <ol>
                {categories.map( (category)=>{
                    return <li key={category}>{category}</li>
                })}
            </ol>
                {/* // Git Item */}
        </>
        
           
    );
}
