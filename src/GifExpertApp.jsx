import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Leo Messi']);

    const onAddCategory = (newCategory) => {
        //No usar push por ahora...
        //setCategories(categories.push('Angel Di Maria'))
        if( categories.includes( newCategory ) ) return;
        setCategories( [newCategory, ...categories] );
        //setCategories( cat => [...categories, 'Angel Di Maria'] );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory 
                onNewCategory={(value) => {onAddCategory(value)}}
            />

            {categories.map((category) => {
                return (
                    <GifGrid
                        key={ category } 
                        category={ category }
                    />
                )
            })}
        </>
    )
}