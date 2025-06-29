export default () => {

    return (
        <>
            <div className="text-xl font-bold">Events in React</div>
            <br />

            <div className="flex">
                <div className="border-2 rounded p-2 w-1/2">
                    <div className="pl-2 italic">simple event</div>
                    <div className="pl-4">
                        &lt;tag_name onEvent={"{ "}function_name{" }"} &gt; content &lt;/tag_name&gt;
                    </div>
                </div>
                <div className="border-2 rounded p-2 w-1/2">
                    <div className="pl-2 italic">driven event</div>
                    <div className="pl-4">
                        &lt;tag_name onEvent={"{ "} ( event ) =&gt; {"{ "} function_name( event ){" }"} {" }"} &gt; content &lt;/tag_name&gt;
                    </div>
                </div>
            </div>
            <p className="text-center">
                event has event.target.value for input tags for value from html interface
            </p>
        </>
    )

}