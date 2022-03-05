import React, { useEffect, useState, useRef } from "react";
import "../index";

export default function Meal() {
  const userInput = useRef();
  const [input, setInput] = useState(false);
  const [search, setSearch] = useState(".");
  const [mealContainer, setMealContainer] = useState("");
  const [mealVisible, setMealVisible] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPending(false);
        const mealData = data.meals;
        setMealContainer(mealData);
      });
  }, [search]);

  function updateSearch() {
    function searchUpadate() {
      setSearch(userInput.current.value);
    }
    searchUpadate();
  }
  

  return (
    <>
   
    <div className="header">
        <div className="head">MealFinder</div>   
      <input
        className="input"
        placeholder="Type food name"
        type="text"
        ref={userInput}
      />

      <button
        className="button"
        onClick={() => {
          setInput(true);
          userInput.current.focus();

          updateSearch();
          setMealVisible([]);
        }}
      >
        Search
      </button>
      </div>
  
      {pending ? <div>Please wait...</div> : ""}
      {input && !mealContainer && !pending ? (
        <div>This dish is not available, Please try another</div>
      ) : (
        ""
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          justifyContent: "center"
        }}
      >
        {mealContainer
          ? mealContainer.map((list) => {
              return (
                <>
                  <img
                    className="images"
                    onClick={() => {
                      setMealVisible([list]);
                    }}
                    src={list.strMealThumb}
                    height={150}
                    alt="meal-images"
                  />
                  <span onClick={() => {
                      setMealVisible([list]);
                    }} id="imageName">{list.strMeal}</span>
                </>
              );
            })
          : ""}
      </div>
      {mealVisible.map((list) => {
        return (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "auto",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h1>{list.strMeal}</h1>
              <div>
                <img
                  style={{ marginLeft: "" }}
                  src={list.strMealThumb}
                  height={150}
                  alt=""
                />
              </div>

              <span
                style={{
                  border: "2px dashed yellow",
                  background: "orange",
                  borderRadius: "5px",
                  margin: "20px"
                }}
              >
                <h3>{list.strCategory}</h3>
                <h3>{list.strArea}</h3>
              </span>
            </div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              {list.strInstructions}
            </div>
            <h2>Ingredients</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                justifyContent: "center",
                marginLeft: "20%",
                marginRight: "20%"
              }}
            >
              <span>
                {list.strIngredient1}
                {list.strMeasure1}
              </span>
              <span>
                {list.strIngredient2}
                {list.strMeasure2}
              </span>
              <span>
                {list.strIngredient3}
                {list.strMeasure3}
              </span>
              <span>
                {list.strIngredient4}
                {list.strMeasure4}
              </span>
              <span>
                {list.strIngredient5}
                {list.strMeasure5}
              </span>
              <span>
                {list.strIngredient6}
                {list.strMeasure6}
              </span>
              <span>
                {list.strIngredient7}
                {list.strMeasure7}
              </span>
              <span>
                {list.strIngredient8}
                {list.strMeasure8}
              </span>
              <span>
                {list.strIngredient9}
                {list.strMeasure9}
              </span>
              <span>
                {list.strIngredient10}
                {list.strMeasure10}
              </span>
              <span>
                {list.strIngredient11}
                {list.strMeasure11}
              </span>
              <span>
                {list.strIngredient12}
                {list.strMeasure12}
              </span>
              <span>
                {list.strIngredient13}
                {list.strMeasure13}
              </span>
              <span>
                {list.strIngredient14}
                {list.strMeasure14}
              </span>
              <span>
                {list.strIngredient15}
                {list.strMeasure15}
              </span>
              <span>
                {list.strIngredient16}
                {list.strMeasure16}
              </span>
              <span>
                {list.strIngredient17}
                {list.strMeasure17}
              </span>
              <span>
                {list.strIngredient18}
                {list.strMeasure18}
              </span>
              <span>
                {list.strIngredient19}
                {list.strMeasure19}
              </span>
              <span>
                {list.strIngredient20}
                {list.strMeasure20}
              </span>
            </div>
          </>
        );
      })}
    </>
  );
}
