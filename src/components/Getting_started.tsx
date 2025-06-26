import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';


export default () => {

    const instr: string[] = [
        'npm create vite@latest, name project and create react project and type',
        'cd project_name and npm i',
        'for tailwind npm install tailwindcss @tailwindcss/vite ',
        "import tailwindcss from '@tailwindcss/vite' in vite.config.ts file",
        'insert tailwindcss() in plugins of vite.config.ts file ',
        'keep @import "tailwindcss"; in main index.html file or main style file',
        'for scss files to work npm i -D sass',
        'for react router to work npm i react-router',
        'go to main.tsx wrap around browser-router with routes and route with path and element this is a declarative mode of react router',
        'set routes and route in it with path and element'

    ];

    const copyList: string[] = [
        'npm create vite@latest',
        'cd testing && npm i',
        'npm install tailwindcss @tailwindcss/vite',
        "import tailwindcss from '@tailwindcss/vite'",
        'tailwindcss()',
        '@import "tailwindcss";',
        'npm i -D sass',
        'npm i react-router'
    ]

    const copyText = (data: string) => {
        navigator.clipboard.writeText(data);
    }

    const [check, setCheck] = useState(Array(instr.length).fill(false));
    const [ind, setInd] = useState(0);

    const renderList = instr.map((item: string, index: number) => (
        <div className="flex" key={item}>
            <input type="checkbox" checked={check[index]}
                onChange={() => checkerEvent(index)} />
            <li className={`pl-4 ${(check[index - 1] || index < 1) ? 'text-black' : 'text-gray-500'}`}>
                {index + 1 + '. ' + item}
                {(copyList[index] && ind === index) && <button className="mx-4 px-2 text-white
                    bg-blue-500 rounded hover:bg-blue-700 
                    hover:text-blue-900 transition 
                    cursor-pointer active:text-white" onClick={() => copyText(copyList[index])}>
                    <FontAwesomeIcon icon={faClone} />
                </button>}
            </li>

        </div>
    ))

    const checkerEvent = (index: number) => {

        if (index > 0 && (!check[index - 1] && !check[index + 1])) return

        if (!check[index + 1]) {
            setCheck((prv: boolean[]) =>
                prv.map((item: boolean, ind: number) => ind === index ? !item : item))

            check[index] ? setInd(index) : setInd(index + 1)
        }
    }

    return (
        <>
            <h1 className="text-2xl font-extrabold">To Get Started</h1>
            <ol className="p-8">
                {renderList}
            </ol >
            {
                check.every((item: boolean) => item) &&
                <div>
                    Completed you have successfully setup React project
                </div>
            }
        </>
    )

}