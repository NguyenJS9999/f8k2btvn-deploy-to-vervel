var express = require('express');
var router = express.Router();
const connectRedis = require('../utils/redis');

const fetch = require("node-fetch");
// Or just: import 'cross-fetch/polyfill';

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get('/', async (req, res) => {
	const client = await connectRedis;
	const usersCache = await client.get('users-cache');
	// console.log('usersCache', usersCache);
	let users;
	if (!usersCache) {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users`
		);
	  console.log('users', response);

		users = await response.json();
		await client.set('users-cache', JSON.stringify(users), {
			EX: 60 * 60 * 24
		});
		console.log('no cache');
	} else {
		users = JSON.parse(usersCache);
		console.log('cache');
	}

	// res.json(users);
	res.render('users/index', { users });
});

router.get('/:id', async (req, res) => {
	// const url = window.location.pathname;
	// const id = url.substring(url.lastIndexOf('/') + 1);
	const { id } = req.params;
	console.log('id: ', id);

  if (id) {
    const client = await connectRedis;
    const userCacheDetail = await client.get('user-cache-detail');
    let userDetail;
    if (!userCacheDetail) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      userDetail = await response.json();
      await client.set('user-cache-detail', JSON.stringify(userDetail), {
        EX: 60 * 60 * 24
      });
      console.log('no cache detail');
    } else {
      userDetail = JSON.parse(userCacheDetail);
      console.log('cache detail');
    }

    res.render("users/detail", { userDetail });
    // res.json(userDetail);
  }

	// if (id) {
	//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	//   let userDetail = await response.json();
	//   console.log('userDetail: ', userDetail);
  //   res.render("users/detail", { userDetail });
	//   // res.json(userDetail);
	// }

});

router.get('/get-one', async (req, res) => {
	res.json({
		'key': '123'
	});
});

router.get('/clear-cache', async (req, res) => {
	const client = await connectRedis;
	await client.del('users-cache');
	await client.del('user-cache-detail');
	res.json({});
});

module.exports = router;
