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

const Home = () => {

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
		</div>
	);
};

export default Home;

// {process.env.SERVER_API}
