const heading1 = React.createElement('h1', {id:'head1'}, 'JAI MATA DI')
const root = ReactDOM.createRoot(document.getElementById('root'))

const heading2=React.createElement('h2',{id:'head2'},'JAI BABA')

const container = React.createElement(
    'div',
    {},[
    React.createElement('h1',{},'this is sibling'),
    heading1,
    heading2    
    ],
    [
    React.createElement('h1',{},'this is sibling'),
    heading1,
    heading2]
);
root.render(container)
console.log(heading1) // it return an Object
