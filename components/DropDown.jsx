import { useState } from "react"

const DropDown = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="relative inline-block">
                <button onClick={() => setIsOpen(!isOpen)} className="relative z-10">
                    {children[0]}
                </button>
                <div className={`absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl ${isOpen ? 'block' : 'hidden'}`}>
                    {children[1]}
                </div>
            </div>
        </>
    )
}
export default DropDown
