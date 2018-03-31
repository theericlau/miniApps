import React from 'react';
import Step from './Step.jsx';

const Test = (props) => {
  const tests = props.data.find(({ test_name }) => test_name === props.match.params.testName);
  const { test_name, test_steps, status } = tests;

  return (
    <div>
      <h1>{test_name}</h1>
      <span>{status}</span>
      <div>
      {test_steps.map((step, index) => {
        return <Step key={index} step={step} {...props}/>
        })
      }
      </div>
    </div>
  );
};

export default Test;