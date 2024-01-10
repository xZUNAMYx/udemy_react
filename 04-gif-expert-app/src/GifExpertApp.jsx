import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (newCategory )=>{
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]); // una forma de hacerlo
        // setCategories( (category)=>[...category, 'One Piece']); // Otra forma de hacerlo
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {categories.map( (category)=>
                (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />        
                )
            )}
        </>   
    );
}
