

const SalesSummary = () => {
	// Example sales data
	const salesData = {
		totalSales: 4500, // Total sales in currency
		transactions: 120, // Total number of transactions
		bestSeller: 'Product A', // Best-selling product
	};

	return (
		<div className='bg-white shadow rounded-lg p-6 w-full'>
			<h2 className='text-xl font-bold mb-4'>Sales Summary</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{/* Total Sales */}
				<div className='flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg'>
					<h3 className='text-lg font-semibold'>Total Sales</h3>
					<p className='text-2xl font-bold text-blue-600'>${salesData.totalSales.toLocaleString()}</p>
				</div>

				{/* Total Transactions */}
				<div className='flex flex-col items-center justify-center bg-green-100 p-4 rounded-lg'>
					<h3 className='text-lg font-semibold'>Transactions</h3>
					<p className='text-2xl font-bold text-green-600'>{salesData.transactions}</p>
				</div>

				{/* Best Seller */}
				<div className='flex flex-col items-center justify-center bg-yellow-100 p-4 rounded-lg'>
					<h3 className='text-lg font-semibold'>Best Seller</h3>
					<p className='text-xl font-bold text-yellow-600'>{salesData.bestSeller}</p>
				</div>
			</div>
		</div>
	);
};
export default SalesSummary;