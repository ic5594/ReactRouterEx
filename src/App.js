import { createBrowserRouter, 
  // Route,  
  RouterProvider,
  // createRoutesFromElements 
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from './pages/Error'
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      { index:true,  element: <HomePage />},
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage/>}
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
