import { writable } from 'svelte/store';

export const siteData = writable({
	title: 'One Sleep Company'
});

export const locations = writable([
	{
		title: 'Sumner',
		address: '13704 24th St E, Ste A112',
		city: 'Sumner',
		state: 'WA',
		zip: 98390,
		phone: {
			areaCode: 253,
			three: 797,
			four: 8782
		},
		hours: 'By Appointment Only: 7 days a week, 9am-7pm',
		finance: 'https://sv1.americanfirstfinance.com/v2/kwik/3458'
	},
	{
		title: 'Tacoma',
		address: '5825 Tacoma Mall Blvd, Ste 102',
		city: 'Tacoma',
		state: 'WA',
		zip: 98409,
		phone: {
			areaCode: 253,
			three: 651,
			four: 5376
		},
		hours: 'By Appointment Only: 7 days a week, 9am-7pm',
		finance: 'https://sv1.americanfirstfinance.com/v2/kwik/2103'
	},
	{
		title: 'Kent',
		address: '10700 SE 208th, Ste 203',
		city: 'Kent',
		state: 'WA',
		zip: 98301,
		phone: {
			areaCode: 253,
			three: 651,
			four: 5376
		},
		hours: 'By Appointment Only: 7 days a week, 9am-7pm',
		finance: 'https://sv1.americanfirstfinance.com/v2/kwik/3396'
	},
	{
		title: 'Clackamas',
		address: '13057 SE 84th',
		city: 'Clackamas',
		state: 'OR',
		zip: 97015,
		phone: {
			areaCode: 503,
			three: 887,
			four: 7172
		},
		hours: 'By Appointment Only: 7 days a week, 9am-7pm',
		finance: 'https://sv1.americanfirstfinance.com/v2/kwik/8910'
	}
]);
