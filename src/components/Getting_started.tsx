import { useState } from "react";

export default () => {

    const instr: string[] = [
        'npm create vite@latest',
        'name and create react project_name',
        'cd project_name and npm i',
        'for tailwind npm install tailwindcss @tailwindcss/vite ',
        'import tailwind() in plugins of vite.config.ts file',
        'keep @import "tailwindcss"; in main index.html file or main style file',
        'for scss files to work npm i -D sass',
        'for react router to work npm i react-router',
        'go to main.tsx wrap around browser-router with routes and route with path and element this is a declarative mode of react router'
    ];

    const [check, setCheck] = useState(Array(instr.length).fill(false));

    const renderList = instr.map((item: string, index: number) => (
        <div className="flex" key={item}>
            <input type="checkbox" checked={check[index]}
                onChange={() => checkerEvent(index)} />
            <li className={`pl-4 ${(check[index - 1] || index < 1) ? 'text-black' : 'text-gray-500'}`}>
                {index + 1 + '. ' + item}
            </li>
        </div>
    ))

    const checkerEvent = (index: number) => {

        if (index > 0 && (!check[index - 1] && !check[index + 1])) return

        if (!check[index + 1]) {
            setCheck((prv: boolean[]) =>
                prv.map((item: boolean, ind: number) => ind === index ? !item : item))
        }
    }

    return (
        <>
            <h1 className="text-2xl font-extrabold">To Get Started</h1>
            <ol className="p-8">
                {renderList}
            </ol >
        </>
    )

}