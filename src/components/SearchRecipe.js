import React from "react";
import PropTypes from "prop-types";

export default function SearchRecipe({handleSearch}) {
    return (
        <div>
            <input placeholder="Filter recipes.." onChange={event => handleSearch(event)}/>
        </div>
    );
}

SearchRecipe.propTypes = {
    handleSearch: PropTypes.func.isRequired
};