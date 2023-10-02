let events2 = {
	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
	'2019-12-30': ['name4', 'name8', 'name9'],
	'2019-12-31': ['name2', 'name6'],
};
let itog = [];
for (let elem in events2){
	for (let one of events2[elem]){
			itog.push(
			{[elem]:  one}
		)
	}	
}
let events3 = [
	{
		date:  '2019-12',
		event: 'name1'
	},
	{
		date:  '2019-12',
		event: 'name2'
	},
	{
		date:  '2019-11',
		event: 'name3'
	},
	{
		date:  '2019-11',
		event: 'name4'
	},
	{
		date:  '2020-10',
		event: 'name5'
	},
	{
		date:  '2020-10',
		event: 'name6'
	},
	{
		date:  '2020-11',
		event: 'name5'
	},
	{
		date:  '2020-11',
		event: 'name6'
	},
	{
		date:  '2020-12',
		event: 'name7'
	},
	{
		date:  '2020-12',
		event: 'name8'
	},
	{
		date:  '2020-12',
		event: 'name9'
	},
];

let finish = {};
for (let elem of events3){
	if (!Object.keys(finish).includes(elem.date.slice(0, 4))){
		finish[elem.date.slice(0, 4)] = {};
	}
	if (!Object.keys(finish[elem.date.slice(0, 4)]).includes(elem.date.slice(-2))){
		finish[elem.date.slice(0, 4)][elem.date.slice(-2)] = [];
	}
	if (Object.keys(finish[elem.date.slice(0, 4)]).includes(elem.date.slice(-2))){
		finish[elem.date.slice(0, 4)][elem.date.slice(-2)].push(elem.event);
	}
}
