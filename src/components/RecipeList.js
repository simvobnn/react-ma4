import React, {useState, useEffect} from "react";
import {BASE_URL} from "../constants/api";
import SearchRecipe from "./SearchRecipe";
import RecipeItem from "./RecipeItem";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                console.log(json.results);
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error))
    }, []);

    const filterRecipes = function(input) {
        const searchInput = input.target.value.toLowerCase();
        const filteredResult = recipes.filter(function(recipe) {
            const lowerCaseRecipe = recipe.title.toLowerCase();
            if (lowerCaseRecipe.startsWith(searchInput)) {
                return true;
            } return false;
        });
        setFilteredRecipes(filteredResult);
    };
    return (
        <>
            <SearchRecipe handleSearch={filterRecipes}/>
            <div>
                {filteredRecipes.map(recipe => {
                    const {title, thumbnail} = recipe;

                    return (
                        <div key={title}>
                            <RecipeItem title={title} thumbnail={thumbnail} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default RecipeList;