import React, { useState } from 'react';
import './loginForm.scss';

function LoginForm({ changeTypeLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async typeLogin => {
		console.log('goLogin', typeLogin);
		// const response = await fetch(`http://localhost:3000/api/v1/auth`);
		// const resLogin = await response.json();
		// console.log('handleLogin resLogin', resLogin);
		if (typeLogin === 'account') {
			console.log('đăng nh vs account  riêng gọi API');
		}
		if (typeLogin === 'default') {
			changeTypeLogin('default');
		}
	};


	return (
		<>
			<div id="loginForm">
				<div className="login-form-wrap">
					<div className="login-form-inputs className='my-4'">
						<label htmlFor="email">Email hoặc username</label>
						<input
							id="email"
							value={email}
							type="text"
							name=""
							onChange={(event) => setEmail(event.target.value)}
							placeholder="Email hoặc username"
						/>

						<label htmlFor="password" className="mt-2">
							Mật khẩu
						</label>
						<input
							id="password"
							value={password}
							type="text"
							name=""
							onChange={(event) => setPassword(event.target.value)}
							placeholder="Mật khẩu"
						/>
					</div>

					<div className="actions">
						<button
							onClick={() => handleLogin('account')}
							href="#"
							id="account"
							className="account btn"
						>
							<span>Đăng nhập</span>
						</button>
					</div>

					<div className="description">
						<span>
							Để đăng nhập, bạn cần đăng nhập bằng mạng xã hội và
							đổi mật khẩu trong profile.
						</span>
					</div>

					<div className="actions">
						<button
							onClick={() => handleLogin('default')}
							href="#"
							id="account"
							className="account btn"
						>
							<span>Đăng nhập với Mạng xã hội</span>
						</button>
					</div>

					{/* <div className="description">
					<span>Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị khác.</span>
				</div> */}
				</div>
			</div>
		</>
	);
}

export default LoginForm;
