import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

function Details() {
  const { id } = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavourites,
    favouritesList,
  } = useContext(GlobalContext);

  async function getRecipeDetails() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();

    if (data?.data) {
      setRecipeDetails(data?.data);
    }
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="recipe-image"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300 "
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourites(recipeDetails?.recipe)}
            className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favourites"
              : "Add to favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingrediants:
          </span>
          <ul className="flex flex-col gap-2">
            {recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}{" "}
                </span>
                <span className="text-xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
