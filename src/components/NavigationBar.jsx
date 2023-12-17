import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <nav className="flex justify-center items-center bg-black">
        <ul className="flex text-white m-auto">
            <li className="text-white">
                <Link className="text-white hover:text-blue-500" to='/'>Home</Link>
                <Link className="text-white hover:text-blue-500" to='/search'>Search</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavigationBar