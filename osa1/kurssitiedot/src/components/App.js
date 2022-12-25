import Course from './Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
// console.log(course.parts[0].part)
console.log("app.js kurssi", course)
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}
export default App