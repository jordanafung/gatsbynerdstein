import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, recipeImg, recipeSlug}) => (
  <div class="recipe-teaser">
    <Img fixed={recipeImg} />
    <Link to={recipeSlug} className="recipe-teaser-title-link">
      <h2 class="recipe-teaser-title">{recipeTitle}</h2>
    </Link>
    <p class="recipe-teaser-date">{recipeDate}</p>
    <p class="recipe-teaser-summary">{recipeSummary}</p>
  </div>
)

export default RecipeTeaser

