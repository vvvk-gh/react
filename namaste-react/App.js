{/* 
    CREATING A NESTED REACT ELEMENT
<div id="parent">
    <div id="child">
        <h1>Im a h1 tag</h1>
        <h2>Im a h2 tag</h2>
    </div>
</div> */}


const h1Family = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child" },
        [
            React.createElement('h1', { id: 'heading' }, 'Im h1 tag'),
            React.createElement('h2', { id: 'heading2' }, 'Im h2 tag ')
        ]
    )
);

console.log(h1Family); //returns object and not html tag

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1Family);