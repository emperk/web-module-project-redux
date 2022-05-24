import movies from '../data'
import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions'

const initialState = {
  favorites: [],
  displayFavorites: false,
}

const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      case REMOVE_FAVORITE:
        return {
          favorites: state.favorites.filter((item) => +action.payload !== +item.id)
        }
      case TOGGLE_FAVORITES:
          return {
            ...state,
            displayFavorites: action.payload 
          }
    default:
      return state
  }
}

export default favoritesReducer;