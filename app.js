const heading = React.createElement('h1', {id : "heading", class: "head"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


const parent = React.createElement("div", {id: "parent"},
[React.createElement("div", {id: "child"}, 
[React.createElement("h1", {class: "head"}, "I am a H1 tag"), 
React.createElement("h2", {}, "I am a H2 tag")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {class: "head"}, "I am a H1 tag"), 
React.createElement("h2", {}, "I am a H2 tag")])],
React.createElement("datatable")
);

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(parent);