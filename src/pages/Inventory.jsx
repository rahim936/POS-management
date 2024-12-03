import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';

const Inventory = () => {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>Inventory</h1>
			<AddProduct />
			<ProductList />
		</div>
	);
};

export default Inventory;
