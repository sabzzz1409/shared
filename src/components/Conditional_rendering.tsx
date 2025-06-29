export default () => {

    return (
        <>
            <h1 className="text-lg font-bold">Conditional Rendering</h1>
            <div className="p-4 flex flex-wrap">

                <div className="w-100 mx-auto 
                mt-2 md:w-1/2 
                border-black border-2 p-2 rounded">
                    <p className="underline">Ternary ( in TSX ) :</p>
                    <div>{"{"}</div>
                    <div className="pl-4">boolean condition </div>
                    <div className="pl-8">? &lt;&gt;TSX if code here . . .&lt;/&gt;</div>
                    <div className="pl-8">: &lt;&gt;TSX else code here . . .&lt;/&gt;</div>
                    <div>{"}"}</div>

                </div>
                <div className="w-100 mx-auto 
                mt-2 md:w-1/2 
                border-black border-2 p-2 rounded">
                    <p className="underline">Circuited ( in TSX ) :</p>
                    <div>{"{"} boolean condition && &lt;&gt;TSX if code here . . .&lt;/&gt; {"}"}</div>
                </div>
                <div className="w-100 mx-auto 
                mb-2 md:w-1/2 
                border-black border-2 p-2 rounded">
                    <p className="underline">Functional ( in TS ) :</p>
                    <div>if ( condition ) {"{"}</div>
                    <div className="pl-4">return ( </div>
                    <div className="pl-8"> &lt;&gt;TSX if code here . . .&lt;/&gt;</div>
                    <div className="pl-4"> ) </div>
                    <div>{"}"}</div>
                    <div>else if ( condition ) {"{"}</div>
                    <div className="pl-4">return ( </div>
                    <div className="pl-8"> &lt;&gt;TSX else if code here . . .&lt;/&gt;</div>
                    <div className="pl-4"> ) </div>
                    <div>{"}"}</div>
                    <div>else {"{"}</div>
                    <div className="pl-4">return ( </div>
                    <div className="pl-8"> &lt;&gt;TSX else code here . . .&lt;/&gt;</div>
                    <div className="pl-4"> ) </div>
                    <div>{"}"}</div>

                </div>
            </div>

            <div className="text-center text-lg font-bold">Rough</div>

            {
                true
                    ? 'yes'
                    : 'no'
            }

            <br />

            {
                false
                    ? 'yes'
                    : 'no'
            }

            <br />

            {true && 'ok'}

            <br />

            {false && 'nope'}-

        </>
    )

}