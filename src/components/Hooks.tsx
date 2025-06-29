export default () => {

    const hooksInfo = [
        {
            hookName: "useState",
            purpose: "to store state in functional components",
            usage: `
            const[ state, setState ] = useState(initialValue);
        
            to access: 
            state
            
            to change:
            setState(value);
            (or)
            setState(prv => fn(prv))
            `
        },
        {
            hookName: "useEffect",
            purpose: "to detect changes in component rerender changes in it",
            usage: `
            useEffect( ( ) => { 
                func()      // mostly for api, interactions and settings 
                },
                [ dependent_variables ]      // if empty renders everytime    
            )
            `
        },
        {
            hookName: "useContext",
            purpose: "to transfer data from components to another seamlessly without parent child relation",
            usage: `
                learning
            `
        }
    ]

    const referLink = "https://react.dev/reference/react/hooks";

    return (
        <>
            <p>for detailed reading refer : &nbsp;
                <a href={referLink} className="hover:text-blue-900 underline 
                hover:bg-blue-700 hover:text-white px-4 py-1 rounded" target="_blank">
                    {referLink}
                </a>
            </p>
            <div className="text-lg font-bold">
                React Hooks learned and neccessary sa far right now
            </div>
            {
                hooksInfo.map((item: any, index: number) => (
                    <div className="border-2 p-4 rounded" key={item.hookName}>
                        <div className="text-md font-bold">{`${index + 1}. ${item.hookName}`}</div>
                        <div className="pl-4">{item.purpose}</div>
                        <pre> {item.usage.split('\n').map((line: any, i: number) => (
                            <div key={i}>{line}</div>
                        ))}</pre>
                    </div>
                ))
            }
        </>
    )

}