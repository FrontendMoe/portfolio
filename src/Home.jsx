import React, { Component } from 'react';
import pheonix from './SVG/pheonix_2.svg';
function Home() {
	return (
		<div className=" space-y-4">
			<div className="title">
				<img
					src={pheonix}
					alt=""
				/>
			</div>
			<div className="text-center desc   ">
				<div className=" mx-auto xl:text-3xl md:text-2xl text-xl ">
					A FULL-SERVICE AGENCY THAT EXISTS AT THE INTERSECTION OF CREATIVITY
					AND MARKETING , BUILT EXCLUSIVELY TO HELP FAST MOVING COMPANIES
					ACHIEVE THEIR GOALS.
				</div>
			</div>
		</div>
	);
}

export default Home;
