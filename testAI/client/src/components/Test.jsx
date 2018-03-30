import React from 'react';
import Step from './Step.jsx';

const Test = (props) => {
  console.log(props,'test');
  const tests = props.data.find(({ test_name }) =>
    // console.log('name', app_name, props.match.params.appName);
    test_name === props.match.params.testName
  );
  // console.log('im the tests', tests);
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
      {/* <Step step={test_steps[0]} /> */}
      </div>
    </div>
  );
};

export default Test;