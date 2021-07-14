
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const addFavorite = (payload) => {
  return ({type: ADD_FAVORITE, payload});
}

export const removeFavorite = (id) => {
  return ({type: REMOVE_FAVORITE, payload: id});
}

export const toggleFavorites = (payload) => {
  return ({type: TOGGLE_FAVORITES, payload})
}