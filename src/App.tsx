import './app.scss';
import { NavLink, Outlet } from 'react-router';

export default () => {

	const introText = `
	This is a react project integrated
	with tailwindcss scss
	and react router declarative
	`;

	const toBeLearned: string[] = [
		'basic_TSX_components',
		'conditional_rendering',
		'listing_&_keys',
		'props_&_state',
		'hooks',
		'client_side_routing',
		'server_side_routing',
		'api',
		'forms',
		'UI_libraries',
		'packages'
	];

	return (
		<>
			<h2 className="text-xl font-extrabold">
				{introText}
			</h2>
			<header className='flex gap-[5px] overflow-auto'>
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

