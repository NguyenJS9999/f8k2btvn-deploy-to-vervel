
'use client';

import React from 'react'
import './profile.scss';


function ProfilePage() {

	const handleEditInfor = () => {
		console.log('handleEditInfor: ');
	}

	const handleLogout = () => {
		console.log('handleLogout: ');
	}

	return (
		<div className='profile-page'>
			<div className="profile-title">
				Trang profile của: Nguyên 2
			</div>

			<div className="infors-last-login">
				<img className='last-login-avata' src="https://www.pikpng.com/pngl/m/97-973734_instagram-clipart-picsart-png-instagram-logo-100x100-png.png" alt="avata" />
				<div>
					<span>Valina Nguyên 2</span>
					<span>fullstack@gmail.com</span>
				</div>
			</div>

			<div className="profile-functions">
				<div className="infor-providers-login">
					<span id='auth0'>Chưa lên kết</span>
					<span id="github" >Git hub</span>
					<span id='google'>Google</span>
				</div>

				<div className="profile-action">
					<button id='edit' className='btn' onClick={handleEditInfor}>Sửa thông tin</button>
					<button id='logout' className='btn' onClick={handleLogout}>Đăng xuất</button>
				</div>
			</div>
			{/*  */}

		</div>
	)
}

export default ProfilePage