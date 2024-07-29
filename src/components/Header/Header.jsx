import { Link, NavLink } from "react-router-dom"


const activeStyles = " text-zinc-800 ";
const inactiveStyles = "text-white";
export const Header = ()=>{
 
    return (
        <header   className="flex   items-center px-10  h-20 bg-gradient-to-r from-indigo-500 to-blue-500 lg:justify-between font-medium">

       <h1 className="font-bold text-white text-xl">Data storage</h1>
        
         <nav  className="flex flex-col  gap-14 lg:flex-row" >
            <NavLink  to={"/"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
                Pagina inicial
            </NavLink>
            <NavLink  to={"/login"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
              Login
            </NavLink>
            <NavLink  to={"/signup"} className={({isActive })=>`${isActive? activeStyles : inactiveStyles}`}
            >
             Signup
            </NavLink>
         </nav>
        </header>
    )
}