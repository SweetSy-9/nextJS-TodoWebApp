
import { usePathname } from "next/navigation"

const Header = () => {

    const pathName = usePathname()
    const currentPath = pathName.slice(1).charAt(0).toUpperCase() + pathName.slice(2);
    const slash = '//'

    return(
        <div className="flex justify-center items-center w-full h-64 bg-[rgba(0,0,0,.4)] bg-[url('/images/header/bg.jpg')] bg-center bg-no-repeat bg-cover bg-blend-darken">
            <h2 className="font-semibold text-2xl"><a href="/" className="text-gray-400 hover:text-gray-50 global-transition">Home</a> {slash} <a href={pathName}>{currentPath}</a></h2>
        </div>
    )
}

export default Header