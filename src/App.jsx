import Home from './Home';
import Nav from './Nav';
import video from './8f70714b.mp4';
import poster from './SVG/poster.svg';
import { useEffect, useState } from 'react';
function App() {
	useEffect(() => {
		const vid = document.getElementById('myVideo');
		setTimeout(() => {
			vid.play();
		}, 2 * 1000);
	});

	return (
		<div className="App lg:px-10 md:px-8 sm:px-5 px-3 py-5 flex flex-col justify-between  pb-28  text-white h-screen">
			<Nav></Nav>
			<Home></Home>
			<video
				id="myVideo"
				src={video}
				loop
				className="-z-10"
				muted
				poster={poster}
			></video>
		</div>
	);
}

export default App;
