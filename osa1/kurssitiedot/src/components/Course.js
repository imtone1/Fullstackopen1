import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    console.log("course moduulissa",props.course.parts)
    return (
      <div>
       
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
     <Total parts={props.course.parts}/>
  
      </div>
    )
  }

  export default Course