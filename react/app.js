const parent=React.createElement("div", { id : "parent"},[
React.createElement("div",{id: "child1"},[
React.createElement("h1", {id:"79"} , "this is first h1"),
React.createElement("h2",{id:"89"},"this this h2")]),
React.createElement("div",{id: "5757"},[
    React.createElement("h1", {id:"8565"} , "this 1"),
    React.createElement("h2",{id:"7890"},"this  h2")])]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 