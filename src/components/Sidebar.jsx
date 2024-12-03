import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='bg-gray-900 text-white w-64 h-screen p-4'>
			<h2 className='text-2xl font-bold mb-6'>Menu</h2>
			<ul>
				<li className='mb-4'>
					<Link to='/' className='hover:text-blue-400'>
						Dashboard
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/inventory' className='hover:text-blue-400'>
						Inventory
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/sales' className='hover:text-blue-400'>
						Sales
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/settings' className='hover:text-blue-400'>
						Settings
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
