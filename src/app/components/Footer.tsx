export default function Footer() {
	return (
		<footer className="bg-navyBlue text-white py-4 mt-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
				<p>&copy; {new Date().getFullYear()} Tech Insights. All rights reserved.</p>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a href="#" className="hover:underline">
						Privacy Policy
					</a>
					<a href="#" className="hover:underline">
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
}
