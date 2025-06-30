export default () => {

    const list: number[] = [1, 2, 3, 4, 5, 6]

    return (
        <>
            <h1 className="text-lg font-bold">Listing & Keys</h1>
            <div className="mx-auto my-2
                border-black border-2 p-2 rounded p-4">
                <div>{"{"}</div>
                <div className="pl-4">ARRAY_NAME.map(item =&gt; (</div>
                <div className="pl-8">&lt; key={"{"}item{"}"} &gt;TSX code here . . . with item values&lt;/&gt;</div>
                <div className="pl-8"> ) </div>
                <div className="pl-4"> ) </div>
                <div> {"}"} </div>

            </div>

            <p> you can use any array method that returns array </p>

            <div className="text-center text-lg font-bold">Rough</div>

            {
                list.map((item: number) => <div className="pl-4" key={item}>{item}</div>)
            }

        </>
    )

}