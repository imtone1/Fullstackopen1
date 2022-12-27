import '../index.css'

const ErrorMessage = ({message, kind}) => {
    if (message===null){
        return null
    }

    if (kind==="error"){
        return(<div className="error">
            {message}
        </div>)
    }
    else
    {
        return(<div className="success">
        {message}
    </div>)
    }
}

export default ErrorMessage