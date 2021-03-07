import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ( { handleClick, text } ) => {

  return (

    <button onClick={ handleClick }>
      { text }
    </button>

  );

}

const Statistic = ( { text, value } ) => {

  if ( text === 'positive' ) {

    return (
      
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>

    )

  }

  return (

    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  );

}

const Statistics = ({good, neutral, bad}) => {

  if ( good + neutral + bad === 0) {

    return (

      <div>
        No feedback given
      </div>

    );

  }

  return (

    <table>
      <Statistic text="good" value={ good } />
      <Statistic text="neutral" value={ neutral } />
      <Statistic text="bad" value={ bad } />
      <Statistic text="all" value={ good + neutral + bad } />
      <Statistic text="average" value={ ( good - bad ) / ( good + neutral + bad ) } />
      <Statistic text="positive" value={ ( good ) / ( good + neutral + bad ) * 100 } />
    </table>

  );

}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood( good + 1 );
  const increaseNeutral = () => setNeutral( neutral + 1 );
  const increaseBad = () => setBad ( bad + 1 );

  return (

    <div>
      <h2>give feedback</h2>
      <Button handleClick={ increaseGood } text="good" />
      <Button handleClick={ increaseNeutral } text="neutral" />
      <Button handleClick={ increaseBad } text="bad" />
      <h2>statistics</h2>
      <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </div>

  );

}

ReactDOM.render(

  <App />,
  document.getElementById('root')

);
