import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		twiImgPath: 'https://pbs.twimg.com/profile_images/',
		selectedItem: null,
		selectedItem2: {
			id: 1,
			type: 'Отель',
			address: '3-я ул. Строителей, д. 25',
			title: 'Помойка №1',
			phone: '+75551234567',
			bgImage: 'https://yastatic.net/s3/bro-bg-store/35f6ff76-6e4a-4200-92ef-f5adfa3b5b1d.jpg',
			twiAcc: 'SERG__ROTENBERG',
			twiImage: '821922183295500290/sNKzTdNk_400x400.jpg',
			twiFollowers: 256,
			twiFollowing: 1000,
			icon: 'rain',
			airTemp: 14,
			waterTemp: 20
		},
		items: [
			{
				id: 1,
				type: 'Отель',
				address: '3-я ул. Строителей, д. 25',
				title: 'Помойка №1',
				phone: '+75551234567',
				bgImage: 'https://yastatic.net/s3/bro-bg-store/35f6ff76-6e4a-4200-92ef-f5adfa3b5b1d.jpg',
				twiAcc: 'SERG__ROTENBERG',
				twiImage: '821922183295500290/sNKzTdNk_400x400.jpg',
				twiFollowers: 256,
				twiFollowing: 1000,
				icon: 'rain',
				airTemp: 14,
				waterTemp: 20
			},
			{
				id: 2,
				type: 'Отель',
				address: 'ул. Кузнецкий Мост, 19, стр. 1',
				title: 'Помойка Inn',
				phone: '+75554567890',
				bgImage: 'https://yastatic.net/s3/bro-bg-store/597e32fe-ba94-4717-bebb-881890de933f.jpg',
				twiAcc: 'HrunMorgov',
				twiImage: '509248320749838336/uve3C94A_400x400.jpeg',
				twiFollowers: 3670,
				twiFollowing: 345,
				icon: 'cloudy',
				airTemp: 18,
				waterTemp: 20
			},
			{
				id: 3,
				type: 'Ресторан',
				address: 'Мясницкая ул., 14/2 с 1',
				title: 'Му-Му',
				phone: '+77774567890',
				bgImage: 'https://yastatic.net/s3/bro-bg-store/2bdf2c6c-2190-48ad-8d92-c1f2fd97aab4.jpg',
				twiImage: '1028001868549693442/BiXaEsTr_400x400.jpg',
				twiAcc: 'HappyCow',
				twiFollowers: 12567,
				twiFollowing: 4568,
				icon: 'snow',
				airTemp: 5,
				waterTemp: 10
			},
			{
				id: 4,
				type: 'Туалет',
				address: 'Москва, 109012',
				title: 'Центральный туалет',
				phone: '911',
				bgImage: 'https://yastatic.net/s3/bro-bg-store/153d8c78-f162-49f8-80f2-99ef7d99affe.jpg',
				twiImage: '378800000529339868/b258cac556bfd4f7ac5f025b17e95293_400x400.png',
				twiAcc: 'wc_kherson',
				twiFollowers: 4678390,
				twiFollowing: 3,
				icon: 'snow',
				airTemp: -25,
				waterTemp: -3
			}
		]
	}
});

export default app;