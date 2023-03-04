import "./styles.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDogImage } from "./Redux/Actions/dogAction";
import { fetchQuote } from "./Redux/Actions/quoteAction";

const App = () => {
  const dogData = useSelector((state) => state.dog);
  const quoteData = useSelector((state) => state.quote);
  console.log("data...", dogData, quoteData);
  console.log("data22", JSON.parse(JSON.stringify(quoteData)));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogImage());
    dispatch(fetchQuote());
    // console.log("quoteData", quoteData);
  }, [quoteData]);

  return (
    <div className={App}>
      <img src={dogData.url} alt="dog" width="700px" />
      <h2>{dogData.breeds[4]}</h2>
      <p>{quoteData.quote}</p>
      <p>{quoteData.role}</p>
    </div>
  );
};
export default App;
