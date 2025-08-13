import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
import RecipeItem from '../../components/recipe-item';

function Favourites() {
  const { favouritesList} = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div><p className="lg:text-4xl text-xl text-center text-black font-extrabold">
        Nothing is added favourites.
      </p></div>
      )}
    </div>
  );
}

export default Favourites