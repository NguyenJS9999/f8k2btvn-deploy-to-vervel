import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.css'; // Add this line

import './global.css';
import Header2 from './components/header/Header2';
import { getServerSession } from 'next-auth';
import { saveLocal } from '@/helper/localstorage';

// export const metadata = {
// 	title: 'F8 - Học lập trình để đi làm', //title
// 	description: 'F8 chuyên đào tạo lập trình để đi làm', //meta description
// 	robots: 'nofollow, noindex',
// 	openGraph: {
// 		title: 'F8 - Học lập trình để đi làm 1',
// 		description: 'F8 chuyên đào tạo lập trình để đi làm 1',
// 		images: [
// 			'https://fullstack.edu.vn/images/image01.jpg',
// 			'https://fullstack.edu.vn/images/image02.jpg'
// 		],
// 		url: 'https://fullstack.edu.vn',
// 		type: 'website'
// 	}
// };

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Title webtsite',
  description: 'this is the desciption',
  openGraph: {
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}

async function RootLayout({ children }) {
  // const session = await getServerSession();

	// const port = 'http://localhost:3000';
	// const getListUser = async () => {
	// 	// http://localhost:3000/api/v1/users
	// 	const response = await fetch(`${port}/api/v1/users`);
	// 	const dataPart = await response.json();
	// 	console.log('Page dataUser', dataPart);
	// };
	// getListUser();

	// console.log('Page session', session);

	return (
		<html lang="en">
			<body>
				{/* session={session} */}
				<Header2 />
				<div className='main-content '>
					{children}
				</div>
			</body>
		</html>
	);
}

export default RootLayout;
