import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = ( newCategory )=>{
        if(categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories ] );
        //console.log( newCategory)
    }

    return (
      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory
          //setCategories= { setCategories}
          onNewCategory={(value) => onAddCategory(value)}
        />
        {/* listado de gif */}

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </>
    );
}
