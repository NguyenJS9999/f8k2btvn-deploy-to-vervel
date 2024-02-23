'use client';
import React, { useEffect, useState } from 'react';
import './users.scss';
import { getListUser, getOneUser, updateOneUser, deleteOneUser } from '@/service/apiUser';

function UsersPage() {
	useEffect(() => {
		initListUser();
	}, []);

	const [Users, setUsers] = useState([
		// {
		// 	UID: 1,
		// 	fullName: 'Valina Nguyên',
		// 	email: 'fullstack8k2@gmail.com',
		// 	status: true,
		// 	statusText: 'Kích hoạt',
		// 	createdAt: '2024-01-31T16:12:03.708Z',
		// 	updatedAt: '2024-01-31T16:12:03.708Z'
		// }
	]);

	const initListUser = async () => {
		const response = await getListUser();
		const users = await response.json();
		if (response.ok || response.status === 200) {
			const dataUser = users.data;
			console.log('handleLogin dataUser', dataUser, typeof dataUser);
			setUsers(dataUser);
		}
	};

	const handleSeeDetailUser = async (usersId) => {
		console.log('handleSeeDetailUser', usersId);
		const response = await getOneUser(usersId);
		const users = await response.json();
		if (response.ok || response.status === 200) {
			const dataUser = users.data;
			console.log('handleSeeDetailUser dataUser', dataUser, typeof dataUser);
		}
	};
	const handleEditUser = async (usersId) => {
		console.log('handleEditUser', usersId);
		const response = await getOneUser(usersId);
		const users = await response.json();
		if (response.ok || response.status === 200) {
			const dataUser = users.data;
			console.log('handleSeeDetailUser dataUser', dataUser, typeof dataUser);
		}
	};
	const handleDeleteUser = async (usersId) => {
		console.log('handleDeleteUser', usersId);
		const response = await deleteOneUser(usersId);
		const users = await response.json();
		if (response.ok || response.status === 200) {
			const dataUser = users.data;
			console.log('handleSeeDetailUser dataUser', dataUser, typeof dataUser);
		}
	};

	return (
		<>
			<div className="container">
				<div className="users-pages">
					<div className="users-table">
						<div className="users-table-head">
							<div className='user-checkbox'>
								<input type="checkbox" />
							</div>
							<div className='user-name'>Tên</div>
							<div className='user-email'>Email</div>
							<div className='user-action'>Hành động</div>
						</div>

						{Users &&
							Users.map(item => {
								return (
									<div
										key={item.UID}
										className="users-table-row"
									>
										<div className='user-checkbox'>
											<input type="checkbox" />
										</div>
										<div className='user-name'>{item.fullName}</div>
										<div className='user-email'>{item.email}</div>
										<div className='user-action'>
											<button
												onClick={() =>
													handleSeeDetailUser(item.UID)
												}
											>
												Xem
											</button>
											<button
												onClick={() =>
													handleEditUser(item.UID)
												}
											>
												Sửa
											</button>
											<button
												onClick={() =>
													handleDeleteUser(item.UID)
												}
											>
												Xóa
											</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}

export default UsersPage;
