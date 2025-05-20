/*const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

const Parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h12", {}, "I am h2 Tag")]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h12", {}, "I am h2 Tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);