'use client';
import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Posts from './components/Posts';
import PostsProvider from './components/PostsProvider';
import Testimonials from './components/Testimonials';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import getListUser from '@/service/apiUser';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

const Home = ({ data }) => {
	console.log('data', data);

	const dataUser = [
		{
			id: 1
		}
	];

	// 	if (loading) {
	//     return <div>Loading...</div>;
	//   }
	//
	//   if (error) {
	//     return <div>Error: {error.message}</div>;
	//   }
	// if (data) {
	// 	console.log('user data', data);
	// }

	return (
		<div>
			{/* id: { dataUser?.id }
      fullname: { dataUser?.fullname }
      email: { dataUser?.email }
      status: { dataUser?.status }
      provider_id: { dataUser?.provider_id } */}

			{/* bg-indigo-100 */}
			<div className=" py-6 md:py-12">
				<div className="container px-4 mx-auto">
					<div className="text-center max-w-2xl mx-auto">
						<h1 className="text-3xl md:text-4xl font-medium mb-2">
							Get the header you needed for your awesome website.
						</h1>
						<button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
							Get Started
						</button>
						<div className="mt-4">
							<img
								src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup"
								alt="mockup"
								className="d-block max-w-full rounded shadow-md"
							/>
						</div>
					</div>
					<div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
						<div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
							<span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
							<h5 className="text-xl font-medium uppercase mb-4">
								Fresh Design
							</h5>
							<p className="text-gray-600">
								FWR blocks bring in an air of fresh design with
								their creative layouts and blocks, which are
								easily customizable
							</p>
						</div>
						<div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
							<span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
							<h5 className="text-xl font-medium uppercase mb-4">
								Clean Code
							</h5>
							<p className="text-gray-600">
								FWR blocks are the cleanest pieces of HTML
								blocks, which are built with utmost care to
								quality and usability.
							</p>
						</div>
						<div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
							<span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3" />
							<h5 className="text-xl font-medium uppercase mb-4">
								Perfect Tool
							</h5>
							<p className="text-gray-600">
								FWR blocks is a perfect tool for designers,
								developers and agencies looking to create
								stunning websites in no time.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
		</div>
	);
};

export default Home;

// {process.env.SERVER_API}
