const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partName = {props.part1} partExNum = {props.exercises1}/>
      <Part partName = {props.part2} partExNum = {props.exercises2}/>
      <Part partName = {props.part3} partExNum = {props.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.partExNum}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
      />
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;