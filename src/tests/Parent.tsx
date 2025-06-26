import Child from "./Child"

export default () => {

    const gift: string = 'ok'

    return (
        <>
            <Child send={gift} />
        </>
    )

}