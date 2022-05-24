import React from "react";
import { connect } from "react-redux"

import { Link } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const { favorites, deleteFavorite } = props

  const handleRemoveFavorite = (id) => {
    deleteFavorite(id)
  }

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span 
                  className="material-icons"
                  onClick={() => handleRemoveFavorite(movie.id)}
                >remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

/* [ ] Connect the favorites state to the FavoriteMovieList component and test.
*/

const mapStateToProps = ({ favorites }) => {
  return {
    favorites: favorites.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   deleteFavorite: payload => dispatch(removeFavorite(payload))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);
