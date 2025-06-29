import { Link } from "react-router"

export default () => {

    return (
        <>
            <div className="grid justify-center mt-16">
                <p className="text-lg font-bold">No Page Found</p>
                <Link to={"/"} className="flex justify-center">
                    <button className="p-4 bg-blue-100 
                    hover:bg-blue-500 hover:text-white
                     cursor-pointer transition
                     rounded text-md font-bold">Go Back</button>
                </Link>
            </div>
        </>
    )

}