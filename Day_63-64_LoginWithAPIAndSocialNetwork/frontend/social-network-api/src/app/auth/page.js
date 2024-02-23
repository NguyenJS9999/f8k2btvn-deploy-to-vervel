'use client';

import React, { useState } from 'react';
import './auth.scss';
import LoginForm from '../components/loginForm/loginForm';

function AuthPage() {

	const [ statusLoginVsAccount, setStatusLoginVsAccount ] = useState('default')

	const handleLogin = async (typeLogin) => {
		console.log('goLogin: ', typeLogin);
		// const response = await fetch(`http://localhost:3000/api/v1/auth`);
		// const resLogin = await response.json();
		// console.log('handleLogin resLogin', resLogin);
		if (typeLogin === 'account') {
			setStatusLoginVsAccount('account')
		}
	}

	return (
		<div className='container auth-page'>

			<div id='auth-form'>
				<div className='login-form-wrap'>
					<span className='login-form-title'>Đăng nhập</span>

					<span className='login-form-title'>Đăng nhập bằng mạng xã hội hoặc tài khoản</span>

					{statusLoginVsAccount && statusLoginVsAccount === 'default' &&
						<div className='actions mt-5'>
							<button onClick={() => handleLogin('auth0')} href='#' id='auth0' className='auth0 btn'>
								<i className='fa fa-google fa-fw'></i>
								<span>Đăng nhập với Auth0</span>
							</button>

							<button onClick={() => handleLogin('github')} href='#' id='github' className='github btn'>
								<i className='fa fa-twitter fa-fw'></i>
								<span>Đăng nhập bằng Github</span>
							</button>

							<button onClick={() => handleLogin('google')} href='#' id='google' className='google btn'>
								<i className='fa fa-google fa-fw'></i>
								<span>Đăng nhập bằng Google+</span>
							</button>

							<button onClick={() => handleLogin('account')} href='#' id='account' className='account btn'>
								<i className='fa fa-google fa-fw'></i>
								<span>Đăng nhập với email và mật khẩu</span>
							</button>
						</div>
					}

					{statusLoginVsAccount && statusLoginVsAccount === 'account' &&
						<div className='actions'>
							<LoginForm changeTypeLogin={setStatusLoginVsAccount} />
						</div>
					}



				</div>
			</div>
		</div>
	);
}

export default AuthPage;
