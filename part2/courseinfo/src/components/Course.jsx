const Header = ({ courseName }) => <h2>{courseName}</h2>;

const Total = ({ parts }) => {
  const total = parts.reduce((prev, next) => prev + next.exercises, 0);
  return <h4>Number of exercises {total}</h4>;
};

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>;
};

const Content = ({ parts }) => {
  return (
    <div>
      { parts.map(part => <Part key={part.id} part={part} />) }
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
