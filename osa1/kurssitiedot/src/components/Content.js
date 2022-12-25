import Part from './Part'

const Content = ({parts}) => {
   console.log("content parts", parts)
    return (
      <div>
       {parts.map(x=>
        <Part key={x.id} part={x}/>
        
       )}
  
      </div>
    )
  }

  export default Content