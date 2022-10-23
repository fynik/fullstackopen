import { useState } from 'react';

const Title = ( { text } ) => <h1>{text}</h1>;
const Button = ( { func, name } ) => <button onClick={func}>{name}</button>
const StatisticLine = ( { text, score, percent = false} ) => 
  percent? <tr><td>{text}</td><td>{score}%</td></tr> : <tr><td>{text}</td><td>{score}</td></tr>;

const Statistics = ( { good, neutral, bad } ) => {
  const total = good + neutral + bad;

  if (total === 0) return <p>No feedback given</p>;

  const average = total === 0? 0 : ((good - bad) / total).toFixed(2);
  const positive = total === 0? 0 : (100 * good / total).toFixed(1);

  return (
    <table>
      <tbody>
        <StatisticLine text="good" score = {good} />
        <StatisticLine text="neutral" score = {neutral} />
        <StatisticLine text="bad" score = {bad} />
        <StatisticLine text="all" score = {total} />
        <StatisticLine text="average" score = {average} />
        <StatisticLine text="positive" score = {positive} percent = {true}/>
      </tbody>
    </table>
  )
}


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);



  return (
    <>
      <Title text="give feedback"/>

      <div>
        <Button func={goodHandler} name = "good" />
        <Button func={neutralHandler} name = "neutral" />
        <Button func={badHandler} name = "bad" />
      </div>

      <Title text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App;
