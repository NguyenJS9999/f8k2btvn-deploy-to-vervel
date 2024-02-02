import '@fortawesome/fontawesome-free/css/all.min.css';
import './global.css';
import Header2 from './components/header/Header2';
import { getServerSession } from 'next-auth';

export const metadata = {
	title: 'F8 - Học lập trình để đi làm', //title
	description: 'F8 chuyên đào tạo lập trình để đi làm', //meta description
	robots: 'nofollow, noindex',
	openGraph: {
		title: 'F8 - Học lập trình để đi làm 1',
		description: 'F8 chuyên đào tạo lập trình để đi làm 1',
		images: [
			'https://fullstack.edu.vn/images/image01.jpg',
			'https://fullstack.edu.vn/images/image02.jpg'
		],
		url: 'https://fullstack.edu.vn',
		type: 'website'
	}
};

async function RootLayout({ children }) {
  const session = await getServerSession();

	const port = 'http://localhost:3000';

	const getListUser = async () => {
		// http://localhost:3000/api/v1/users
		// const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		const response = await fetch(`${port}/api/v1/users`);
		const dataPart = await response.json();
		console.log('Page dataUser', dataPart);
	};
	getListUser();

	console.log('Page session', session);

	return (
		<html lang="en">
			<body>
				<Header2 session={session} />
				{children}
			</body>
		</html>
	);
}

export default RootLayout;
