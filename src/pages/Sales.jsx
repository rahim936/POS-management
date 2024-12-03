import POS from '../components/POS';
import SalesSummary from '../components/SalesSummary';

const Sales = () => {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>Sales</h1>
			<POS />
			<SalesSummary />
		</div>
	);
};

export default Sales;
