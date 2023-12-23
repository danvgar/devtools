let tags = ["stream", "search", "AI"]

let links = [
    {
        id: 1,
        title: "Google",
        url: "https://www.google.com/",
        description: "description",
    },
    {
        id: 2,
        title: "ChatGPT",
        url: "https://chat.openai.com/",
        description: "description",
    },
    {
        id: 3,
        title: "YouTube",
        url: "https://www.youtube.com/",
        description: "description",
    },

]


// function Tag({ tagName }) {
//     return <button>{tagName}</button>
// }


// function Link({ linkIndex }) {
//     return <li>{links[linkIndex].title}</li>
// }

function mapTags(item) {
    return <button key={item}>
        {item.toLowerCase()}
    </button>;
}

function AppTags() {
    return <>
        {tags.map(mapTags)}
    </>
}


function AppLinks() {
    return <>
        <ul>
            {links.map(obj => (
                <li key={obj.id}>{obj.title}</li>
            ))}
        </ul>
    </>
}

ReactDOM.render(<AppTags />, document.getElementById("app-tags"))

ReactDOM.render(<AppLinks />, document.getElementById("app-links"))
