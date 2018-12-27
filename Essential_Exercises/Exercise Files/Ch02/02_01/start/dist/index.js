const { render } = ReactDOM

/*
const style = {
    backgroundColor: "orange",
    color: "white",
    fontFamily: "verdana"
}
*/

/*
const title = createElement(
    'h1',
    {id: 'title',
    className: 'header',
    style: style
    },
    'Hello world'
)
*/

render(
    <h1 id="title" className="header" style = {{ backgroundColor: "orange", color: "white", fontFamily:"verdana"}}>
        Hello world
    </h1>,
    document.getElementById("react-container")
)