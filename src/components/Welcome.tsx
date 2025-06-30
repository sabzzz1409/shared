import logo from '../assets/react.svg';
import './Welcome.scss';

export default () => {

    const introText = "Happy Learning React"

    const renderTarget: string[][] = [
        ['H hooks', '() props'],
        ['K components', '{} conditional'],
        ['F forms', '[] listing'],
        ['R routing', '<> events'],
    ];

    return (
        <>
            <h1 className="text-center mt-5 text-2xl font-bold">
                {introText}
            </h1>

            <img src={logo} alt="logo" className='mx-auto mt-2 rotate hover:bg-blue-200 p-2 rounded-full' />

            <div className='grid justify-center gap-6 bg-blue-100 p-2 rounded mt-4 w-75 mx-auto'>
                {
                    renderTarget.map((item: string[], index: number) => (
                        <div className='flex justify-between contnet-center gap-4' key={index}>
                            <span className='hover:bg-blue-500 
                    cursor-default transition p-2
                     rounded hover:text-white
                     text-md font-bold'>{item[0]}</span>
                            <span className='hover:bg-blue-500 
                    cursor-default transition p-2
                     rounded hover:text-white
                     text-md font-bold'>{item[1]}</span>
                        </div>
                    ))
                }
            </div>

        </>
    )
}