import { NavLink, Outlet } from 'react-router';
import { toBeLearned } from './main';

export default () => {

	const introText = `
	This is a react project integrated
	with tailwindcss, scss
	and react router declarative Mode
	`;

	return (
		<>
			<h2 className="sm:text-lg md:text-2xl font-extrabold text-center font-serif bg-blue-100">
				{introText}
			</h2>
			<header className='flex gap-5
			overflow-auto w-3/4
			mx-auto my-4 bg-blue-100
			 p-4 rounded-xl'
			>
				{toBeLearned.map((item: string) => (
					<NavLink
						to={`/${item}`}
						key={item}
						className={({ isActive }) =>
							`border-none rounded-xl text-center
     						 min-w-[100px] m-2 p-2 cursor-pointer content-center
     						shadow-[5px_5px_5px_1px_rgba(0,0,0,0.2)] 
     						transition-all duration-200 ease-in-out 
     						hover:shadow-[2px_2px_2px_1px_rgba(0,0,0,0.2)] 
     						${isActive ? ' bg-blue-500 text-white' : 'bg-white'}`
						}
					>
						{item.replace(/_/g, ' ')}
					</NavLink>

				))}
			</header>
			<main className='border-black border-2 p-4 overflow-auto h-100 m-2 rounded'>
				<Outlet />
			</main>
		</>
	)

}

