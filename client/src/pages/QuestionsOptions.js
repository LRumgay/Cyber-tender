import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { Button } from "@mui/material";
import { QUERY_QUESTIONS } from "../utils/queries";
import { GET_OPTIONS } from "../utils/mutations";

const QuestionsOptions = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questions, setQuestions] = useState([]);
  const [questionOptions, setQuestionOptions] = useState([]);
  const [chooseOptions, setChosenOptions] = useState([]);
  const [results, setResults] = useState([]);

  const { loading, data: dataQuestions = {} } = useQuery(QUERY_QUESTIONS);

  const [getOptions, { data: dataOptions = {} }] = useMutation(GET_OPTIONS);

  useEffect(() => {
    if (dataQuestions.questions) {
      setQuestions(dataQuestions.questions);
      setCurrentQuestion(dataQuestions.questions[0]);

      getOptions({
        variables: {
          selectedOptions: [],
          nextKey: dataQuestions.questions[0]?.key,
        },
      });
    }
    // call API options
  }, [dataQuestions.questions]);

  useEffect(() => {
    if (dataOptions.getOptions) {
      const { data, options } = dataOptions.getOptions;
      console.log(data, options);
      setResults(data);
      setQuestionOptions(options);
    }
  }, [dataOptions]);

  const onClickOption = (optionChosen) => {
    const currentQuestionIndex = questions.findIndex(
      (q) => currentQuestion.question === q.question
    );
    const nextQuestion = questions[currentQuestionIndex + 1];

    getOptions({
      variables: {
        selectedOptions: [
          ...chooseOptions,
          { key: currentQuestion.key, value: optionChosen },
        ],
        nextKey: nextQuestion?.key,
      },
    });

    setChosenOptions((prev) => [
      ...prev,
      { key: currentQuestion.key, value: optionChosen },
    ]);

    setCurrentQuestion(nextQuestion || {});
  };
  console.log({ results });
  
  return (
  <>
          <div class="container">
        <div class="col s12 m8 l9 center">
            <h1>
            {currentQuestion?.question}
            </h1>
        </div>
        <div className="row">
          <div className="col s12 center">
          <a href="#contact">
          {questionOptions?.map((opt) => (
            <Button class="btn btn-large waves-effect grey darken-3 light-green-text" onClick={() => onClickOption(opt)}>{opt}</Button>
          ))}
              </a>
          </div>
        </div>
        


        {!currentQuestion.question && results.map((result) => (
          <>
        <div className="container">
    <div class="row">
    <div class="col s6 offset-s3">
      <div class="card center">
        <h3>{result.name}</h3>
        <div class="card-image s6">
          <img src={result.image}/>
          <span class="card-title responsive-img"></span>
        </div>
        <div class="card-content">
        <ul>{result.ingredients.map((result) => (
          <ul>{result}</ul>
        ))}</ul>
        <ul>DIRECTIONS: <br></br>  {result.directions}</ul>
        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div>
  </div>
        <ul> </ul>
        
        </>
      ))}
      </div>
    
    
  </>
  );
};

export default QuestionsOptions;
