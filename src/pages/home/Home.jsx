import React from "react";
import Navbar from "components/Navbar/Navbar";
const Home = () => {
	return (
		<>

		<Navbar />
		<div className='hero'>
			<div className='background-left'></div>
			<div className='background-right'></div>

			<div className='hero-content'>
				<div className='hero-left'>
					<h1>
						Awesome hero for the landing page of <b>Your Product</b>
					</h1>
					<p>Here you can add some description of what your product does.</p>
					<button>Free Trial</button>
				</div>
				<div className='hero-right'>
					<img
						className='hero-image'
						src='https://s3.envato.com/files/225195941/008-screen.png'
					/>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
