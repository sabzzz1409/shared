import Parent from "../tests/Parent"

export default () => {

    return (
        <>
            <h1 className="text-xl font-bold">Props and State</h1>

            <p>here data can be anything from value, function,hook or even component itself</p>

            <div className="flex flex-wrap">
                <div className="w-screen border-black 
                border-2 p-2 rounded text-center mt-2
                text-xl font-bold">
                    Parent Component to Child Component
                </div>
                <div className="w-100 mx-auto 
                mb-2 md:w-1/2 
                border-black border-2 p-2 rounded"
                >
                    <div className="italic pl-2">parent component</div>
                    <div className="pl-4">export const Parentcomp ( ) {"{"}</div>
                    <div className="pl-8">const parent_state = value;</div>
                    <div className="pl-8">return (</div>
                    <div className="pl-12">&lt;&gt;</div>
                    <div className="pl-16">&lt; childcomp prop_name = {"{ "}parent_state{" }"} /&gt;</div>
                    <div className="pl-12">&lt;/&gt;</div>
                    <div className="pl-8">)</div>
                    <div className="pl-4">{"}"}</div>
                </div>
                <div className="w-100 mx-auto 
                mb-2 md:w-1/2 
                border-black border-2 p-2 rounded"
                >
                    <div className="italic pl-2">child component</div>
                    <div className="pl-4">export const Childcomp ({" { "}prop_name{" } "}) {"{"}</div>
                    <div className="pl-8">const child_state = value;</div>
                    <div className="pl-8">return (</div>
                    <div className="pl-12">&lt;&gt;</div>
                    <div className="pl-16">{" { "}prop_name{" } "}</div>
                    <div className="pl-12">&lt;/&gt;</div>
                    <div className="pl-8">)</div>
                    <div className="pl-4">{"}"}</div>
                </div>
            </div>
            <p>so data from parentComp to childComp is passed</p>
            <p>so for data from childComp to parentComp to pass</p>
            <div className="flex flex-wrap">
                <div className="w-screen border-black 
                border-2 p-2 rounded text-center mt-2
                text-xl font-bold">
                    Child Component to  Parent Component
                </div>
                <div className="w-100 mx-auto 
                mb-2 md:w-1/2 
                border-black border-2 p-2 rounded"
                >
                    <div className="italic pl-2">parent component</div>
                    <div className="pl-4">import {"{ "}useState{" }"} from 'react';</div>
                    <br />
                    <div className="pl-4">export const Parentcomp ( ) {"{"}</div>
                    <div className="pl-8">const[data,setData] = useState('')</div>
                    <div className="pl-8">const parent_callback = (val:any) =&gt; {"{"}</div>
                    <div className="pl-12">setData(val);</div>
                    <div className="pl-8">{"}"}</div>
                    <div className="pl-8">return (</div>
                    <div className="pl-12">&lt;&gt;</div>
                    <div className="pl-16">&lt; childcomp prop_name = {"{ "}parent_callback{" }"} /&gt;</div>
                    <div className="pl-16">{"{ "}data{" }"}</div>

                    <div className="pl-12">&lt;/&gt;</div>
                    <div className="pl-8">)</div>
                    <div className="pl-4">{"}"}</div>
                </div>
                <div className="w-100 mx-auto 
                mb-2 md:w-1/2 
                border-black border-2 p-2 rounded"
                >
                    <div className="italic pl-2">child component</div>
                    <div className="pl-4">import {"{ "}useEffect{" }"} from 'react';</div>
                    <br />
                    <div className="pl-4">export const Childcomp ({" { "}prop_name{" } "}) {"{"}</div>
                    <div className="pl-8">useEffect( ( ) =&gt; {"{"}</div>
                    <div className="pl-12">prop_name('value')</div>
                    <div className="pl-12">{"}"}</div>
                    <div className="pl-12">, [ ] </div>
                    <div className="pl-8">)</div>
                    <div className="pl-8">return (</div>
                    <div className="pl-12">&lt;&gt;</div>
                    <br />
                    <div className="pl-12">&lt;/&gt;</div>
                    <div className="pl-8">)</div>
                    <div className="pl-4">{"}"}</div>
                </div>
            </div>
            <p>data from parentComp can be passed to childComp as an attribute directly</p>
            <p>but data from childComp can be passed to parentComp via event only</p>

            <div className="text-center text-lg font-bold">Rough</div>
            <Parent />

        </>
    )

}