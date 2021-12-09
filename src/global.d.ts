/// <reference types="@sveltejs/kit" />

export interface page {
	_createdAt: '2021-12-06T23:18:34Z';
	_id: '0df9f8b4-6018-4d41-9909-74b99de7764d';
	_rev: 'SVWB3nzlMSR5ytjXeT81Gk';
	_type: 'page';
	_updatedAt: '2021-12-09T18:15:56Z';
	body: [
		{
			_key: '47e1b0754181';
			_type: 'mattressReference';
			mattress: {
				_createdAt: '2021-12-06T13:42:05Z';
				_id: 'a0766f46-c0f8-494e-a2a0-c7d623bdcbbb';
				_rev: 'SVWB3nzlMSR5ytjXe3Dlys';
				_type: 'mattress';
				_updatedAt: '2021-12-06T20:28:06Z';
				categories: [
					{
						_key: 'c7d68f9515d6';
						_ref: '5130f2c7-d650-496e-966c-e3c1868ced2d';
						_type: 'reference';
					}
				];
				features: ['Certipur - US Certified', 'Alternating Coils', '7 Year Warrantry'];
				images: [
					{
						_key: '5e840b924122';
						_type: 'image';
						asset: {
							_ref: 'image-806a900b483785f7098c6aeb73e67b4038f4fe3d-2000x2000-jpg';
							_type: 'reference';
						};
					}
				];
				price: 199;
				slug: {
					_type: 'slug';
					current: '3700-eurotop';
				};
				tags: ['eurotop'];
				title: '3700 Eurotop';
			};
		},
		{
			_key: '3a29a188925c';
			_type: 'adustableBaseReference';
			adustableBase: {
				_createdAt: '2021-12-06T19:57:18Z';
				_id: 'cee9ae59-738d-4ecb-9617-42d40da49f45';
				_rev: 'O38NR4DOZRer0ZOoXQNawv';
				_type: 'adustableBase';
				_updatedAt: '2021-12-06T20:30:14Z';
				categories: [
					{
						_key: 'e3f66c4f2f62';
						_ref: 'a9b3f51e-d1b1-45db-9e36-f54698627a4c';
						_type: 'reference';
					}
				];
				features: [
					'Head up & foot up',
					'750lb lift capacity',
					'Zero clearance',
					'Syncing for split sizes',
					'Battery back-up power supply',
					'One-Touch flat bottom',
					'Wireless remote with built-in flashlight',
					'Post legs'
				];
				images: [
					{
						_key: 'f3e0f3b4aa8e';
						_type: 'image';
						asset: {
							_ref: 'image-f27c108085c3e0768ec67ad42e992d236c19c64e-900x600-jpg';
							_type: 'reference';
						};
					}
				];
				price: 599;
				slug: {
					_type: 'slug';
					current: 'adjustable-6210';
				};
				title: 'Adjustable 6210';
			};
		}
	];
	description: 'Sleep well tonight on one of our premium mattresses manufactured in the Pacific Northwest so we can off our customers factory direct, wholesale prices.';
	mainImage: {
		_type: 'mainImage';
		alt: 'A One Sleep Company premium mattress';
		asset: {
			_createdAt: '2021-12-06T15:48:26Z';
			_id: 'image-929bd2a654ad7add1ce233b0ee2500f5625dbdaa-700x700-jpg';
			_rev: 'SVWB3nzlMSR5ytjXe1T0RG';
			_type: 'sanity.imageAsset';
			_updatedAt: '2021-12-06T15:48:26Z';
			assetId: '929bd2a654ad7add1ce233b0ee2500f5625dbdaa';
			extension: 'jpg';
			metadata: {
				_type: 'sanity.imageMetadata';
				blurHash: 'emR3QOay%ft7xuofayWBayof~qofIUWVM{t7oft7ofRjD$fQt7f7xu';
				dimensions: {
					_type: 'sanity.imageDimensions';
					aspectRatio: 1;
					height: 700;
					width: 700;
				};
				hasAlpha: false;
				isOpaque: true;
				lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAEFAAAAAAAAAAAAAAAAAAUCBAYHCP/EACQQAAEEAQMDBQAAAAAAAAAAAAEAAgMFBAYRIQcUMhUiMUFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDpZ17XDJkx+5YZozs5m/IVXrOEPOZrf0rAOovT2ewyZLahndFnHl8e+weomm0NqLOijNllGBu3uBPKK3HBNHPEJIXtew/BB4RWVBWipqocNshkEY8j9oiJBERAREQf/9k=';
				palette: {
					_type: 'sanity.imagePalette';
					darkMuted: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#53504b';
						foreground: '#fff';
						population: 2.56;
						title: '#fff';
					};
					darkVibrant: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#54542f';
						foreground: '#fff';
						population: 0;
						title: '#fff';
					};
					dominant: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#53504b';
						foreground: '#fff';
						population: 2.56;
						title: '#fff';
					};
					lightMuted: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#cccca4';
						foreground: '#000';
						population: 0;
						title: '#fff';
					};
					lightVibrant: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#cfcfaa';
						foreground: '#000';
						population: 0;
						title: '#000';
					};
					muted: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#8c8e54';
						foreground: '#fff';
						population: 0.01;
						title: '#fff';
					};
					vibrant: {
						_type: 'sanity.imagePaletteSwatch';
						background: '#a3a35b';
						foreground: '#000';
						population: 0;
						title: '#fff';
					};
				};
			};
			mimeType: 'image/jpeg';
			originalFilename: 'IMG_1859.jpg';
			path: 'images/44nlqgvk/production/929bd2a654ad7add1ce233b0ee2500f5625dbdaa-700x700.jpg';
			sha1hash: '929bd2a654ad7add1ce233b0ee2500f5625dbdaa';
			size: 34520;
			uploadId: '8RNgHYG95VJsxF7oa9A859snkyfg7LbG';
			url: 'https://cdn.sanity.io/images/44nlqgvk/production/929bd2a654ad7add1ce233b0ee2500f5625dbdaa-700x700.jpg';
		};
	};
	slug: {
		_type: 'slug';
		current: 'mattresses';
	};
	subtitle: 'Do you prefer pillow-top or memory foam? Find out today by visiting a local showroom to discover the mattress that is right for you!';
	title: 'Mattresses';
}
