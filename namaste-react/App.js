{/* 
    CREATING A NESTED REACT ELEMENT
<div id="parent">
<div id="child">
<h1>Im a H1 tag</h1>
</div>
</div> */}


const h1Family = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', {
    id: 'heading'
}, 'Im the H1 tag')));

console.log(h1Family); //returns object and not html tag

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1Family);