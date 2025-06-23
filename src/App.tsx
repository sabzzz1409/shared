import { NavLink, Outlet } from 'react-router';
import { toBeLearned } from './main';

export default () => {

	const introText = `
	This is a react project integrated
	with tailwindcss scss
	and react router declarative
	`;

	return (
		<>
			<h2 className="text-xl font-extrabold">
				{introText}
			</h2>
			<header className='flex gap-[5px] overflow-auto w-[80%] m-auto'>
				{toBeLearned.map((item: string) => (
					<NavLink to={`/${item}`} className="border-none rounded-[20px] 
					bg-ghostwhite m-[5px] p-[8px] cursor-pointer 
					shadow-[5px_5px_5px_1px_rgba(0,0,0,0.2)] 
					transition-all duration-200 ease-in-out 
					hover:shadow-[2px_2px_2px_1px_rgba(0,0,0,0.2)] 
					active:shadow-none active:bg-gray-600" >
						{item.replace(/_/g, ' ')}</NavLink>
				))}
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)

}

