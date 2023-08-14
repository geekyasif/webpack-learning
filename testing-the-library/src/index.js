import React from "react"
import ReactDom from "react-dom"
import Button from "../../geekscss/dist/button"
import Alert from "../../geekscss/dist/alert"


const App = () => {
    return (
        <div>
            <Button text="Click me"/>
            <Button text="Click me"/>
            <Button text="Click me"/>
            <Alert message="Hey this is an alert!"/>
            <Alert message="Hey this is an alert!"/>
            <Alert message="Hey this is an alert!"/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))