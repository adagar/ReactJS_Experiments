const { createElement } = React
const { render } = ReactDOM


const title = createElement(
    'h1',
    {id: 'title',
    className: 'header',
    },
    'Hello world'
)

render(
    title,
    document.getElementById("react-container")
)