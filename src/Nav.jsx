import React, { Component } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import logo from './logo.png';
function Nav() {
	return (
		<nav className=" flex justify-between  ">
			<div className="logo flex items-center md:items-start lg:items-center space-x-1  text-lg">
				<img
					src={logo}
					className="lg:w-12 md:w-8 w-14 h-fit"
					alt=""
				/>
				<h1 className="opacity-90 lg:mt-0 mt-1 md:block  hidden">PHEONIX</h1>
			</div>
			<div className="links flex text-md  xl:w-1/3 lg:items-center lg:w-1/2 lg:flex-row flex-col  md:justify-between  underline">
				<a
					href="mailto:newbiz@phoenixagency.ae"
					className="opacity-90 text-right "
				>
					<span className="hidden w-0 sm:w-fit sm:block">
						newbiz@phoenixagency.ae
					</span>
					<span className="sm:hidden">Email ↗</span>
				</a>
				<div className="rightLinks text-md lg:flex-row  flex-col flex  justify-center  items-end space-x-6">
					<a
						href=""
						className="opacity-90"
					>
						LinkedIn ↗
					</a>
					<a
						href=""
						className="opacity-90"
					>
						Instagram↗
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
