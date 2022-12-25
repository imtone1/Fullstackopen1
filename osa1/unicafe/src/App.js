import { useState } from 'react'

const Button=({handleClick, text})=>{
return(
  <>
  <button onClick={handleClick}>{text}</button>
  </>
)
}

const StatisticLine=({value, text})=>{
return(
  <>
  <p>{text} {value}</p>
  </>
)
}
const Statistics=({good, neutral, bad})=>{
  
  let all=good+neutral+bad
  let neutralAverage=0
  let badAverage=bad*-1
  let average=(good+neutralAverage+badAverage)/all
  let positive=(good/all)*100 + " %"
if(all===0){
  return(
    <>
    <h2>statistics</h2>
    <p>No feedback given</p>
    </>
  )
}
  return(
   
  <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value={average}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>  
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
const [feedback, setFeedback]=useState({
  good:0, neutral:0,bad:0
})
const goodClick=()=>{
setFeedback({...feedback, good:feedback.good+1})

}
const neutralClick=()=>{
  setFeedback({...feedback, neutral:feedback.neutral+1})
  }
const badClick=()=>{
  setFeedback({...feedback, bad:feedback.bad+1})
  }

  return (
    <div>
      <h2>give feedback</h2>

    <Button handleClick={goodClick} text='good'/>
    <Button handleClick={neutralClick} text='neutral'/>
    <Button handleClick={badClick} text='bad'/>
    
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>
      
    </div>
  )
}

export default App