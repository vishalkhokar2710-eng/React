import ReactDOM from 'react-dom/client'
import Header from './Component/Header'
import BodyComponent from './Component/BodyComponent'
const resObj={}

const AppComponent=()=>{
    return <div className="app">
        <Header/>
        <BodyComponent/>
    </div>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppComponent/>)