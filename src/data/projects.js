// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Contracting Company',
		category: 'Contracting',
		img: require('@/assets/images/Contracting.jpg'),
	},
	{
		id: 2,
		title: 'Real Estate company',
		category: 'Real Estate',
		img: require('@/assets/images/real-estate.webp'),
	},
	{
		id: 3,
		title: 'Mana Al-Sabti Food Company',
		category: 'Food',
		img: require('@/assets/images/Food.jpg'),
	},
	// {
	// 	id: 4,
	// 	title: 'Afzal Foodstuff Company',
	// 	category: 'Foodstuff',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	// {
	// 	id: 5,
	// 	title: 'Saleem company for nuts and fruits',
	// 	category: 'nuts and fruits',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'Mustafa car rental',
	// 	category: 'Cars',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
