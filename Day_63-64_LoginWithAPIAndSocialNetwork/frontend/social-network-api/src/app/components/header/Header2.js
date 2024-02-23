'use client';
import Link from "next/link";
import './header.scss'

import getListUser from '@/service/apiUser';
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header2() {
	// console.log('head dataUser', dataUser);
	const pathname = usePathname();

	// const [ statusLoginModal, setStatusLoginModal ] = useState(true);

	// useEffect(() => {
	// 	listUser();
	// }, []);

	// const listUser = async () => {
	// 	const response = await fetch(`http://localhost:3000/api/v1/users`);
	// 	const posts = await response.json();
	// 	console.log('posts dataUser', posts);
	// };

	// console.log('getListUser loading', loading);
	// console.log('getListUser error', error);

	// const response2 = await fetch(`http://localhost:3000/api/v1/users`);
	// const data = await response2.json();
	// console.log('Header2 list users', data);

	// const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	// const posts = await response.json();
	// console.log('posts', posts);

	return (
		<div className="header-component header-2">

			<nav className="bg-white py-2 md:py-4">
				<div className="container px-4 mx-auto md:flex md:items-center">
					<div className="flex justify-between items-center">
						<a
							href="#"
							className="font-bold text-xl text-indigo-600"
						>
							Logo
						</a>
						<button
							className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
							id="navbar-toggle"
						>
							<i className="fas fa-bars" />
						</button>
					</div>
					<div
						className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 header-menu-tabs"
						id="navbar-collapse"
					>
						<Link	href={"/"}	className={`${pathname === "/" && "active"}`} >Trang chủ</Link>
						<Link	href={"/profile"}	className={`${pathname === "/profile" && "active"}`} >Cá nhân</Link>
						<Link	href={"/admin/dashboard/users"}	className={`${pathname === "/admin/dashboard/users" && "active"}`} >Người dùng</Link>
						<Link	href={"/auth"}	className={`${pathname === "/auth" && "active"}`} >Đăng nhập</Link>
						<Link	href={"/auth"}	className={`${pathname === "/auth" && "active"}`} >Đăng kí</Link>

						{/* {statusLoginModal && <LoginForm />} */}

					</div>
				</div>
			</nav>

		</div>
	);
}

export default Header2;
