
const Header = (props) => {
    console.log("header",props.course)
    return (
      <div>
        <h2>{props.course}</h2>
      </div>
    )
  }

  export default Header