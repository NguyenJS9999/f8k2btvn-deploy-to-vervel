
// utils/client.js
import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = process.env.BASE_URL;
const VERSTION = process.env.VERSTION;

// const getListUser = (params = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await fetch(url);
// 				const response = await fetch(`${BASE_URL}/api/${VERSTION}/users`, { params });
//         const json = await response.json();
//         setData(json);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//
// 		console.log('getListUser json', data, loading, error );
//
//     fetchData();
//   }, []);
//
//   return { data, loading, error };
// };
//
// export default getListUser;


export const getListUser = async (query = {}) => {
	try {
		const response = await fetch(`${BASE_URL}/api/${VERSTION}/users`, { query });
    const dataParsed = await response.json();
    console.log('getListUser', response);

		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get mindmaps been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};
