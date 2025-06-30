export default () => {

    return (
        <>
            <h1 className="text-lg font-bold">Rightnow React Router V7 is Running which has 3 modes</h1>

            <div className="m-4">
                <div className="border-2 rounded p-4">
                    <p className="text-xl font-bold">Declarative Mode</p>
                    <div className="p-4">
                        <div className="pl-4 italic">Go To Main.tsx</div>
                        <div className="pl-8">
                            // lazy imports
                        </div>
                        <div className="pl-8">
                            const Componet = lazy( ( ) =&gt; import('./path/to/Component'))
                        </div>
                        <br />
                        <div className="pl-8">
                            return (
                        </div>
                        <div className="pl-12">&lt;BrowserRouter&gt;</div>
                        <div className="pl-16">&lt;Suspense fallback={"{ "}&lt;div&gt;Loading...&lt;/div&gt;{" }"}&gt;</div>
                        <div className="pl-20">&lt;Routes&gt;</div>
                        <div className="pl-24">&lt;Route path="/path" element={"{ "}&lt; Component1 /&gt;{" }"} /&gt;</div>
                        <div className="pl-24">&lt;Route path="/path" element={"{ "}&lt; Component2 /&gt;{" }"} /&gt;</div>
                        <div className="pl-28">&lt;Route path="/subpath" element={"{ "}&lt; SubComponent /&gt;{" }"} /&gt;</div>
                        <div className="pl-28">...</div>
                        <div className="text-red-500 text-sm pl-28">( this requires outlet in component then the component will render in it )</div>
                        <div className="pl-24">&lt;/Route&gt;</div>
                        <div className="pl-24">...</div>
                        <div className="text-red-500 text-sm pl-24">( routes here )</div>
                        <div className="pl-20">&lt;/Routes&gt;</div>
                        <div className="pl-16">&lt;/Suspense&gt;</div>
                        <div className="pl-12">&lt;/BrowserRouter&gt;</div>
                        <div className="pl-8">
                            )
                        </div>
                        <br />
                        <div className="pl-8 font-semibold">:: to route via tsx use Link element with 'to' attribute</div>
                        <div className="pl-8 italic">example :</div>
                        <div className="pl-8 text-red-500 text-sm">
                            ( import Link,NavLink from react-router from react before usage )
                        </div>
                        <div className="pl-8">&lt;Link to="/path" &gt;content&lt;/Link&gt;</div>
                        <div className="pl-8">( or )</div>
                        <div className="pl-8">&lt;NavLink to="/path" &gt;content&lt;/NavLink&gt;</div>
                        <br />
                        <div className="pl-8 font-semibold">:: we need outlet for sub routes main routes renders in app itself so</div>
                        <br />
                        <div className="pl-8 font-semibold">:: you can send params in route </div>
                        <div className="pl-8 italic">example :</div>
                        <div className="pl-8">&lt;Link to="/path/:id" &gt;content&lt;/Link&gt;</div>
                        <div className="pl-8">( or )</div>
                        <div className="pl-8">&lt;NavLink to="/path/:id" &gt;content&lt;/NavLink&gt;</div>
                        <div className="pl-8 italic"> in component routed to</div>
                        <div className="pl-8">import {"{ "}useParams{" }"} from 'react-router-dom';</div>
                        <div className="pl-8 italic"> in function</div>
                        <div className="pl-12">const {"{ "}id{" }"} = useParams( );</div>
                        <div className="pl-8 font-semibold">in this way get route param</div>
                        <br />
                        <div className="pl-8 font-bold">there are 19 react route hooks</div>
                        <br />
                        <div className="pl-8 font-semibold">:: you can send querys in route </div>
                        <div className="pl-8 italic">example :</div>
                        <div className="pl-8">&lt;Link to="/path?key=value" &gt;content&lt;/Link&gt;</div>
                        <div className="pl-8">( or )</div>
                        <div className="pl-8">&lt;NavLink to="/path/?key=value" &gt;content&lt;/NavLink&gt;</div>
                        <div className="pl-8 italic"> in component routed to</div>
                        <div className="pl-8">import {"{ "}useLocation{" }"} from 'react-router-dom';</div>
                        <div className="pl-8 italic"> in function</div>
                        <div className="pl-12">const {"{ "}path{" }"} = useLocation( );</div>
                        <div className="pl-12">const query = new URLSearchParams( path )</div>
                        <div className="pl-12">const key = query.get( 'key' );</div>
                        <div className="pl-8 font-semibold">in this way get route query </div>
                        <br />
                        <div className="pl-8 font-semibold">::you can use useNavigate to route via function</div>
                        <div className="pl-8 italic">example</div>
                        <div className="pl-8">import {"{ "}useNavigate{" }"} from 'react-router-dom';</div>
                        <div className="pl-8 italic"> in function</div>
                        <div className="pl-8">const navigate = useNavigate( );</div>
                        <div className="pl-8">const function_name = ( ) =&gt; {"{"}</div>
                        <div className="pl-12">navigate( number like 1(forward) or -1(backward) || '/path',
                            {" { "}state : {"{ "} data: value {" }"}{" }"} )</div>
                        <div className="pl-8">{"}"}</div>
                        <div className="pl-8 font-semibold">::you can share data via route here get access via</div>
                        <div className="pl-8 italic">in component routed</div>
                        <div className="pl-8">import {"{ "}useLocation{" }"} from 'react-router-dom';</div>
                        <div className="pl-8">const location = useLocation( );</div>
                        <div className="pl-8">we can get data by location.state.data</div>
                    </div>

                    <div className="text-purple-800"> To Be Learned Guards, Preloads and Utils </div>
                </div>

                <div className="border-2 rounded p-4">
                    <p className="text-xl font-bold">Data Mode</p>
                    <div className="p-4">
                        To Be Learned
                    </div>

                </div>

                <div className="border-2 rounded p-4">
                    <p className="text-xl font-bold">FrameWork Mode</p>
                    <div className="p-4">
                        To Be Learned
                    </div>

                </div>
            </div>

        </>
    )

}