import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import BodyComponent from './Component/BodyComponent';
import Aboutty from './Component/About'
import ContactUs from './Component/Contact'
import Errror from './Component/Errorc'
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';

const resObj = {}

const AppComponent = () => {
    return <div className="app">
        <Header />
        <Outlet />
    </div>
};
const appR = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent />,
        children: [
             {
                      index: true,
                element: <BodyComponent />,
            
            },
            {
                path: 'about',
                element: <Aboutty />,
               
            }, 
            {
                path: 'ContactUs',
                element: <ContactUs />,
            },
            {
                path:'*',
                element:<Errror/>
            }
            ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appR} />)