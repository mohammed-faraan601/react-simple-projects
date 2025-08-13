import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      console.log(data);

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }
    } catch (e) {
      setLoading(false);
      setSearchParam("");
      console.log(e);
    }
  }

  function handleAddToFavourites(getCurrentItem) {
    const cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1 ) {
      cpyFavouritesList.push(getCurrentItem);
    } else {
      cpyFavouritesList.splice(index, 1);
    }

    setFavouritesList(cpyFavouritesList);
  }

  console.log(favouritesList);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        recipeList,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavourites,
        favouritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
