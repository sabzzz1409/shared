import Parent from "../tests/Parent"

export default () => {

    return (
        <>
            <h1 className="text-xl font-bold">Props and State</h1>

            <p>here data can be anything from value, function,hook or even component itself</p>

            <div className="flex flex-wrap">
                <div className="w-100 mx-auto 
                my-2 md:w-1/2 
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
                my-2 md:w-1/2 
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
            <p>so data from parentComp to chilComp is passed</p>

            <div className="flex flex-wrap">

            </div>

            <div className="text-center text-lg font-bold">Rough</div>
            <Parent/>

        </>
    )

}