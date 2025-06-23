export default () => {

    return (
        <div>
            <h1 className="text-center text-2xl font-extrabold">Basic TSX Components code</h1>
            <br />
            <div className="flex flex-wrap">
                <div className="w-100 mx-auto my-2 md:w-1/2 border-black border-2 p-2 rounded">
                    <p className="underline text-xl font-bold">Basic version :</p>
                    <br />
                    <p className="text-sm italic">In FUNCTION_NAME.tsx file</p>
                    <div className="p-8">
                        <div>imports here</div>
                        <br />
                        <div>function FUNCTION_NAME (  ) {"{"}</div>
                        <br />
                        <div className="ms-4">const VAR:TYPE = ( VALUE, FUNCTION, ARROW FUNCTION, HOOK ... );</div>
                        <div className="ms-4 text-xs text-red-500">( keep hooks first then variables then function )</div>
                        <br />
                        <div className="ms-4">return (</div>
                        <div className="ms-8">&lt;&gt;
                            <span className="text-xs text-red-500 ml-4">
                                ( always wrap all elements in single fragments )
                            </span>
                        </div>
                        <div className="ms-12">TSX
                            <span className="text-xs text-red-500 ml-4">
                                ( html with EVENTS & STATES here with html DOM Elements )
                            </span>
                        </div>
                        <div className="ms-8">&lt;/&gt;</div>
                        <div className="ms-4">)</div>
                        <br />
                        <div >{"}"}</div>
                        <br />
                        <div>export default FUNCTION_NAME;</div>
                        <br />
                        <div className="text-sm italic">use in other components as</div>
                        <div>
                            import FUNCTION_NAME from 'path/to/that/component';
                        </div>
                        <br />
                        <div className="text-sm italic">inside return of component</div>
                        <div>
                            &lt;FUNCTION_NAME/&gt;
                        </div>
                        <div>(or)</div>
                        <div>
                            &lt;FUNCTION_NAME&gt;&lt;FUNCTION_NAME/&gt;
                        </div>
                        <br />
                    </div>
                </div>
                <div className="w-100 mx-auto my-2 md:w-1/2 border-black border-2 p-2 rounded">
                    <p className="underline text-xl font-bold">Simpler Reduced version :</p>
                    <br />
                    <p className="text-sm italic">In FUNCTION_NAME.tsx file</p>
                    <div className="p-8">
                        <div>imports here</div>
                        <br />
                        <div>export default (  ) =&gt; {"{"}</div>
                        <br />
                        <div className="ms-4">const VAR:TYPE = ( VALUE, FUNCTION, ARROW FUNCTION, HOOK ... );</div>
                        <div className="ms-4 text-xs text-red-500">( keep hooks first then variables then function )</div>
                        <br />
                        <div className="ms-4">return (</div>
                        <div className="ms-8">&lt;&gt;
                            <span className="text-xs text-red-500 ml-4">
                                ( always wrap all elements in single fragments )
                            </span>
                        </div>
                        <div className="ms-12">TSX
                            <span className="text-xs text-red-500 ml-4">
                                ( html with EVENTS & STATES here with html DOM Elements )
                            </span>
                        </div>
                        <div className="ms-8">&lt;/&gt;</div>
                        <div className="ms-4">)</div>
                        <br />
                        <div >{"}"}</div>
                        <br />
                        <br />
                        <br />
                        <div className="text-sm italic">use in other components as</div>
                        <div>
                            import FUNCTION_NAME from 'path/to/that/component';
                        </div>
                        <br />
                        <div className="text-sm italic">inside return of component</div>
                        <div>
                            &lt;FUNCTION_NAME/&gt;
                        </div>
                        <div>(or)</div>
                        <div>
                            &lt;FUNCTION_NAME&gt;&lt;FUNCTION_NAME/&gt;
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )

}