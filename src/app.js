import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import HeaderLayout from "./components/HeaderLayout";
import FootLayout from "./components/FootLayout";
import BodyLayout from "./components/BodyLayout";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/retroMenuCard";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

/* const heading = React.createElement('h1', {id : "heading", class: "head"}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const parent = React.createElement("div", {id: "parent"},
[React.createElement("div", {id: "child"}, 
[React.createElement("h1", {class: "head"}, "I am a H1 tag "), 
React.createElement("h2", {}, "I am a H2 tag")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {class: "head"}, "I am a H1 tag"), 
React.createElement("h2", {}, "I am a H2 tag")])],
React.createElement("datatable")
);

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(parent); */

//const heading = React.createElement("h1", { id: "heading"}, "Namaste React 🚀 By Akshay Saini");

//****************episode 3***********************************************************8
/* const jsxHeading = <h1 id="heading">Namaste React 🚀 By Akshay Saini</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = ()=> (
    <h1>My First Title - Namaste React 🚀 By Akshay Saini</h1>
);

const Title2 = ()=> {
   return <h1>My second Title</h1>
};
const JsxComponent = () => (
    <div>
        {jsxHeading}
        {console.log("Priya")}
        {Title()}
        <Title2 />
        <h1>This is JSX Component, My First functional Component 😍</h1>
    </div>
); */

//******************************************************************************************** */

const Grossery= lazy(()=>import("./components/Grossery"));

const About= lazy(()=> import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = ()=> {
    const [userName, setUserName] = useState();

    useEffect(()=>{
       // AuthenticatorResponse
      const data = {
            name : "Priya Shelke"
        }
        setUserName(data.name);
    })
    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser :userName}}>
        <div className="app">
           <UserContext.Provider value = {{loggedInUser :"Elon Musk", setUserName}}>
                <HeaderLayout/>
            </UserContext.Provider> 
            <Outlet/>
         {/*    <BodyLayout/> */}
           {/* <FootLayout/> */}
        </div>
        </UserContext.Provider>
        </Provider>
        
        // <UserContext.Provider value = {{loggedInUser :userName, setUserName}}>
        // <div className="app">
        //         <HeaderLayout/>
          
        //     <Outlet/>
        //  {/*    <BodyLayout/> */}
        //    {/* <FootLayout/> */}
        // </div>
        // </UserContext.Provider>
       
    )
}

const appRoute = createBrowserRouter([
    {
       path: '/',
       element: <AppLayout/>,
       children: [
        {
            path: '/',
            element: <BodyLayout/>
        },
        {
            path: '/about',
            element: <Suspense fallback={<>Loading</>}><About/></Suspense>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/gorssery',
            element: <Suspense fallback={
                <>Loading</>
            }><Grossery/></Suspense> 
        },
        {
            path: '/restaurant/:resId',
            element: <RestroMenu/>
        },
        {
            path: '/cart',
            element: <Cart/>
        }
       ],
       errorElement: <Error/>
    },
  
])




root.render(<RouterProvider router={appRoute}/>);