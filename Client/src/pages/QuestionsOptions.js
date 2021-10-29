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
          nextKey: dataQuestions.questions[0].key,
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
    <div>
      <div className="row">
        <h1>{currentQuestion.question}</h1>
        {questionOptions.map((opt) => (
          <Button onClick={() => onClickOption(opt)}>{opt}</Button>
        ))}
        
        {!currentQuestion.question && results.map((result) => (
          <>
        <ul>{result.name}</ul>
        <ul>{result.ingredients.map((result) => (
          <ul>{result}</ul>
        ))}</ul>
        <ul> </ul>
        <ul>DIRECTIONS: <br></br>  {result.directions}</ul>
        <img alt="" src={result.image}/>
        
        </>
      ))}
      </div>


    </div>
    
    
  </>
  );
};

export default QuestionsOptions;
