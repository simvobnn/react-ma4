import React from "react";
import PropTypes from "prop-types";

function RecipeItem({title, thumbnail}) {
    return (
        <div>
            <img src={thumbnail} alt="123"/>
            <h1>{title}</h1>
        </div>
    )
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.node.isRequired
};

export default RecipeItem;