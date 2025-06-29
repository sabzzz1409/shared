import { useEffect } from "react";

export default ({ send, parcel }: any) => {

    const fromChild = "it works";
    const initialCall = () => {
        parcel(fromChild + send)
    }

    useEffect(
        initialCall
        ,
        []
    )


    return (
        <>
            {send}
        </>
    )

}