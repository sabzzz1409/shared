import { useState } from "react";
import Child from "./Child"

export default () => {

    const [data, setData] = useState('');

    const gift: string = 'ok';
    const anotherGift: string = "Well";
    const callBack = (val: string) => { setData(val) };

    return (
        <>
            <Child send={gift} parcel={callBack} />
            <br />
            {data}
            <br />
            <Child send={anotherGift} parcel={callBack} />
            <br />
            {data}
        </>
    )

}