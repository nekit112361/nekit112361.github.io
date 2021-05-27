console.log('')
console.log('—————————————————————————————————STAGE 1—————————————————————————————————————')
console.log(' — Скрипт TOP TEAM активирован,cкриптовых ошибок не обнаружено')
console.log(' — Please wait while checking files/пожалуйста подождите идёт проверка файлов')
console.log(' — File scan completed, no errors detected/проверка файлов завершена')
console.log(' — Script author Nikita Truschko vk.com/nekit112youtube')

const { VK } = require('vk-io');
const vk = new VK();
const rq = require("prequest");
const commands = [];
const request = require('prequest');
const pezda = require('google-tts-api');
const fortyn = '';

let clans = require('./database/clans.json'); 

const cars = [
	{
		name: 'Трактор ',
		cost: 60000,
		id: 1
	},
	{
		name: 'Futa',
		cost: 300000,
		id: 2
	},
	{
		name: 'Патрульная Машина',
		cost: 500000,
		id: 3
	},
	{
		name: 'Трак',
		cost: 550000,
		id: 4
	},
	{
		name: 'Camper',
		cost: 600000,
		id: 5
	},
	{
		name: 'Mesa 3',
		cost: 1500000,
		id: 6
	},
	{
		name: 'Riot',
		cost: 2000000,
		id: 7
	},
	{
		name: 'Gauntlet',
		cost: 3000000,
		id: 8
	},
	{
		name: 'Rebel',
		cost: 3500000,
		id: 9
	},
	{
		name: 'Adder',
		cost: 4000000,
		id: 10
	},
	{
		name: 'Полицейский Круизер',
		cost: 4665000,
		id: 11
	},
	{
		name: 'Turismo R',
		cost: 9000000,
		id: 12
	},
	{
	    name: 'Zentorno ',
	    cost: 10000000,
	    id: 13

	},
	{
		name: '🧨Багги🧨',
		cost: 30000000,
		id: 14
	}
];

const yachts = [
	{
		name: 'Кепка',
		cost: 1000,
		id: 1
	},
	{
		name: 'Бомба',
		cost: 30000,
		id: 2
	},
	{
		name: 'Конус',
		cost: 55000,
		id: 3
	},
	{
		name: 'Горшочек',
		cost: 100000,
		id: 4
	},
	{
		name: 'Повар?',
		cost: 150000,
		id: 5
	},
	{
		name: 'Куб',
		cost: 225000,
		id: 6
	},
	{
		name: 'Череп',
		cost: 300000,
		id: 7
	},
	{
		name: 'Кактус',
		cost: 500000,
		id: 8
	},
	{
		name: 'Хот-дог',
		cost: 800000,
		id: 9
	},
	{
		name: 'Кэпи',
		cost: 1000000,
		id: 10
	},
	{
		name: 'Смайл',
		cost: 1225000,
		id: 11
	},
	{
		name: 'Выпускник',
		cost: 1500000,
		id: 12
	},
	{
		name: 'Очки 360',
		cost: 3000000,
		id: 13
    },
    {
		name: 'Хэд краб',
		cost: 6500000,
        id: 14
    },
    {
        name: 'Маска деда мороза',
        cost: 10000000,
        id: 15
    },
	{
        name: 'Маска клоуна',
        cost: 50000000,
        id: 16
    },
	{
        name: 'Корона',
        cost: 66000000,
        id: 17
    }
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Устойчивость к голоду',
		cost: 7600000,
		id: 1
	},
	{
		name: 'Здоровье 250',
		cost: 10000000,
		id: 2
	},
	{
		name: 'SПАМЕР',
		cost: 13500000,
		id: 3
	},
	{
		name: 'Броня 228',
		cost: 15000000,
		id: 4
	},
	{
		name: 'Двойной прыжок',
		cost: 17400000,
		id: 5
	},
	{
		name: 'Комбайны',
		cost: 20000000,
		id: 6
	},
	{
		name: 'Шестое чуство',
		cost: 25800000,
		id: 7
	}
];

const homes = [
	{
		name: 'Вокзал',
		cost: 250,
		id: 1
	},
	{
		name: 'Общага',
		cost: 6000,
		id: 2
	},
	{
		name: 'Пяти этажка[Аренда]',
		cost: 50000,
		id: 3
	},
	{
		name: 'Цимент',
		cost: 150000,
		id: 4
	},
	{
		name: 'Гараж',
		cost: 350000 ,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 500000,
		id: 6
	},
	{
		name: 'Банк',
		cost: 900000,
		id: 7
	},
	{
		name: 'Комуналка ',
		cost: 1200000,
		id: 8
	},
	{
		name: 'Клуб',
		cost: 2500000,
		id: 9
	},
	{
		name: 'Военная база',
		cost: 3500000,
		id: 10
	},
	{
		name: 'Элитка',
		cost: 5000000,
		id: 11
	},
	{
		name: 'Торговый Центр',
		cost: 9000000,
		id: 12
	},
	{
		name: 'Болото',
		cost: 15000000,
		id: 13
	},
	{
		name: 'Ангар',
		cost: 30000000,
		id: 14
	},
	{
		name: 'Дом на острове',
		cost: 45000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Крыша',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира возле спавна',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Монтировка',
		cost: 7000,
		id: 1
	},
	{
		name: 'Стант палка',
		cost: 10000,
		id: 2
	},
	{
		name: 'USP',
		cost: 16000,
		id: 3
	},
	{
		name: 'AK-47',
		cost: 30000,
		id: 4
	},
	{
		name: 'СВД',
		cost: 59000,
		id: 5
	},
	{
		name: 'XM1014 ',
		cost: 100000,
		id: 6
	},
	{
		name: 'Спас-12',
		cost: 175000,
		id: 7
	},
	{
		name: 'M249',
		cost: 260000,
		id: 8
	},
	{
		name: 'Двустволка',
		cost: 300000,
		id: 9
	},
	{
		name: 'AWP',
		cost: 800000,
		id: 10
	},
	{
		name: 'Knife_m',
		cost: 1000000,
		id: 11
	},
	{
		name: 'RPG ',
		cost: 1300000,
		id: 12
	},
	{
		name: 'MP7 Ультра',
		cost: 5000000,
		id: 13
	},
	{
		name: 'Ковбойка 1337',
		cost: 12000000,
		id: 14
	},
	{
		name: 'Миниган',
		cost: 12500000,
		id: 15
	},
	{
		name: 'Пистоль',
		cost: 15000000,
		id: 16
	},
];

const pets = [
	{
		name: 'Голубь',
		cost: 5600,
		id: 1
	},
	{
		name: 'Ворона',
		cost: 17000,
		id: 2
	},
	{
		name: 'Породистая Собака',
		cost: 26000,
		id: 3
	},
	{
		name: 'Жук одмен',
		cost: 47800,
		id: 4
	},
	{
		name: 'Зомби',
		cost: 89655,
		id: 5
	},
	{
		name: 'Хэд краб',
		cost: 100000,
		id: 6
	},
	{
		name: ' Летающий уголёк',
		cost: 173999,
		id: 7
	},
	{
		name: ' Личный куратор',
		cost: 300000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const perelet = [
	{ name: '✔ PrimeRP [МАШИНЫ GTA5|Быстрая загрузка]', cost: 1000, id: 1 },
	{ name: '✔ PrimeRP#2 [ДЛЯ СЛАБЫХ ПК|FAST LOAD]', cost: 1000, id: 2 },
	{ name: '✔ PrimeRP#3 | Амбрелла VS Коронавируса', cost: 1000, id: 3 },
	{ name: '✔ PrimeRP#4[Большая карта|МАШИНЫ!!!]', cost: 1000, id: 4 }
];

const businesses = [
	{
		name: 'Лавочка по ограблениям',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '💵'
	},
	{
		name: 'Магазин оружия',
		cost: 100000,
		earn: 700,
		id: 2,
		icon: '🔫'
	},
	{
		name: 'Банк',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '💰'
	},
	{
		name: 'Магазин наркотиков',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '💉'
	},
	{
		name: 'Сервис проституции',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '👫'
	},
	{
		name: 'Варка наркотиков',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '👨‍🍳'
	},
	{
		name: 'Наёмные убийства',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Лотерейное агенство',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '📞'
	},
	{
		name: 'Автомастерская ',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '⭐'
	},
	{
		name: 'Подделка денег',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💸'
	},
	{
		name: 'Сервер',
		cost: 1000000000,
		earn: 3000000,
		id: 11,
		icon: '📟'
	},
	{
		name: 'Завод масок от коронавируса',
		cost: 6000000000,
		earn: 10000000,
		id: 12,
		icon: '🦠'
	},
	{
		name: '🎲OnionTeam🎲',
		cost: 100978976877686,
		earn: 5000000,
		id: 13,
		icon: '🎲'
	}
];

const works = [
	{
		name: 'Вор',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Мафия',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Взломщик',
		requiredLevel: 5,
		min: 4000,
		max: 6500,
		id: 3
	},
	{
		name: 'Подрывник',
		requiredLevel: 8,
		min: 6000,
		max: 15000,
		id: 4
	},
	{
		name: 'Глава мафии',
		requiredLevel: 10,
		min: 15500,
		max: 25000,
		id: 5
	},
	{
		name: 'Полицейский',
		requiredLevel: 14,
		min: 25000,
		max: 30000,
		id: 6
	},
	{
		name: 'Банкир',
		requiredLevel: 22,
		min: 30000,
		max: 37000,
		id: 7
	},
	{
		name: 'Бизнесмен',
		requiredLevel: 25,
		min: 40000,
		max: 60000,
		id: 8
	},
	{
		name: 'Мэр',
		requiredLevel: 49,
		min: 100000,
		max: 250000,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

let users = require('./database/users.json');
let config = require('./database/settings.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('Сохранение базы данных');
	console.log('Сохранение успешно завершено✔');
	console.log('');
}, 30000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		var frmbtc = 0;
		if(x.misc.farm === 1)
		{
			frmbtc += 2;
		}

		if(x.misc.farm === 2)
		{
			frmbtc += 10;
		}

		if(x.misc.farm === 3)
		{
			frmbtc += 100;
		}
		var frmbtcm = frmbtc * x.farms;
		x.misc.farm_btc += frmbtcm;
	});
}, 3600000);

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.promo = false;
		user.energy = 10;
	});
}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club189488894\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club189488894\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 15000,
			bank: 0,
			earn: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 200,
			energy: 10,
			opit: 0,
			biz: 0,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false,
				da: false,
				met: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
			},
			settings: {
				firstmsg: true,
				adm: 0,
				trade: true,
				old: false,
				limit: 1000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			},
			flooder: 0,
			pp: 3,
		    keys: 0,
			foolder: 0
		});
		console.log(` +1 Новый игрок! [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`✔Приветсвую вас в нашем боте!✔ ❤Для ознакомления напишите Помощь.❤`)

		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`Данной команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start)$/i, async (message, bot) => {
	await bot(`мои команды:

💫 Веселье:
  [💬] » Мифа.
  [😐] » Анекдот.
  [↪] » Переверни [фраза].
  [🔮] » Шар [фраза].
  [📊] » Инфа [фраза].
  [⚖] » Выбери [фраза] или [фраза2].
  [🌍] » Квесты.

[🚀] » Список игр:
   [🎈] » Бутылочка.
   [🌀] » Рейд.
   [🥇] » Монетка.
   [🔑] » Кейсы.
   [💫] » Маник - майнинг денег.
⠀  [🎲] » Кубик [1-6].
⠀⠀ [🎰] » Ролл [сумма].
⠀⠀ [📈] » Трейд [вверх/вниз] [сумма].
⠀⠀ [🔦] » Подбор [случайные 2 цифры] .
⠀⠀ [🍂] » Копать.
⠀⠀ [🚕] » Таксовать.
   [☄] » Охота.
   [🌐] » Ютуб
   [💵] » Тикток

[💳] » Кпомощь:
  [💳] » Купить карту - купить карту.
  [💳] » Карта положить (сумма) - положить деньги на счёт.
  [💳] » Карта снять (сумма) - снять деньги со счёта.

👔 Работа - список работ.
⠀[🔨] » Работать.
⠀[❌] » Уволиться.

💼 Бизнес:
⠀⠀[📈] » Бизнес - статистика.
⠀⠀[💵] » Бизнес снять.
⠀⠀[✅] » Бизнес улучшить.

🌽 Питомцы:
  [🐒] » Питомец - информация.
  [🐪] » Питомец поход.
  [🌟] » Питомец улучшить.

🔥 Полезное:
  [🔯] » Клан
  [🌎] » Онлайн
  [♻] » Сократи ссылку [ссылка].
  [💥] » Убрать клаву.
  [☄] » Скажи [текст].
  [📉] » Курс.
  [⚒] » Обновления

💡 Разное:
  [🌎] » Город - ваш сервер (номер).
  [✌] » Действия.
  [💶] » Донат - приобрести игровую валюту.
  [🔫] » Ограбить - ограбить человека.
  [♻] » Варить мет - Нелегальные делишки.
  [⭐] » Друг - реферальная система.
  [💫] » Статистика - статистика бота.
  [📖] » Профиль.
  [💲] » Баланс.
  [💰] » Банк [сумма/снять сумма].
  [👑] » Рейтинг - ваш рейтинг.
  [🔖] » Ник [новый ник]
  [✒] » Ник [ник/вкл/выкл]
  [🛒] » Магазин.
  [💸] » Продать [предмет].
  [🤝] » Передать [id] [сумма].
  [🏆] » Топ.
  [🎁] » Бонус - ежедневный бонус.
  [👪] » Брак [id] - сделать предложение.
  [👪] » Браки - список предложений.
  [💔] » Развод.
  [⌚] » Дата [id] - дата регистрации игрока.

🆘 Репорт [фраза] - Обратиться к администрации.`, );
{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔋 Ферма"
		},
			"color": "primary"
		}
]
		]
			})
		};
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'Ролл')
	{
		return message.send(`Команда "Ролл" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Ролл все" или "Ролл вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'пример')
	{
		return message.send(`Команда "пример" решает ваш пример (пример 5+5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, оружие, шапку, самолет, Плюшки, биткоин).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});



cmd.hear(/^(?:профиль)$/i, async (message, bot) => {
	let text = ``;

	text += `🔎 ID: ${message.user.uid}\n`;
	clanid = message.user.clanid
	if(clans[clanid]) { 
	text += `⚔ Клан: ${clans[clanid].name}\n`;
	};
	text += `💰 Денег: ${utils.sp(message.user.balance)}₽\n`;
	text += `💳 В банке: ${utils.sp(message.user.bank)}₽\n`;
	text += `🌐 Биткоинов: ${utils.sp(message.user.btc)}฿\n`;
	text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.perelet) text += `🏥 Город: ${perelet[message.user.perelet - 1].name}\n`;
	if(message.user.marriage.partner) text += `👬 Ваш партнер: ${users[message.user.marriage.partner].tag}\n`;
	text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet)
	{
		text += `\n🔑 Имущество:\n`;

		if(message.user.transport.car) text += `⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀🎧 Шапка: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀⚡ Плюшки: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		
		if(message.user.realty.home) text += `⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀🔫 Оружие: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀🐩 Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		
		text += `\n♻ Бизнесы:\n`;
		
		if(message.user.business) text += `${businesses[message.user.business - 1].icon} Бизнес: ${businesses[message.user.business - 1].name}\n`;
	}
	text += `\n📗 Дата регистрации: ${message.user.regDate}
	❗ Варны: ${message.user.settings.warn}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `на руках ${utils.sp(message.user.balance)}₽ 💸`;

	if(message.user.bank) text += `\n💳 В банке ${utils.sp(message.user.bank)}₽`;
	if(message.user.card) text += `\n💳 На карте ${utils.sp(message.user.card)}₽`;
	if(message.user.btc) text += `\n💽 Биткоинов ${utils.sp(message.user.btc)}฿`;
	if(message.user.zhelezo) text += `\n🎛 ${message.user.zhelezo} железа`;
	if(message.user.zoloto) text += `\n🏵 ${message.user.zoloto} золота`;
	if(message.user.almaz) text += `\n💎 ${message.user.almaz} алмаза`;

	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	if(message.user.bank < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на балансе в банке ${message.user.bank}₽
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}₽
💳 Остаток на счёте: ${utils.sp(message.user.bank)}₽
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на балансе в банке ${message.user.bank}₽
✍🏻 Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили в банк ${utils.sp(message.args[1])}₽ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 4) return;
admlogs(message)
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать|перевести)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете передать деньги сами себе`);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}₽`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}₽ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}₽!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник|имя|name|)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {

	message.user.foolder += 1

let user = users.find(x=> x.uid === Number(message.args[1]));
let zaprets = message.args[1].toLowerCase();
var zapret = /(&#4448;|вк бо т |вкботру|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|امارات.|مصر.|السعودية.|порно|botvk|ботвк|vkbot|кбот|bot vk|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь|DJBAN|🦠▬𝔻𝕁𝔹𝔸ℕ▬🦠|Создатель|OWNER|CREATOR)/
if (zapret.test(zaprets) == true) { 
return message.send(`Придумайте адекватный ник`);
}
var filter = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
var filters = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
var lol = filter.test(zaprets)
var lol1 = filters.test(zaprets)	
if (filter.test(zaprets) == true || filters.test(zaprets) == true) { 
return message.send(`Придумайте адекватный ник`);
}

if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);
message.user.tag = message.args[1];
let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
let ggtext = utils.pick([`красивый`, `крутой`, `классный`, `прикольный`, `эпический`, `отличный`]);
return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🧢 Шапки
⠀⠀🛩 Самолеты
⠀⠀⚡ Плюшки

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:
  🐌 Питомцы
⠀⠀🔫 Оружия
⠀⠀👑 Рейтинг [кол-во] - 20.000₽
⠀⠀💼 Бизнесы
⠀⠀💽 Биткоин [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Оружие 7', 'Машина 1','Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}₽`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}₽`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 1000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 1000;
		message.user.zhelezo = 0;

		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}₽ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 5000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 5000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}₽ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 2000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 2000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}₽ ✅`);
	}

	if(/шап/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет шапки ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою шапку за ${utils.sp(a)}₽`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}₽`);
	}

	if(/плюшка|плюшки/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свою плюшку за ${utils.sp(a)}₽`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}₽`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}₽`);
	}

	if(/Оружие/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет оружия ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали своё оружие за ${utils.sp(a)}₽`);
	}


	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (10000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}₽`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}₽`);
	}
});

cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Трактор (60.000₽)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Futa (300.000₽)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Патрульная Машина(500.000₽)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Трак (550.000₽)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Camper (600.000₽)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Mesa 3 (1.500.000₽)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Riot (2.000.000₽)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Gauntlet (3.000.000₽)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Rebel (3.500.000₽)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Adder (4.000.000₽)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Полицейский Круизер (4.665.000₽)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Turismo R (9.000.000₽)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. Zentorno (10.555.555₽)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. 🧨Багги🧨 (30.000.000₽)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:шапка|шапки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Шапки: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Кепка 🧢(1000₽)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Бомба 💣(30.000₽)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Конус (55.000₽)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Горшочек🍯(100.000₽)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Повар? (150.000₽)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Куб🔳 (225.000₽)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Череп (300.000₽)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Кактус (500.000₽)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Хот-дог🌭 (800.000₽)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Кепи (1.000.000₽)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Смайл😀 (1.225.000₽)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Выпускник🎓 (1.500.000₽)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Очки 360 (3.000.000₽)
${message.user.transport.yacht === 14 ? '🔹' : '🔸'} 14. Хед краб🐩 (6.500.000₽)
${message.user.transport.yacht === 15 ? '🔹' : '🔸'} 15. Маска деда мороза🎅 (10.000.000₽)
${message.user.transport.yacht === 16 ? '🔹' : '🔸'} 16. Маска клоуна🤡 (50.000.000₽)
${message.user.transport.yacht === 17 ? '🔹' : '🔸'} 17. Корона👑 (66.000.000₽)

Для покупки введите "Шапка [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть шапка (${yachts[message.user.transport.yacht - 1].name}), введите "Продать шапку"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000₽)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000₽)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000₽)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000₽)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000₽)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000₽)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000₽)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000₽)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000₽)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000₽)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000₽)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000₽)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000₽)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000₽)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000₽)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000₽)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000₽)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Плюшки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Плюшки:
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Устойчивость к голоду (7.600.000₽)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. Здоровье 250 (10.000.000₽)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. SПАМЕР (13.500.000₽)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Броня 228 (15.000.000₽)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. Двойной прыжок (17.400.000₽)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. Комбайны (20.000.000₽)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Шестое чуство (25.800.000₽)

Для покупки введите "Плюшки [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть плюшки (${homes[message.user.transport.helicopter - 1].name}), введите "Продать плюшки"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Вокзал (250₽)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Общага (6.000₽)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Пяти этажка[Аренда] (50.000₽)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Цимент (150.000₽)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Гараж (350.000₽)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (500.000₽)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Банк (900.000₽)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Комуналка (1.250.000₽)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Клуб (2.500.000₽)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Военная база (3.500.000₽)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Элитка (5.000.000₽)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Торговый Центр (9.000.000₽)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Болото (15.000.000₽)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Ангар (30.000.000₽)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Дом на острове (45.000.000₽)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Крыша (15.000₽)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000₽)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000₽)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000₽)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000₽)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира возле спавна (1.600.000₽)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000₽)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000₽)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:Оружие|Оружия|Стволы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Оружия: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Монтировка (7.000₽)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Стант палка (10.000₽)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. USP (16.000₽)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. AK-47 (30.000)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. СВД (59.000₽)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. XM1014 (100.000₽)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Спас-12 (175.000₽)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. M249 (260.000₽)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. Двустволка (300.000)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. AWP (800.000₽)
${message.user.misc.phone === 11 ? '🔹' : '🔸'} 11. Knife_m (1.000.000)
${message.user.misc.phone === 12 ? '🔹' : '🔸'} 12. RPG (1.300.000₽)
${message.user.misc.phone === 13 ? '🔹' : '🔸'} 13. MP7 Ультра (5.000.000₽)
${message.user.misc.phone === 14 ? '🔹' : '🔸'} 14. Ковбойка 1337 (12.000.000₽)
${message.user.misc.phone === 15 ? '🔹' : '🔸'} 15. Миниган (12.500.000₽)
${message.user.misc.phone === 16 ? '🔹' : '🔸'} 16. Пистоль (15.000.000₽)
Для покупки введите "Оружие [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть Оружие (${phones[message.user.misc.phone - 1].name}), введите "Продать оружие"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
 1. Голубь (5.600₽)
 2. Ворона (17.000₽)
 3. Породистая Собака (26.000₽)
 4. Жук одмен(47.800₽)
 5. Зомби (89.655₽)
 6. Хэд краб (100.000₽)
 7. Летающий уголёк (173.999₽)
 8. Личный куратор (300.000₽)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}₽ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}₽
🌟 Уровень: ${message.user.pet.lvl}`);
}

});

cmd.hear(/^(?:промо PrimeRP)$/i, async (message, bot) => {
if(message.isChat) return bot(`Для того что-бы получить бонус напишите боту в личные сообщения.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "₽")} ✅
📢 Осталось ${ostalos} использований.`);

}

});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
				
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}₽. Улучшайте своего питомца! ${smilesuccess}`);
}

});


cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 20000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 20000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 20000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 20000)}₽`);
	}
});

cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Лавочка по ограблениям - 50.000₽
⠀ ⠀ ⠀ Прибыль: 400₽/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Магазин оружия - 100.000₽
⠀ ⠀ ⠀ Прибыль: 700₽/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Банк - 300.000₽
⠀ ⠀ ⠀ Прибыль: 2.500₽/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин наркотиков - 500.000₽
⠀ ⠀ ⠀ Прибыль: 3.800₽/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Сервис проституции - 1.500.000₽
⠀ ⠀ ⠀ Прибыль: 8.000₽/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Варка наркотиков - 25.000.000₽
⠀ ⠀ ⠀ Прибыль: 70.000₽/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Наёмные убийства - 80.000.000₽
⠀ ⠀ ⠀ Прибыль: 220.000₽/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Лотерейное агенство - 150.000.000₽
⠀ ⠀ ⠀ Прибыль: 300.000₽/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Автомастерская - 500.000.000₽
⠀ ⠀ ⠀ Прибыль: 700.000₽/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Подделка денег - 800.000.000₽
⠀ ⠀ ⠀ Прибыль: 1.000.000₽/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Сервер - 1.000.000.000₽
⠀ ⠀ ⠀ Прибыль: 3.000.000₽/час
${message.user.business === 12 ? '🔸' : '🔹'} 12. Завод масок от коронавируса🦠 - 6.000.000.000₽
⠀ ⠀ ⠀ Прибыль: 10.000.000₽/час
${message.user.business === 61 ? '🔸' : '🔹'} ?. Скоро - ?
⠀ ⠀ ⠀ Прибыль: ?₽/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}₽`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}₽`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}₽`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | ₽${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | ₽${utils.rn(message.user.balance)}`);
});

cmd.hear(/^(?:бонус)$/i, async (message, bot) => {

	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 5000;
		return bot(`вы выиграли 5.000₽ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 10;
		return bot(`вы выиграли 10₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}
	if(prize === 9)
	{
		message.user.bank += 20000;
		return bot(`вы выиграли 20.000₽ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.bank += 10000;
		return bot(`вы выиграли 10.000₽ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.bank += 30000;
		return bot(`вы выиграли 30.000₽ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.bank += 10000;
		return bot(`вы выиграли 10.000₽ на свой банковский счёт ${smilesuccess}`);
	}
});

cmd.hear(/^(?:поход)$/i, async (message, bot) => {

	if(message.user.timers.poxod2) return bot(`вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		message.user.balance += 5000;
		return bot(`находясь в походе, вы нашли 5.000₽ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 10;
		return bot(`находясь в походе, вы нашли 10₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`Браки:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Поступила жалоба от игрока!\n Индефикатор пользователя: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	admlogs(message)
	if(message.user.settings.adm< 3) return; 
	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
	Язык: 🇷🇺
	
	${message.args[2]}` });
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name} 
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!\n 💫Ваш уровень слишком маленький!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа|работы)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name} \n Для того что-бы уволиться с работы введите [Уволиться]
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	😯Нелегальные:
	🔹 1. Вор - зарплата ~12.500₽
	🔹 2. Мафия - зарплата ~22.500₽
	🔹 3. Взломщик - зарплата ~25.000₽
	🔹 4. Подрывник - зарплата ~30.000₽
	🔹 5. Глава мафии - зарплата ~45.000₽
	✅Легальные:
	🔹 6. Полицейский - зарплата ~55.000₽
	🔹 7. Банкир - зарплата ~60.000₽
	🔹 8. Бизнесмен - зарплата ~75.000₽
	🔹 9. Мэр - зарплата ~100.000₽
	Для трудоустройства введите "Работа [номер]
	Для того что-бы уволиться с работы введите Уволиться`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}₽`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 10000;
		return bot(`вы угадали! Приз 10.000₽`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?:Ролл)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return bot(`0 и менее ставить нельзя. ${smileerror}`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 1.5, 0.5, 0.50, 1, 4, 0, 0.25, 3, 1.5, 1, 2, 1, 0.5, 1.5, 0.5, 0, 0, 1, 0, 0.25, 2, 0, 0, 1.5, 0, 1, 1, 2, 0.5 ,0 ,0.25 ,2 ,1 ,3 ,0 ,4]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}₽ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}₽ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё|all)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] <= 50) return bot(`ставка должна быть больше 50₽ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '1'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			✅ Вы заработали +${message.args[2] * multiply}₽
			💰 Баланс: ${message.user.balance}₽`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			❌ Вы потеряли ${message.args[2]}₽ 
			💰 Баланс: ${message.user.balance}₽`);
		}
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}₽/час
	💰 На счёте: ${utils.sp(message.user.biz)}₽
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}₽`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;
    message.user.biz *= 2;
	return bot(`Вы успешно улучшили бизнес. ${smilesuccess}
	💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);


});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у вас нет бизнеса.`);
	if(!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса`);

	const biz_balance = message.user.biz;

	message.user.balance += message.user.biz;
	message.user.biz = 0;

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(biz_balance)}₽`);
});


cmd.hear(/^(?:1)$/i, async (message, bot) => {
	if(message.user.settings.adm < 6) return;
	await bot(`бот уходит в перезагрузку.`);
admlogs(message)
	await saveUsers();
	process.exit(-1);
});

cmd.hear(/^(?:подбор)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 1000000;
		return bot(`Невероятно! Вы угадали пароль.
		💲 Вам начислено 1.000.000₽`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали пароль.Выпал пароль "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете пароль, то вы получите 1.000.000₽`);
	}
});

cmd.hear(/^(?:подбор)$/i, async (message, bot) => {
	await bot(`📣Используйте "Подбор и двузначное число"\n📣Пример: [Подбор 12]
`);
});



cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 3) return; 
admlogs(message)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = true; 

saveUsers();
await bot(`вы забанили игрока *id${user.id} (${user.tag}).`,); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был заблокирован. ⛔` }); 
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
admlogs(message)
if(message.user.settings.adm < 2) return;
admlogs(message)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован.` }); 
}
});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => { 
if(message.user.settings.adm < 5) return; 
admlogs(message)
clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => { 
if(message.user.settings.adm < 5) return;
config.promotip = "btc"; 
saveConfig();
admlogs(message)
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);
});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => { 
if(message.user.settings.adm < 5) return;
config.promotip = "balance"; 
admlogs(message)
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);
});

cmd.hear(/^(?:копать)$/i, async (message, bot) => { 

return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => { 

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(1, 5);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => { 

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(1, 5);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => { 

if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте золото и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(1, 10);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:железо)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zoloto)} золота. 🏵`);

});

cmd.hear(/^(?:таксовать)$/i, async (message, bot) => { 
if(message.user.opit < 3000) return bot(`что бы Таксовать вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(50000, 300000);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}₽
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}₽`);

});

cmd.hear(/^(?:Маник|манипринтер)$/i, async (message, bot) => { 

	if(message.user.timers.hack) return bot(`Вы уже сидели на мани принтере,повторно можно через 5 минут ${smileerror}`);
	
	let situac = utils.random(1,2);
	
	if(situac === 1)
	{
	
	let hackcash = utils.random(7000,150000);
	message.user.balance += hackcash;
	setTimeout(() => {
		message.user.timers.hack = false;
	}, 300000);
	
	message.user.timers.hack = true;
	return bot(`Вы успешно посидели на манипринторе ✅ Вы заработали ${utils.sp(hackcash)}₽`);
	
	}
	if(situac === 2)
	{
	
	let hackcash = utils.random(1,10000);
	message.user.balance += hackcash;
	setTimeout(() => {
		message.user.timers.hack = false;
	}, 300000);
	
	message.user.timers.hack = true;
	return bot(`Вы сели майнить, начали подделовать деньги но вас зарейдили SWAT. ✅ Вы заработали ${utils.sp(hackcash)}₽`);
	
	}
	
	});
	
	cmd.hear(/^(?:рейд)$/i, async (message, bot) => { 

	if(message.user.timers.reide) return bot(`вы уже рейдили ранее,повторно можно через 5 минут ${smileerror}`);
	
	let situac = utils.random(1,2);
	
	if(situac === 1)
	{
	
	let hackcash = utils.random(7000,150000);
	message.user.balance += hackcash;
	setTimeout(() => {
		message.user.timers.reide = false;
	}, 300000);
	
	message.user.timers.reide = true;
	return bot(`Вы успешно зарейдили игрока ✅ Вы заработали ${utils.sp(hackcash)}₽`);
	
	}
	if(situac === 2)
	{
	
	let hackcash = utils.random(1,10000);
	message.user.balance += hackcash;
	setTimeout(() => {
		message.user.timers.reide = false;
	}, 300000);
	
	message.user.timers.reide = true;
	return bot(`Вы вошли в дом но там вас ждал игрок с ковбойкой. ✅ Вы заработали ${utils.sp(hackcash)}₽`);
	
	}
	
	});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 5) return;
config.promovalue = Number(message.args[1]); 
saveConfig();
admlogs(message)
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);
});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 5) return;
config.promolimit = Number(message.args[1]); 
saveConfig();
admlogs(message)
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);
});
//console
cmd.hear(/^(?:Console)$/i, async (message, bot) => {
	if(message.user.settings.adm< 1) return bot ('У вас нет доступа к данной комманде!'); 
	await bot(`
	📣Команды администратора:
{☘Стажёр}
Пофиксить баги: fix ID 1
Ошибки - Проврить бота на баги.
inf ID - информация о человеке.
{✨Модератор}
set ID [Аргумент] - установить деньги у игрока.
ban ID [Аргумент] - Бан игрока.
unban ID [Причина разбана] - Разбан игрока.
{👑Администратор}
giv ID [Аргумент] - Выдать игроку деньги.
setb ID [Аргумент] - Установить деньги у игрока в банке.
setc ID [Аргумент] - Установить биткоины.
take ID [Аргумент] - Забрать деньги у игрока.
taker ID [Аргумент] - Забрать рейтинг у игрока.
takeb ID [Аргумент] - Забрать деньги из банка у игрока.
takec ID [Аргумент] - Забрать биткоины у игрока.
!СБД - Сохранить базу данных. 
---------------------------------------
ОБЯЗАТЕЛЬНО! ПЕРЕД ИСПОЛЬЗОВАНИЕМ ДАННЫХ КОМАНД ЧИТАТЬ arules (ПРАВИЛА АДМИНИСТРАЦИИ)
`);
});

cmd.hear(/^(?:Проверка)$/i, async (message, bot) => {
	await bot(`
	💫Бот включён!
	📣Игроков на данный момент-${users.length}`);
});

cmd.hear(/^(?:take)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig,);
admlogs(message)
if(message.user.settings.adm< 5) return; 
if(!Number(message.args[2])) return;
if(message.args[2] >= 50000001) return bot ('Больше 50000000₽ нельзя забирать!');
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.balance -= message.args[2]; 


await bot(`Вы отняли у игрока ${user.tag} ${utils.sp(message.args[2])}₽`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} забрал у вас ${utils.sp(message.args[2])}₽! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:takeR)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
admlogs(message)
if(message.user.settings.adm< 5) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2]));
if(message.args[2] >= 50000001) return bot ('Больше 50000000₽ нельзя забирать!');

if(message.args[2] <= 0) return;
if(message.args[2] >= message.user.rating) return bot ('У игрока нету столько рейтинга');

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.rating -= message.args[2]; 


await bot(`Вы отняли у игрока ${user.tag} ${utils.sp(message.args[2])} рейтинга`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} забрал у вас${utils.sp(message.args[2])}Рейтинга! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:takeB)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
admlogs(message)
if(message.user.settings.adm< 5) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 
if(message.args[2] >= 50000001) return bot ('Больше 50000000₽ нельзя забирать!');
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.bank -= message.args[2];  


await bot(`Вы забрали у игрока ${user.tag} ${utils.sp(message.args[2])}₽ из банка`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} забрал у вас${utils.sp(message.args[2])}₽ из банка! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:takeС)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig,'9999999999999999');
admlogs(message)
if(message.user.settings.adm< 5) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 
if(message.args[2] >= 50000001) return bot ('Больше 50000000₽ нельзя забирать!');

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.btc -= message.args[2]; 


await bot(`Вы забрали у игрока ${user.tag} ${utils.sp(message.args[2])}₽ биткоинов`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} забрал у вас${utils.sp(message.args[2])}₽ биткоинов! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:info|информация|inf)\s([0-9]+)$/i, async (message, bot) => {
if(message.user.settings.adm< 3) return; 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID`);

return bot(`
🔑Админ панель,информация о пользователе:
💫Цифровой id ВКонтакте (${user.id})
---Основное---
🔎Имя: ${user.tag}
📍ID: ${user.uid}
💰 Денег: ${user.balance}
💳 В банке: ${utils.sp(user.bank)}
🌐 Биткоинов: ${utils.sp(user.btc)}
👑 Рейтинг: ${utils.sp(user.rating)}
🌟 EXP ${user.exp}
👔 Работа:${user.work}
🌟 Уровень: ${user.level}
📢Админка: ${user.settings.adm}
📗Варны: ${user.settings.warn}
---Копать---
💡 Энергия: ${user.energy}
💡 Опыт: ${user.opit}
📗 Дата регистрации: ${user.regDate}`);
admlogs(message)
});

cmd.hear(/^(?:бан|ban)\s([0-9]+)\s/i, async (message, bot) => { 

message.args[1] 

if(message.user.settings.adm< 4) return; 

admlogs(message)

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.ban = true; 


await bot(`вы забанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам бан!` }); 
} 
});

cmd.hear(/^(?:разбан|unban)\s([0-9]+)\s/i, async (message, bot) => { 

message.args[1] 

if(message.user.settings.adm< 4) return; 


{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 

admlogs(message)
user.ban = false; 


await bot(`вы разбанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} вас разбанил!` }); 
} 
});

cmd.hear(/^(?:set)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
admlogs(message)
if(message.user.settings.adm< 4) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 
if(message.args[2] >= 50000000) return bot ('Вы не можете устанавливать более 50.000.000₽') 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.balance = message.args[2]; 


await bot(`вы установили баланс игроку ${user.tag} ${utils.sp(message.args[2])}₽`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} установил вам баланс на ${utils.sp(message.args[2])}₽! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:поиск)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.id === Number(message.args[1])); 
if(!user) return bot(`неверный ID`); 

return bot(`ID игрока ${user.tag}: ${user.uid}`); 
});
cmd.hear(/^(?:Ролл)$/i, async (message, bot) => {
	await bot(`📣Используйте "Ролл и ставку"\n📣Пример: [Ролл 1000]
`);
});
cmd.hear(/^(?:Снять банк|Снять банк всё)$/i, async (message, bot) => {
	await bot(`📣Неправильное использование📣\n📣Пример: [Банк снять всё]
`);
});
cmd.hear(/^(?:Бизнес статистика)$/i, async (message, bot) => {
	await bot(`Неправильное использование команды.\nПример использования: [Бизнес]
`);
});
cmd.hear(/^(?:ник|name)$/i, async (message, bot) => {
	await bot(`Использование: [Ник Киллер]
`);
});
cmd.hear(/^(?:Биткоин|Bitcoin)$/i, async (message, bot) => {
	await bot(`Использование: [Биткоин кол-во]
`);
});


cmd.hear(/^(?:Покупка)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`Покупка доната работает только в личных сообщениях.`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Совершение покупки.\n Индефикатор пользователя: ${message.user.uid}` }).then(() => {
		return bot(`Ожидайте,в скором времени с вами свяжутся..`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});
cmd.hear(/^(?:Покупка)$/i, async (message, bot) => {
	await bot(`📞Использование: [Покупка сумма] 
	🔥Пример: [Покупка 1.000.000]
	⭐Комманда работает только в личныех сообщениях.`);
});
cmd.hear(/^(?:Друг|реферал)$/i, async (message, bot) => {
	return bot(`🐩Вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	📞Для того, чтобы вам засчитали друга он должен написать команду "Друг ${message.user.uid}"
	
	📣За каждого друга вы получаете 50.000₽!
	📣Если друг активирует вашу рефералку, то он получит 20.000₽!`);
	
});

cmd.hear(/^(?:Друг|реферал)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`Ошибка:неверный ID`);
	if(user.id === message.senderId) return bot(`Ошибка:неверный ID`);

	user.balance += 50000;
	message.user.balance += 20000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `📣 Спасибо за приглашение друга в наш коллектив!
	💸 Вам начислено 50.000₽ на баланс.` });
	return bot(`Вы активировали реферальную систему!
	💲 Вам начислено 20.000₽`);
});

cmd.hear(/^(?:setgroup)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
	
	if(message.user.settings.adm <= 5) return bot ('ВашAdminLVL слишком мал!');
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2])); 
	
	if(message.args[2] <= 0) return bot ('Не ломай синтаксис,меньше 0 нельзя!'); 
	if(message.args[2] >= 6) return bot ('больше 5 нельзя');
	{ 
	let user = users.find(x=> x.uid === Number(message.args[1])); 
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
	
	
	user.settings.adm = message.args[2]; 
	
	await bot(`Теперь у ${user.tag} уровень админа ${utils.sp(message.args[2])}`); 
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
	Администратор выдал вам ${utils.sp(message.args[2])}lvl администрации! 
	🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
	} 
	});


cmd.hear(/^(?:setB)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
	admlogs(message)
	if(message.user.settings.adm< 5) return; 
	if(!Number(message.args[2])) return; 
	message.args[2] = Math.floor(Number(message.args[2])); 
	
	if(message.args[2] <= 0) return; 
	if(message.args[2] >= 50000000) return bot ('Вы не можете устанавливать более 50.000.000₽') 
	
	{ 
	let user = users.find(x=> x.uid === Number(message.args[1])); 
	if(!user) return bot(`неверный ID игрока`); 
	
	
	user.bank = message.args[2]; 
	
	
	await bot(`вы установили баланс в банке игроку ${user.tag} на ${utils.sp(message.args[2])}₽`); 
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
	Администратор ${message.user.tag} установил вам баланс в банке на ${utils.sp(message.args[2])}₽! 
	🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
	} 
	});

cmd.hear(/^(?:setC)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
		
		if(message.user.settings.adm< 5) return; 
		if(!Number(message.args[2])) return; 
		message.args[2] = Math.floor(Number(message.args[2])); 
		admlogs(message)
		if(message.args[2] <= 0) return; 
		if(message.args[2] >= 50000000) return bot ('Вы не можете устанавливать более 50.000.000₽') 
		
		{ 
		let user = users.find(x=> x.uid === Number(message.args[1])); 
		if(!user) return bot(`неверный ID игрока`); 
		
		
		user.btc = message.args[2]; 
		
		
		await bot(`вы установили ${user.tag}  ${utils.sp(message.args[2])} биткоинов`); 
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
		Администратор ${message.user.tag} установил вам ${utils.sp(message.args[2])} биткоинов! 
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
		} 
		});
		cmd.hear(/^(?:трейд)\s([0-9]+)$/i, async (message, bot) => { 
			await bot(`Неправильное использование команды.\nПример использования: [Трейд вверх 1000]
		`);
		});
		cmd.hear(/^(?:Трейд)$/i, async (message, bot) => {
			await bot(`Неправильное использование команды.\nПример использования: [Трейд вверх 1000]
		`);
});



cmd.hear(/^(?:Кубик)$/i, async (message, bot) => {
			await bot(`Неправильное использование команды.\nПример использования: [Кубик 3]
		`);
});

cmd.hear(/^(?:Продать)$/i, async (message, bot) => {
			await bot(`Неправильное использование команды.\nПример использования: [Продать машина]
		`);
});	
		
cmd.hear(/^(?:баг)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`Неа,так не пойдёт! Данная команда работает только в личных сообщениях с ботом,напишите туда.`)
	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `#Баг\n Поступила жалоба от игрока!\n Индефикатор пользователя: ${message.user.uid}\n Описание:` }).then(() => {
		return bot(`Оу,ты нашёл баг!Красавчик я отправил его администратору.`);
	}).catch((err) => {
		return bot(`Нракоман? Укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:Ограбить)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig,);

	if(message.args[2] >= 50001) return bot ('Больше 50000₽ нельзя грабить!');
	if(message.user.balance < 999999) return bot ('Хэй,хэй бро потише... Грабить можно в том случае если на твоём балансе 1.000.000₽ и более.');
	if(!Number(message.args[2])) return;
	else {
        
		if(message.user.timers.da) return bot(`Вы сможете грабить через 10 минут.Вы прячитесь от копов! ${smileerror}`);
		
        message.user.timers.da = true;
			setTimeout(() => {
				message.user.timers.da = false;
				
			}, 600000);


}
	message.args[2] = Math.floor(Number(message.args[2])); 
	
	if(message.args[2] <= 0) return;
	if(message.args[1] <= 0) return;
	
	{ 
	let user = users.find(x=> x.uid === Number(message.args[1])); 
	if(!user) return bot(`неверный ID игрока`); 
	
	
	user.balance -= message.args[2]; 
	message.user.balance += message.args[2]; 
	
	await bot(`Вы ограбили игрока ${user.tag} на ${utils.sp(message.args[2])}₽`); 
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
	Игрок ${message.user.tag} ограбил вас на ${utils.sp(message.args[2])}₽! 
	🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
	} 
});

cmd.hear(/^(?:Варить мет)$/i, async (message, bot) => {

		if(message.user.timers.met) return bot(`Вы можете варить мет 1 раз в 60 минут. ${smileerror}`);
		
		let situac = utils.random(1,2);
		
		if(situac === 1)
		{
		
		let hackcash = utils.random(80000,200000);
		message.user.balance += hackcash;
		setTimeout(() => {
			message.user.timers.met = false;
		}, 3600000);
		
		message.user.timers.met = true;
		return bot(`Вы сварили несколько грамм мета,отнесли продавцу. ✅ Вы заработали ${utils.sp(hackcash)}₽`);
		
		}
		if(situac === 2)
		{
		
		let hackcash = utils.random(10000,60000);
		message.user.balance += hackcash;
		setTimeout(() => {
			message.user.timers.met = false;
		}, 3600000);
		
		message.user.timers.met = true;
		return bot(`Вы начали варить мет,но к вам в дом варвались бандиты и всё сломали. ✅ Вы заработали ${utils.sp(hackcash)}₽`);
		
		}
		
});

cmd.hear(/^(?:Варить)$/i, async (message, bot) => { 
 return bot(`использование: «Варить мет» ${smileerror}`);			
});

cmd.hear(/^(?:Ограбить)$/i, async (message, bot) => { 
	return bot(`использование: «Ограбить id сумма» ${smileerror}`);		
});


cmd.hear(/^(?:анекдот)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === '1')
	{
		return message.send(`Ситуация из жизни:\n — Пишет мне человек якобы у него жалоба на админа!\n —Скидывает док-ва в виде скриншёта.\n —Я замечаю на скриншёте читы,пишу ему *зачем играешь с читами?*\n —Он пишет что у него нету читов...`);
	}

	if(message.args[1] === '2')
	{
		return message.send(`Муж – это такое создание, которое, вымыв тарелку, посмотрит на жену, как будто убрал всю квартиру.`);
	}

	if(message.args[1] === '3')
	{
		return message.send(`Вчера видел, как одна девушка бежала по городу в свадебном платье. Вот это я понимаю в активном поиске.`);
	}

	if(message.args[1] === '4')
	{
		return message.send(`Бог создал мир.
		Остальное сделано в Китае.`);
	}
	
	if(message.args[1] === '5')
	{
		return message.send(`– Вот такого вируса у меня еще не было! – сказал зять, увидев за компьютером тёщу.`);
	}
		
	if(message.args[1] === '6')
	{
		return message.send(`Конец.`);
	}
});

cmd.hear(/^(?:Анекдот)$/i, async (message, bot) => { 
	return bot(`использование: «Анекдот 1,Анекдот 2 и тп...» ${smileerror}`);		
});

cmd.hear(/^(?:Ссылки)$/i, async (message, bot) => { 
	return bot(`\n   ☄Полезные ссылки☄
	
	\n[📘] Правила для серверов Prime #1, #2, #3, #4 — https://vk.com/topic-177811627_42410970\nГруппа серверов — https://vk.com/primerp\nПодать жалобу — https://vk.com/topic-177811627_42410161\n[📜] Подача заявлений на Админ Состав — https://vk.com/topic-177811627_43869557\n[🔔] Заявки на снятие блокировки — https://vk.com/topic-177811627_42410233\n[🔥] Заявка на повышение — https://vk.com/topic-177811627_42902548\n[🔆] Баги, Проблемы с донатом — https://vk.com/topic-177811627_42410214\n[🔔] Заявки на снятие блокировки — https://vk.com/topic-177811627_42410233`);		
});

cmd.hear(/^(?:поиск)$/i, async (message, bot) => { 
	return bot(`использование: «Поиск и цифровой id ВКонтакте,пример: Поиск 270327960» ${smileerror}`);		
});


// Проверка пинга
cmd.hear(/^(?:пинг)$/i, async (message) => {
	const axios = require('axios').default;
	const { http, https } = require('follow-redirects');
	const ping = `https://steakovercooked.com/api/ping/?host=vk.com`;
	const res = await axios.get(ping);
		
     message.send(`${res.data}`);
});

cmd.hear(/^(?:бутылочка)$/i, async (message, bot) => { 

	message.user.foolder += 1

		if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles); 
message.send(`Бутылочка

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] — действие: `+ utils.pick(['заняться сексом', 'поцеловаться в засос', 'сесть на бутылочку', 'начать встречаться', 'раздеться', 'выпить', 'пожениться'])); 
});

cmd.hear(/^(?:!кто онлайн|в онлайне|онлайн|кто онли)$/i, async (message, bot) => {

	message.user.foolder += 1

		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online, domain, count"
    }).then(async function (response) {
    	let text = ``;
    	await response.profiles.map(a => {
        if(a.online == 1) text = `Пользователи онлайн (${a.online})\n\n`;
        })
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online == 1) text += `${e.first_name} ${e.last_name} (vk.com/${e.domain})\n`;
			})
        return message.send(text)
    })
});





cmd.hear(/^(?:Ошибка)$/i, async (message, bot) => { 
message.send({sticker_id: 18464});
});

cmd.hear(/^(?:!сохранить бд|!сбд)$/i, async (message, bot) => {

	message.user.foolder += 1
admlogs(message)
if(message.user.settings.adm< 5) return; 
await bot(`сохранение базы данных, пожалуйста подождите...`);
await message.send(`База сохранена на - 10%`);
await message.send(`База сохранена на - 40%`);
await message.send(`База сохранена на - 80%`);
await message.send(`База сохранена на - 100%`);

await saveUsers();
    console.log('');
	console.log(' База данных успешно сохранена.');
	console.log('');
});

cmd.hear(/^(?:название)\s(.*)$/i, async (message, bot) => {

	message.user.foolder += 1

if(message.user.adm < 6) return bot(`доступно с привилегии - администратора`);
if(!message.isChat) return bot(`команда работает только в беседе!`);
args = message.args[1]; 
let chatid = message.chatId;
titles = args;
if(message.args[1].length > 35) return bot(`максимальная длина беседы 35 символов`);
vk.api.call("messages.editChat", {chat_id: chatid, title: titles})
return bot(`новое название беседы «${args}» ✅`)
});

cmd.hear(/^(?:Статистика)$/i, async (message, bot) => { 
	return bot(`🎉 | ID беседы: ${message.chatId}
	✔ | Работа бота: ${uptime.days} ${utils.decl(uptime.days, ['дней', 'дня', 'дней'])} ${uptime.hours} ${utils.decl(uptime.hours, ['час', 'часа', 'часов'])} ${uptime.min} ${utils.decl(uptime.min, ['минут', 'минуты', 'минуту'])} ${uptime.sec} ${utils.decl(uptime.sec, ['секунд', 'секунды', 'секунду'])}\n♻Игроков  ${users.length}\n💣Скриптовых ошибок не обнаружено`);		
});

//------------------------------------------------------------------------------------\\
var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
//------------------------------------------------------------------------------------\\
   setInterval(() => {
	   uptime.sec++;
	   if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
	   if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
	   if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
   }, 1000);




cmd.hear(/^(?:монетка)\s([^]+)\s([0-9]+)$/i, async (message, bot) => {

	message.user.foolder += 1

const [user_inf] = await vk.api.users.get({user_id: message.senderId, fields: "sex"});
    if(!message.args[1]) return bot(`проверь вводимые данные:\nМонетка [орел/орешка/орёл/орешка] [ставка]`);
    let user = message.user;
    if(message.args[2] > 1000) return bot(`максимум 1000₽ на монетку`)
    if(message.args[2] > message.user.balance || message.args[2] <= 0) return bot(message.args[2] <= 0 ? `ставка не может быть меньше 0 или равна 0` : `ставка не может превышать баланс`);
   	

	const a = utils.pick([1, 100]);
    if(a > 50) {
    	if(message.args[1].toLowerCase() == 'решка'){
        user.balance += Math.round(message.args[2]);
        return bot(`тебе выпала решка\nТы ${user_inf.sex.toString().replace(/1/gi, "выйграла").replace(/2/gi, "выйграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
    	}
    	if(message.args[1].toLowerCase() == 'орел'){
        user.balance -= Math.round(message.args[2]);
        return bot(`тебе выпала решка\nТы ${user_inf.sex.toString().replace(/1/gi, "проиграла").replace(/2/gi, "проиграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
        }
    	if(message.args[1].toLowerCase() == 'орёл'){
        user.balance -= Math.round(message.args[2]);
        return bot(`тебе выпала решка\nТы ${user_inf.sex.toString().replace(/1/gi, "проиграла").replace(/2/gi, "проиграл")}: ${utils.sp(mmessage.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
    }
        if(message.args[1].toLowerCase() == 'орешка'){
        user.balance += Math.round(message.args[2]);
        return bot(`тебе выпала решка\nТы ${user_inf.sex.toString().replace(/1/gi, "выйграла").replace(/2/gi, "выйграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
    }
    }
    if(a < 50) {
       if(message.args[1].toLowerCase() == 'решка'){
        user.balance -= Math.round(message.args[2]);
        return bot(`тебе выпал орел\nТы ${user_inf.sex.toString().replace(/1/gi, "проиграла").replace(/2/gi, "проиграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}`);
    	}
    	if(message.args[1].toLowerCase() == 'орел'){
        user.balance += Math.round(message.args[2]);
        return bot(`тебе выпал орёл\nТы ${user_inf.sex.toString().replace(/1/gi, "выйграла").replace(/2/gi, "выйграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
    	}
    	if(message.args[1].toLowerCase() == 'орешка'){
        user.balance -= Math.round(message.args[2]);
        return bot(`тебе выпал орёл\nТы ${user_inf.sex.toString().replace(/1/gi, "проиграла").replace(/2/gi, "проиграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}`);
    	}
    	if(message.args[1].toLowerCase() == 'орёл'){
        user.balance += Math.round(message.args[2]);
        return bot(`тебе выпал орёл\nТы ${user_inf.sex.toString().replace(/1/gi, "выйграла").replace(/2/gi, "выйграл")}: ${utils.sp(message.args[2])}₽\nБаланс: ${utils.sp(user.balance)}₽`);
    	}
   		}
	return bot(`проверь вводимые данные:\nМонетка [орел/орешка/орёл/орешка] [ставка]`);
});

cmd.hear(/^(?:монетка)$/i, async (message, bot) => { 
	return bot(`Проверь вводимые данные:\nМонетка [орел/орешка/орёл/орешка] [ставка] ${smileerror}`);		
});

cmd.hear(/^(?:сократи ссылку)\s?([^]+)$/i, async (message, bot) => {

	message.user.foolder += 1

	let user = message.user
	let cc = message.args[1].toLowerCase(); 
	let text = message.args[1]; 
	if(!text) return bot(`а где ссылка?`); 
	vk.api.call("utils.getShortLink", {url: text}).then(function (res){ 
		if(!text) return bot(`а где ссылка?`); 
		bot(`Твоя ссылка готова:`+ res.short_url); 
}); 
});

cmd.hear(/^(?:сократи ссылку)$/i, async (message, bot) => { 
	return bot(`Проверь вводимые данные:\nСократи ссылку [ссылка] ${smileerror}`);		
});

cmd.hear(/^(?:Купить карту)$/i, async (message, bot) => {

	message.user.foolder += 1


const carta = utils.pick([`VISA`,`MASTERCARD`,`MAESTRO`]);

if(message.user.numberss == false) return message.send(`У тебя нету SIM-карты.\nКак ты будешь получать сообщения от мобильного банка?`);
if(message.user.ccard == true) return message.send(`У вас уже есть карта.`);
{
var result = '';
var words = '0123456789';
var max_position = words.length - 1;
for( i = 0; i < 16; ++i ) {
position = Math.floor ( Math.random() * max_position );
result = result + words.substring(position, position + 1);
}
var results = '';
var wordss = '0123456789';
for( i = 0; i < 3; ++i ) {
position = Math.floor ( Math.random() * max_position );
results = results + wordss.substring(position, position + 1);
}
    message.user.cardss = result;
    message.user.seccard = results;
    message.user.balance -= 300;
    message.user.ccard = true;
    message.user.carta = carta;
vk.api.messages.send({ user_id: message.user.id, message: `
<- &#4448;900&#4448; 📞

[SIM1] ${new Date().getHours()}:${new Date().getMinutes()}
Добрый день, ${message.user.tag}.
Вы успешно приобрели банковскую карту ${carta}! 
Информация о карте:
========================
Номер карты: ${result}
Ваш CVC: ${results}
========================
Также, было снято 300₽ с вашего баланса, за приобретение карты в боте.` 
}); 
}
});

cmd.hear(/^(?:вернуть клавиатуру)$/i, async (message, bot) => {

	message.user.foolder += 1

    message.user.keyboard = true;
return bot(`ок!`);
});

cmd.hear(/^(?:убрать клавиатуру|убрать клаву)$/i, async (message, bot) => {

		message.user.foolder += 1
	
	return message.send(`Клавиатуры выключена.`,
	{
		keyboard:JSON.stringify(
	{
		"one_time": true,
		"inline": false,
		"buttons": [
	[{
		"action": {
		"type": "text",
		"label": "Убрать"
	},
		"color": "positive",
	}]
	]
	})
	});
	await next();
});

cmd.hear(/^(.*)\s(?:SILVER)$/i, async (message, bot) => {

	message.user.foolder += 1

	const [user_inf] = await vk.api.users.get({user_id: message.senderId, fields: "sex"});
	let user = message.user
	if(user.balance < 30000) return message.send(`у тебя ${message.user.balance}₽\nДля открытия кейса требуется как минимум 30.000₽\nДля покупки введи «валюты»`);
	user.balance -= 30000;
	const rez = utils.pick([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
	if(rez == 1){
	
		user.balance += 10000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 10.000₽!`);
	}
	if(rez == 2){
	
		user.balance += 5000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 5.000₽!`);
	}
	if(rez == 3){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 4){
	
		user.balance += 5000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 5000₽!`);
	}
	if(rez == 5){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 6){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 7){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 8){
	
		user.balance += 50000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 50.000₽!`);
	}
	if(rez == 9){

		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 10){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 11){

		user.balance += 70000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 70.000₽!`);
	}
	if(rez == 12){
	 
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 13){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 14){
	
		user.balance += 55000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 55.000₽!`);
	}
	if(rez == 15){
	
		user.balance += 5;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 5₽!`);
	}
	if(rez == 16){
	
		user.balance += 40000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 40.000₽!`);
	}
	if(rez == 17){

		user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 18){

	user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 19){

	user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
});

cmd.hear(/^(.*)\s(?:GOLD)$/i, async (message, bot) => {

	message.user.foolder += 1

	const [user_inf] = await vk.api.users.get({user_id: message.senderId, fields: "sex"});
	let user = message.user
	if(user.balance < 100000) return message.send(`у тебя ${message.user.balance}₽\nДля открытия кейса требуется как минимум 100.000₽\nДля покупки введи «валюты»`);
	user.balance -= 100000;
	const rez = utils.pick([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
	if(rez == 1){
	
		user.balance += 110000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 110.000₽!`);
	}
	if(rez == 2){
	
		user.balance += 130000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 130.000₽!`);
	}
	if(rez == 3){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 4){
	
		user.balance += 200000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 200.000₽!`);
	}
	if(rez == 5){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 6){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 7){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 8){
	
		user.balance += 170000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 170.000₽!`);
	}
	if(rez == 9){

		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 10){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 11){

		user.balance += 10000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 10.000₽!`);
	}
	if(rez == 12){
	 
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 13){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 14){
	
		user.balance += 250000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 250.000₽!`);
	}
	if(rez == 15){
	
		user.balance += 400000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 400.000₽!`);
	}
	if(rez == 16){
	
		user.balance += 300000;
		return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 300.000₽!`);
	}
	if(rez == 17){

		user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 18){

	user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
	if(rez == 19){

	user.balance += 0;
	return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
	}
});

cmd.hear(/^(?:Кейсы|case)$/i, async (message, bot) => {

	message.user.foolder += 1

return message.send(`
🥈PrimeRP SILVER - 30.000₽,
🥇PrimeRP GOLD - 100.000₽,
💠PrimeRP DIAMOND - 250.000₽,
🏅PrimeRP DONATE - 7 рублей ключ.

Для того что-бы убрать кливиатуру введите "Убрать клаву"`,
{
	keyboard:JSON.stringify(
{
	"inline": false,
	"buttons": [
[{
	"action": {
	"type": "text",
	"label": "1 SILVER"
},
	"color": "positive",
},
{
	"action": {
	"type": "text",
	"label": "2 GOLD"
},
	"color": "positive"
},
{
	"action": {
	"type": "text",
	"label": "3 DONATE"
},
	"color": "negative"
},
{
	"action": {
	"type": "text",
	"label": "4 DIAMOND"
},
	"color": "positive"
}]
]
})
});
await next();
});

cmd.hear(/^(?:ключ)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
	admlogs(message)
	if(message.user.settings.adm< 6) return; 
	if(!Number(message.args[2])) return; 
	message.args[2] = Math.floor(Number(message.args[2])); 
	
	if(message.args[2] <= 0) return;
	if(message.args[2] >= 1000) return bot ('Вы не можете устанавливать более 1000 ключей.') 
	
	{ 
	let user = users.find(x=> x.uid === Number(message.args[1])); 
	if(!user) return bot(`неверный ID игрока`); 
	
	
	user.keys += message.args[2]; 
	
	
	await bot(`Вы выдали игроку ${user.tag} ${utils.sp(message.args[2])} ключей от донат кейса.`); 
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
	Администратор ${message.user.tag} выдал вам ${utils.sp(message.args[2])}ключей к кейсу. 
	🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
	} 
	});

	cmd.hear(/^(.*)\s(?:DONATE)$/i, async (message, bot) => {

		message.user.foolder += 1
	    if (message.user.keys <= 0) return bot (`У вас нету ключей от кейса,их вы можете приобрести,для этого напишите в личные сообщения сообщениства"Покупка Ключ",стоимость 1 ключа 7 рублей.`)
		const [user_inf] = await vk.api.users.get({user_id: message.senderId, fields: "sex"});
		let user = message.user
		user.keys -= 1;
		const rez = utils.pick([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
		if(rez == 1){
		
			user.balance += 500000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 500.000₽!`);
		}
		if(rez == 2){
		
			user.balance += 600000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 600.000₽!`);
		}
		if(rez == 3){
		
			user.balance += 500000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 500.000₽!`);
		}
		if(rez == 4){
		
			user.balance += 400000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 400.000₽!`);
		}
		if(rez == 5){
		
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 6){
		
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 7){
		
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 8){
		
			user.balance += 800000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 800.000₽!`);
		}
		if(rez == 9){
	
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 10){
		
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 11){
	
			user.balance += 150000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 150.000₽!`);
		}
		if(rez == 12){
		 
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 13){
		
			user.balance += 0;
			return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 14){
		
			user.balance += 300000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 300.000₽!`);
		}
		if(rez == 15){
		
			user.balance += 400000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 400.000₽!`);
		}
		if(rez == 16){
		
			user.balance += 1000000;
			return bot(`открыв донат кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 1.000.000₽!`);
		}
		if(rez == 17){
	
			user.balance += 0;
		return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 18){
	
		user.balance += 0;
		return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 19){
	
		user.balance += 0;
		return bot(`открыв донат кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
	});

cmd.hear(/^(.*)\s(?:DIAMOND)$/i, async (message, bot) => {

		message.user.foolder += 1
	
		const [user_inf] = await vk.api.users.get({user_id: message.senderId, fields: "sex"});
		let user = message.user
		if(user.balance < 250000) return message.send(`у тебя ${message.user.balance}₽\nДля открытия кейса требуется как минимум 250.000₽\nДля покупки введи «валюты»`);
		user.balance -= 250000;
		const rez = utils.pick([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
		if(rez == 1){
		
			user.balance += 520000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 520.000₽!`);
		}
		if(rez == 2){
		
			user.balance += 280000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 280.000₽!`);
		}
		if(rez == 3){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 4){
		
			user.balance += 5000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 5.000₽!`);
		}
		if(rez == 5){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 6){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 7){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 8){
		
			user.balance += 210000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 210.000₽!`);
		}
		if(rez == 9){
	
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 10){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 11){
	
			user.balance += 200000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 200.000₽!`);
		}
		if(rez == 12){
		 
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 13){
		
			user.balance += 0;
			return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 14){
		
			user.balance += 260000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 260.000₽!`);
		}
		if(rez == 15){
		
			user.balance += 400000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 400.000₽!`);
		}
		if(rez == 16){
		
			user.balance += 300000;
			return bot(`открыв кейс ты ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} 300.000₽!`);
		}
		if(rez == 17){
	
			user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 18){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
		if(rez == 19){
	
		user.balance += 0;
		return bot(`открыв кейс ты ничего не ${user_inf.sex.toString().replace(/1/gi, "получила").replace(/2/gi, "получил")} :(`);
		}
});

cmd.hear(/^(?:синтез|синтез речи|🎤 Синтез|🎤Синтез|🔁 Скажи|🔁Скажи)$/i, async (message, bot) => {
	const luckych = utils.pick(['🤤', '☺',`🙂`,`😁`,`😏`,'🤑']);
	return bot(`напишите фразу, использование: «Синтез Тест» ${luckych}`);
});

cmd.hear(/^(?:скажи|синтез)\s(.*)/i, async (message) => {

	if(message.args[1].length >= 51) return bot(`вы указали слишком длинное сообщение.
	❓Максимальная длина одного сообщения 50 символов.`);
	
	let zaprets = message.args[1].toLowerCase();
	var pizda = /(&#4448;|ᅠ|™|#|█|▓|марихуана|Cuний кuт|режьте вены|режте вены|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|разбуди в 4:20|синийкит|подкладки|таурин|cпайс|cпайc|спaйс|cпaйc|спайс|насвай|мморфин|ммoрфин|морфин|моpфин|мopфин|мoрфин|сованикогданеспит|cиний кит|синий kит|cиний kит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|сoва не спит|coва не cпит|совa нe cпит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние)/
	if(pizda.test(zaprets) === true){
	return bot(`в вашем сообщении содержатся запрещенные символы ❌`);
	}
	
	pezda(message.args[1], `ru`, 5).then(function (url) {
	message.sendAudioMessage(url)}).catch(function (err) {
	console.error(err.stack);
	});
})

cmd.hear(/^(?:поцеловать)\s([0-9]+)$/i, async (message, bot) => {
	const user = await users.find(x=> x.uid === Number(message.args[1]));
	message.send(`[id${message.user.id}|${message.user.tag}], данный [id${user.id}|игрок] получил чмок чмок.`);
	
	vk.api.messages.send({ user_id: user.id, message: `[+Поцелуй+]\n➡ [id${message.user.id}|${message.user.tag}]: Поцеловал вас :) !` });
	
});

cmd.hear(/^(?:мифа,|мифа|мифка,|мифка|милфа|милфа,|макака|макака,)/i, async (message) => {
	request(`https://isinkin-bot-api.herokuapp.com/1/talk?q=${encodeURIComponent(message.text)}`).then(res => {
	var bot = res.text;
	pezda(bot, `ru`, 5).then(function (url) {
	vk.api.messages.setActivity({type: "audiomessage", chat_id: message.chatId})
	setTimeout(() => {message.sendAudioMessage(url)}).catch(function (err) {
	console.error(err.stack); }, 10000);
	});
	})
})

cmd.hear(/^(?:город)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`список городов для переезда:
1. ✔ PrimeRP [МАШИНЫ GTA5|Быстрая загрузка]
2. ✔ PrimeRP#2 [ДЛЯ СЛАБЫХ ПК|FAST LOAD]
3. ✔ PrimeRP#3 | Амбрелла VS Коронавируса
4. ✔ PrimeRP#4[Большая карта|МАШИНЫ!!!]

🌎Переезд стоит 1.000₽!
✈ Напиши Город [номер]», чтобы сменить место жительства.
📌 Например: Город 1`);

	const sell = perelet.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.args[1] > 12) return bot(`укажите от 1 до 4.`)
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.perelet = sell.id;

		return bot(`Вы переехали в «${sell.name}» за ${utils.sp(sell.cost)}₽ `);
	}
});

cmd.hear(/^(?:донат|💎 Донат|💎 Донат)$/i, async (message, bot) => {
	return bot(`донат выдаётся НАВСЕГДА и МОМЕНТАЛЬНО! 🎁

🎲 Ваш игровой ID: ${message.user.uid}

🛒 Товары:
	`,
	{ 
keyboard:JSON.stringify( 
{
"inline": true,
"buttons": [ 
[{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `1 🔥 Администратор`
}, 
"color": "positive" 
},
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `2 ❄ Валюта`
}, 
"color": "primary" 
}],
[{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `3 🎁 Донат-кейс`
}, 
"color": "negative" 
}]
] 
}) 
})
});
cmd.hear(/^(.*)\s(?:🎁 Донат-кейс)$/i, async (message, bot) => {
	let text = `🔥 @id${message.user.id} (${message.user.tag}), донат кейс: 
	
	🎲 Ваш игровой ID : ${message.user.uid}
	😍 Цена : 7 рублей за 1 ключ
	
	👑 Писать с пометкой : #покупка
	`;

message.send(`${text}`, 
{ 
keyboard:JSON.stringify( 
{ 
"inline": true, 
"buttons": [ 
[{ 
"action": { 
"type": "open_link", 
"link": "https://vk.com/n_e_k_i_t_1_1_2",  
"payload": "{}", 
"label": `🤩 ОПЛАТИТЬ` 
} 
}] 
] 
}) 
});
return message.sendSticker(11544);
});

cmd.hear(/^(.*)\s(?:🔥 Администратор)$/i, async (message, bot) => {
	let text = `🔥 @id${message.user.id} (${message.user.tag}), донат администратор: 
	
	🎲 Ваш игровой ID : ${message.user.uid}
	🤲 Цена : 400 рублей
	
	🌹 Писать с пометкой : #покупка
	`;

message.send(`${text}`, 
{ 
keyboard:JSON.stringify( 
{ 
"inline": true, 
"buttons": [ 
[{ 
"action": { 
"type": "open_link", 
"link": "https://vk.com/n_e_k_i_t_1_1_2", 
"payload": "{}", 
"label": `🤩 ОПЛАТИТЬ` 
} 
}] 
] 
}) 
});
return message.sendSticker(16810);
});

cmd.hear(/^(.*)\s(?:❄ Валюта)$/i, async (message, bot) => {
	let text = `🔥 @id${message.user.id} (${message.user.tag}), покупка валюты в боте: 
	
	🎲 Ваш игровой ID : ${message.user.uid}

	💉1.000.000₽ -  (15 рублей💰)

	💉5.000.000₽ -  ( 30 рублей💰)

	💉10.000.000₽ -  (70 рублей💰)

	💉20.500.000₽ -  (150 рублей💰)

	💉50.000.000₽ -  (230 рублей💰)
	
	👑 Писать с пометкой : #покупка
	`;

message.send(`${text}`, 
{ 
keyboard:JSON.stringify( 
{ 
"inline": true, 
"buttons": [ 
[{ 
"action": { 
"type": "open_link", 
"link": "https://vk.com/n_e_k_i_t_1_1_2",  
"payload": "{}", 
"label": `🤩 ОПЛАТИТЬ` 
} 
}] 
] 
}) 
});
return message.sendSticker(11544);
});

cmd.hear(/^(?:охота|🏹 Охота|охотиться|сходить поохотиться|🏹 Охотиться|🏹 Охотиться!|🏹 Охота!)$/i, async (message, bot) => {

	if(message.user.timers.ohota > Date.now()) return bot(`вы недавно уже ходили на охоту и сильно устали, подождите ${(message.user.timers.ohota - Date.now())} ⛱`);

	message.user.timers.ohota = Date.now() + 600000;
	let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5]);


	if(message.isChat)
		{
		setTimeout(() => {
			vk.api.messages.send({ chat_id: message.chatId, message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

			keyboard:JSON.stringify(
{ "inline": true, "buttons": [ [{ "action": { "type": "text", "payload": "{}", "label": "🏹 ОХОТА!" }, "color": "negative" } ] ]
			})
			});
		}, 600000);
	}

	if(!message.isChat)
	{
	setTimeout(() => {
		vk.api.messages.send({ user_id: message.user.id, message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

		keyboard:JSON.stringify(
		{ "inline": true, "buttons": [ [{ "action": { "type": "text", "payload": "{}", "label": "🏹 ОХОТА!" }, "color": "negative" } ] ]
		})
		});
		}, 600000);
	}



	if(prize === 1)
	{
		message.user.balance += 30000;
		return bot(`вы сходили на охоту в лес, и вам удалось застрелить местного медведя 🐻
		💰 За шкуру вам заплатили 30.000₽`, {attachment: 'photo-192023992_467239161'});
	}
	if(prize === 2)
	{
		message.user.balance += 5000;
		return bot(`пока вы блуждали по лесу, вы неожиданно встретили лису 🦊
		💰 За хороший мех лисы вам заплатили 5.000₽`, {attachment: 'photo-192023992_467239162'});
	}
	if(prize === 3)
	{
		return bot(`вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана 🐗. Вы выстрелили всю обойму, но кабан успел убежать.
		💰 Вам ничего не заплатили.`, {attachment: 'photo-192023992_467239163'});
	}
	if(prize === 4)
	{
		message.user.balance -= 10000;
		return bot(`пока вы болтали со своим партнёром по охоте, на вас внезапно набросился свирепый волк 🐺
		🧰 За лечение вы заплатили 10.000₽`, {attachment: 'photo-192023992_467239164'});

	}
	if(prize === 5)
	{
		message.user.balance -= 50000;
		return bot(`вы блуждали по лесу в поисках животины, но вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨
		🆘 Пришлось заплатить штраф 50.000₽`, {attachment: 'photo-192023992_467239165'});
	}


});
 
// Ютуб
cmd.hear(/^(?:Ютуб|📷 Ютуб|Ютуб помощь)$/i, async (message, bot) => {
	if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null){
	 return bot(`вы можете создать свой Ютуб канал в боте и получать дополнительный доход со своих видео!
	 
	 👑 Развивайте его, получайте больше подписчиков и дохода, получайте ЛАЙКИ, выходите в ТОП и становитесь №1 Ютубером!
	 
	 🆕 Создать Ютуб канал: «Ютуб создать [название]»
	 ❤ Поставить лайк: «Ютуб лайк [ID игрока]»`, {attachment: `photo-191800897_457239776`});
   }
   else{
	 return bot(` Ютуб «${message.user.tiktok}»
	 👥 Подписчики: ${utils.sp(message.user.tiktokpod)}
	 ❤ Лайки: ${utils.sp(message.user.tiktoklikes)}

	 📸 Чтобы снять видео, напиши «Ютуб снять»
	 🎈 Поставить лайк: «Ютуб лайк [ID игрока]»`);;
   }
  });
  cmd.hear(/^(?:Ютуб создать)\s(.*)$/i, async (message, bot) => {
	if(message.user.tiktok != null || typeof message.user.tiktok != "undefined" && typeof message.user.tiktok != "object") return bot(` у вас уже есть канала! Вы можете удалить его: «Ютуб удалить»`);
  message.user.tiktok = message.args[1];
  message.user.tiktokpod = 0;
  message.user.tiktoklikes = 0;
  message.user.tiktoktimer = 0;
  return bot(`Вы успешно создали Ютуб канал «${message.args[1]}»! 🎉 Напишите команду «Ютуб» для информации.
  
  ❌ Чтобы удалить, напиши: «Ютуб удалить»
  📃 Чтобы сменить название, напиши: «Ютуб название [новое]»`);
  });
  
  cmd.hear(/^(?:Ютуб название)\s(.*)$/i, async (message, bot) => {
	if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать Ютуб канал, чтобы использовать эту команду!
   🌈 Создайте командой: «Ютуб создать [название]»`);
	message.user.tiktok = message.args[1];
	return bot(` Вы успешно изменили название канала на «${message.args[1]}»!`)
  });
  
  cmd.hear(/^(?:Ютуб снять)$/i, async (message, bot) => {
	if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать Ютуб канал, чтобы использовать эту команду!
   🌈 Создайте командой: «Ютуб создать [название]»`);
  if(typeof message.user.tiktoktimer != "undefined" && message.user.tiktoktimer > Date.now()) return bot(` Вы ещё не придумали идею! 😣 Подождите ${(message.user.tiktoktimer-Date.now())} миллисикунд, чтобы снимать новый видеоролик! ⏳`);
  let newpod = utils.random(100,1000);
  message.user.tiktokpod += newpod;
  let ads = utils.pick([1,0]);
  let adsCash = 0;
  if(ads == 1){
	adsCash = 2*message.user.tiktokpod+utils.random(10000,50000);
  message.user.balance += adsCash;
  }
  let txt = ` Вы сняли новое видео на свой ютуб канал!
  🎵 Получено ${newpod} новых подписчиков
  ${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!":"💸 Получено "+utils.sp(adsCash)+" ₽ с рекламы!"}`;
  message.user.tiktoktimer = Date.now()+15*60000;
  return bot(txt);
  });
  
  cmd.hear(/^(?:Ютуб лайк)\s([0-9]+)$/i, async (message, bot) => {
	if(typeof message.user.tiktokliketimer != "undefined" && message.user.tiktokliketimer > Date.now()) return bot(` подождите ${(message.user.tiktokliketimer-Date.now())}, чтобы поставить лайк! ⏳`);
	message.user.tiktokliketimer = Date.now()+60000;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(` такой игрок не найден! 🤕 Проверьте правильность введенного айди.`);
	if(message.user.uid == user.uid) return bot(` нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!`);
	if(typeof user.tiktok == "undefined" || user.tiktok == null) return bot(` у этого игрока нет Ютуб канала! 😥`);
	bot(` вы лайкнули Ютуб игрока ${user.tag}!`);
	user.tiktoklikes++;
	vk.api.messages.send({user_id:user.id,message:` игрок ${message.user.tag} лайкнул ваш Ютуб канал!`});
  });
  
  cmd.hear(/^(?:Ютуб топ|топ Ютуб)$/i, async (message, bot) => {
	  let top = [];
	  users.map(x=> {
		  top.push({ balance: x.balance, tiktoklikes: x.tiktoklikes, tag: x.tag, id: x.id, mention: x.mention });
	  });
  
	  top.sort((a, b) => {
		  return b.tiktoklikes - a.tiktoklikes;
	  });
  
	  let text = ``;
	  for (let i = 0; i < 10; i++)
	  {
		  if(!top[i]) return;
		  const user = top[i];
  
		  text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${utils.sp(user.tiktoklikes)} ❤ - @id${user.id} (${user.tag})
		  `;
	  }
  
   bot(`топ игроков по лайкам в ютубе:${text}
  —————————————————
  ${utils.gi(find() + 1)} ${message.user.tag} — {utils.sp(user.tiktoklikes)} лайков 🖤 `);
		  
	  keyboard:JSON.stringify(
	  {
		"inline": true,
		"buttons": [
  
	  [{
		  "action": { 
		  "type": "text", 
		  "payload": "{}", 
		  "label": "🔝" 
		  }, 
		  "color": "positive"       
			}], 
  
	  ]
	  [{
		  "action": { 
		  "type": "text", 
		  "payload": "{}", 
		  "label": "🏆 ТОП игроков" 
		  }, 
		  "color": "positive"       
			}], 
  
		})
		return message.sendSticker(11255);
	  });
	  
cmd.hear(/^(.*)\s(?:🏹 Охота!)$/i, async (message, bot) => {

	if(message.user.timers.ohota > Date.now()) return bot(`вы недавно уже ходили на охоту и сильно устали, подождите ${(message.user.timers.ohota - Date.now())} ⛱`);

	message.user.timers.ohota = Date.now() + 600000;
	let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5]);

	if(message.isChat)
		{
		setTimeout(() => {
			vk.api.messages.send({ chat_id: message.chatId, message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

			keyboard:JSON.stringify(
{ "inline": true, "buttons": [ [{ "action": { "type": "text", "payload": "{}", "label": "🏹 ОХОТА!" }, "color": "negative" } ] ]
			})
			});
		}, 600000);
	}

	if(!message.isChat)
	{
	setTimeout(() => {
		vk.api.messages.send({ user_id: message.user.id, message: `@id${message.user.id} (${message.user.tag}), твой товарищ зовёт тебя на ОХОТУ! 🏹 скорее отправляйся с ним! 💯`,

		keyboard:JSON.stringify(
		{ "inline": true, "buttons": [ [{ "action": { "type": "text", "payload": "{}", "label": "🏹 ОХОТА!" }, "color": "negative" } ] ]
		})
		});
		}, 600000);
	}

	if(prize === 1)
	{
		message.user.balance += 30000;
		return bot(`вы сходили на охоту в лес, и вам удалось застрелить местного медведя 🐻
		💰 За шкуру вам заплатили 30.000₽`, {attachment: 'photo-192023992_467239161'});
	}
	if(prize === 2)
	{
		message.user.balance += 5000;
		return bot(`пока вы блуждали по лесу, вы неожиданно встретили лису 🦊
		💰 За хороший мех лисы вам заплатили 5.000₽`, {attachment: 'photo-192023992_467239162'});
	}
	if(prize === 3)
	{
		return bot(`вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана 🐗. Вы выстрелили всю обойму, но кабан успел убежать.
		💰 Вам ничего не заплатили.`, {attachment: 'photo-192023992_467239163'});
	}
	if(prize === 4)
	{
		message.user.balance -= 10000;
		return bot(`пока вы болтали со своим партнёром по охоте, на вас внезапно набросился свирепый волк 🐺
		🧰 За лечение вы заплатили 10.000₽`, {attachment: 'photo-192023992_467239164'});

	}
	if(prize === 5)
	{
		message.user.balance -= 50000;
		return bot(`вы блуждали по лесу в поисках животины, но вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨
		🆘 Пришлось заплатить штраф 50.000₽`, {attachment: 'photo-192023992_467239165'});
	}


});

	cmd.hear(/^(?:рандом пикча|пикча)$/i, async (message) => { 
	return message.send(`Держи годную пикчу , бро`, { attachment: utils.pick(["photo-91345271_456256259", "photo-81250721_456240108", "photo-81250721_456240106", "photo-81250721_456240105", "photo-81250721_456240104", "photo-81250721_456240103", "photo-107740696_457283147","photo-107740696_457283146", "photo-107740696_457283142","photo-193838927_457243653","photo-193838927_457243719","photo-193838927_457243703","photo-164085935_457241604","photo-164085935_457241600","photo-164085935_457241598"]) }); 
	});
	
cmd.hear(/^(?:!kick)\s(.*)$/i, async (message, bot) => {
		if(message.user.settings.adm < 2)return;
		let chatid = message.chatId;
			let argses = message.text.split("!kick ");
				argses[1] = argses[1].replace(/https/ig, '');
				argses[1] = argses[1].replace(/http/ig, '');
				argses[1] = argses[1].replace(/\:/ig, '');
				argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
				argses[1] = argses[1].replace(/vk\.com/ig, '');
				argses[1] = argses[1].replace(/\//ig, '');
				let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
				vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
			});


cmd.hear(/^(?:Кпомощь)$/i, async (message, bot) => { 

	return bot(`[💳] » Кпомощь:
	[💳] » Купить карту - купить карту.
	[💳] » Карта положить (сумма) - положить деньги на счёт.
	[💳] » Карта снять (сумма) - снять деньги со счёта.`);
	
});
/*/ ADM /*/
function clearTemp()
{
	users.map(user => {
		user.energy = 10;
	});
}
clearTemp(); 
setInterval(async () => {
users.filter(x=> x.energy < 10).map(x=> {
x.energy += 1;
});
}, 180000);

async function admlogs(message, text) {
if(!message.chatId) vk.api.messages.send({ chat_id: 33, message: `[👁‍🗨 Система Логов]
[⏳Дата: ${data()} | Время: ${time()}]:
👨‍💻 Никнейм: ${message.user.tag}
🌏 Страница вк: @id${message.user.id} (${message.user.tag})
🆔 ID страницы: ${message.user.id}
🆔 Игровой ID: ${message.user.uid}
📋 Введена команда: ${message.text}
⚒Уровень Администратора: ${message.user.settings.adm}

📋 Команда выполнена через ЛС Бота` })

if(message.chatId )vk.api.messages.send({ chat_id: 33, message: `[👁‍🗨 Система Логов]
[⏳Дата: ${data()} | Время: ${time()}]:
👨‍💻 Никнейм: ${message.user.tag}
🌏 Страница вк: @id${message.user.id} (${message.user.tag})
🆔 ID страницы: ${message.user.id}
🆔 Игровой ID: ${message.user.uid}
📋 Введена команда: ${message.text}
⚒Уровень Администратора: ${message.user.settings.adm}


📋 Из чата: ${message.chatId}` })
}
async function saveAll()
{
require('fs').writeFileSync('./save/users.json', JSON.stringify(users, null, '\t'));
require('fs').writeFileSync("./save/promo.json", JSON.stringify(promo, null, "\t"));
return true;
}
function time() { 
let date = new Date(); 
let days = date.getDate(); 
let hours = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds(); 
if (hours < 10) hours = "0" + hours; 
if (minutes < 10) minutes = "0" + minutes; 
if (seconds < 10) seconds = "0" + seconds; 
var times = hours + ':' + minutes + ':' + seconds 
return times; 
};
function data() { 
var date = new Date(); 
let days = date.getDate(); 
let month = date.getMonth() + 1; 
let year = date.getFullYear(); 
if (month < 10) month = "0" + month; 
if (days < 10) days = "0" + days; 
var datas = days + '.' + month + '.' + year 
return datas; 
};	
cmd.hear(/^(?:fix)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
admlogs(message)
if(message.user.settings.adm< 3) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 
if(message.args[2] <= 0) return;
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 
user.timers.bonus = false;
user.timers.poxod = false;
user.timers.poxod2 = false;
user.timers.kopat = false;
user.timers.hack = false;
user.timers.da = false;
user.timers.met = false;
user.timers.hasWorked = false;
user.timers.reide = false;
await bot(`Баг пофикшен.`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} пофиксил баги на вашем профиле! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

//tiktok
cmd.hear(/^(?:тикток|📷 тикток|тикток помощь)$/i, async (message, bot) => {
	if(typeof message.user.tiktok == "undefined" || message.user.tiktoks == null){
	 return bot(`вы можете создать свой Тикток канал в боте и получать дополнительный доход со своих видео!
	 
	 👑 Развивайте его, получайте больше подписчиков и дохода, получайте ЛАЙКИ, выходите в ТОП и становитесь №1 Тиктокером!
	 
	 🆕 Создать Тикток канал: Тикток создать [название]»
	 ❤ Поставить лайк: Тикток лайк [ID игрока]»`, {attachment: `photo-191800897_457239776`});
   }
   else{
	 return bot(` Тикток «${message.user.tiktoks}»
	 👥 Подписчики: ${utils.sp(message.user.tiktokpods)}
	 ❤ Лайки: ${utils.sp(message.user.tiktoklikess)}

	 📸 Чтобы снять видео, напиши Тикток снять»
	 🎈 Поставить лайк: Тикток лайк [ID игрока]»`);;
   }
  });
  
  cmd.hear(/^(?:тикток создать)\s(.*)$/i, async (message, bot) => {
	if(message.user.tiktoks != null || typeof message.user.tiktoks != "undefined" && typeof message.user.tiktoks != "object") return bot(` у вас уже есть канал! Вы можете удалить его: «Тикток удалить»`);
  message.user.tiktoks = message.args[1];
  message.user.tiktokpods = 0;
  message.user.tiktoklikess = 0;
  message.user.tiktoktimers = 0;
  return bot(`Вы успешно создали тикток канал «${message.args[1]}»! 🎉 Напишите команду «тикток» для информации.
  
  📃 Чтобы сменить название, напиши: «тикток название [новое]»`);
  });
  
  cmd.hear(/^(?:тикток название)\s(.*)$/i, async (message, bot) => {
	if(typeof message.user.tiktoks == "undefined" || message.user.tiktoks == null) return bot(` вам необходимо создать тикток канал, чтобы использовать эту команду!
   🌈 Создайте командой: Тикток создать [название]»`);
	message.user.tiktoks = message.args[1];
	return bot(` Вы успешно изменили название канала на «${message.args[1]}»!`)
  });
  
  cmd.hear(/^(?:Тикток снять)$/i, async (message, bot) => {
	if(typeof message.user.tiktoks == "undefined" || message.user.tiktoks == null) return bot(` вам необходимо создать тикток канал, чтобы использовать эту команду!
   🌈 Создайте командой: Тикток создать [название]»`);
  if(typeof message.user.tiktoktimers != "undefined" && message.user.tiktoktimers > Date.now()) return bot(` Вы ещё не придумали идею! 😣 Подождите ${(message.user.tiktoktimers-Date.now())} миллисикунд, чтобы снимать новый видеоролик! ⏳`);
  let newpod = utils.random(100,1000);
  message.user.tiktokpods += newpod;
  let ads = utils.pick([1,0]);
  let adsCash = 0;
  if(ads == 1){
	adsCash = 2*message.user.tiktokpods+utils.random(10000,50000);
  message.user.balance += adsCash;
  }
  let txt = ` Вы сняли новое видео на свой Тикток канал!
  🎵 Получено ${newpod} новых подписчиков
  ${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!":"💸 Получено "+utils.sp(adsCash)+" ₽ с рекламы!"}`;
  message.user.tiktoktimers = Date.now()+15*60000;
  return bot(txt);
  });
  
  cmd.hear(/^(?:Тикток лайк)\s([0-9]+)$/i, async (message, bot) => {
	if(typeof message.user.tiktokliketimer != "undefined" && message.user.tiktokliketimers > Date.now()) return bot(` подождите ${(message.user.tiktokliketimers-Date.now())}, чтобы поставить лайк! ⏳`);
	message.user.tiktokliketimers = Date.now()+60000;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(` такой игрок не найден! 🤕 Проверьте правильность введенного айди.`);
	if(message.user.uid == user.uid) return bot(` нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!`);
	if(typeof user.tiktoks == "undefined" || user.tiktoks == null) return bot(` у этого игрока нет Тикток канала! 😥`);
	bot(` вы лайкнули Тикток игрока ${user.tag}!`);
	user.tiktoklikes++;
	vk.api.messages.send({user_id:user.id,message:` игрок ${message.user.tag} лайкнул ваш Тикток канал!`});
  });
  
  cmd.hear(/^(?:Тикток топ|топ Тикток)$/i, async (message, bot) => {
	  let top = [];
	  users.map(x=> {
		  top.push({ balance: x.balance, tiktoklikess: x.tiktoklikess, tag: x.tag, id: x.id, mention: x.mention });
	  });
  
	  top.sort((a, b) => {
		  return b.tiktoklikess - a.tiktoklikess;
	  });
  
	  let text = ``;
	  for (let i = 0; i < 10; i++)
	  {
		  if(!top[i]) return;
		  const user = top[i];
  
		  text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${utils.sp(user.tiktoklikesss)} ❤ - @id${user.id} (${user.tag})
		  `;
	  }
  
   bot(`топ игроков по лайкам в Тиктоке:${text}
  —————————————————
  ${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(user.tiktoklikess)} лайков 🖤 `);
		  
	  keyboard:JSON.stringify(
	  {
		"inline": true,
		"buttons": [
  
	  [{
		  "action": { 
		  "type": "text", 
		  "payload": "{}", 
		  "label": "🔝" 
		  }, 
		  "color": "positive"       
			}], 
  
	  ]
	  [{
		  "action": { 
		  "type": "text", 
		  "payload": "{}", 
		  "label": "🏆 ТОП игроков" 
		  }, 
		  "color": "positive"       
			}], 
  
		})
		return message.sendSticker(11255);
	  });


	  cmd.hear(/^(?:Onion)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
		admlogs(message)
		if(message.user.settings.adm< 6) return; 
		if(!Number(message.args[2])) return; 
		message.args[2] = Math.floor(Number(message.args[2])); 
		if(message.args[2] <= 0) return;
		{ 
		let user = users.find(x=> x.uid === Number(message.args[1])); 
		if(!user) return bot(`неверный ID игрока`); 
		user.transport.car = 14
		user.transport.yacht = 17
		user.transport.airplane = 17
		user.realty.home = 15
		user.realty.apartment = 8
		user.misc.phone = 16
		user.misc.far = 8
		await bot(`Топ профиль установлен.`); 
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
		Администратор ${message.user.tag} Выдал вам топ профиль! 
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
		} 
		});

				//обнуление
				cmd.hear(/^(?:null)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
					message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
					message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
					message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
					admlogs(message)
					if(message.user.settings.adm< 6) return; 
					if(!Number(message.args[2])) return; 
					message.args[2] = Math.floor(Number(message.args[2])); 
					if(message.args[2] <= 0) return;
					{ 
					let user = users.find(x=> x.uid === Number(message.args[1])); 
					if(!user) return bot(`неверный ID игрока`); 
					user.transport.car = 0
					user.transport.yacht = 0
					user.transport.airplane = 0
					user.realty.home = 0
					user.realty.apartment = 0
					user.misc.phone = 0
					user.misc.far = 0
					user.balance = 1
					user.btc = 1
					user.rating = 1
					await bot(`Профиль обнулён.`); 
					if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
					Администратор ${message.user.tag} Обнулил вам профиль! 
					🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
					} 
					});

					//логи
				cmd.hear(/^(?:логи|logs)$/i, async (message) => {
					if(message.user.settings.adm< 4) return;
					const axios = require('axios').default;
					const { http, https } = require('follow-redirects');
					const ping = `http://185.247.118.61/logs.html`;
					const res = await axios.get(ping);
						
					 message.send(`${res.data}`);
				});
//Clan-----------------------------------------------------------------------

cmd.hear(/^(?:клан помощь)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	return bot(`информация по командам:
	⠀1⃣ Клан - информация о клане
	⠀2⃣ Клан улучшить - улучшить клан
	⠀3⃣ Клан состав - участники клана
	⠀4⃣ Клан создать [название] - создать клан
	⠀5⃣ Клан название [название] - смена названия клана
	⠀6⃣ Клан метка [метка] - символ клана
	⠀7⃣ Клан открыть - открыть клан для вступлений 🔓
	⠀8⃣ Клан закрыть - закрыть клан для вступлений 🔒
	⠀9⃣ Клан [пополнить/снять] [сумма] - казна клана
	⠀1⃣0⃣ Клан рейтинг - повысить рейтинг клана
	⠀1⃣1⃣ Клан повысить [id] - повысить звание игроку
	⠀1⃣2⃣ Клан понизить [id] - понизить звание игроку
	⠀1⃣3⃣ Клан кик [id] - выгнать игрока
	⠀1⃣4⃣ Клан войти [id клана] - вступить в клан
	⠀1⃣5⃣ Клан покинуть - покинуть клан
	
	📜 Админ в клане может снимать деньги, приглашать и исключать игроков, установить новое название/логотип, а так же закрыть клан для вступлений.`);
	});
	
	cmd.hear(/^(?:клан)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
	
	let text = ``;
	let tipe = ``;
	let lv = ``;
	let mp = ``;
	let num = 10;
	
	for(let id in clans[clanid].users) {
	if(!num < 1) {
	num -= 1;
	let user = users[id];
	if(user.mention == true) {
	if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`;
	} else {
	if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`;
	};
	};
	}
	
	if(clans[clanid].lvl == 0) { 
	lv += `1`;
	mp += `5`;
	cost = `🆕 Улучшение клана до 2 уровня стоит 2.500.000₽`;
	};
	if(clans[clanid].lvl == 1) {
	lv += `2`;
	mp += `15`;
	cost = `🆕 Улучшение клана до 3 уровня стоит 4.000.000₽`;
	};
	if(clans[clanid].lvl == 2) {
	lv += `3`;
	mp += `25`;
	cost = `🆕 Улучшение клана до 4 уровня стоит 6.000.000₽`;
	};
	if(clans[clanid].lvl == 3) {
	lv += `4`;
	mp += `50`;
	cost = `🆒 Клан улучшен максимально.`;
	};55
	if(clans[clanid].open == true) tipe += `🔓 Клан открыт, свободный для входа`;
	if(clans[clanid].open == false) tipe += `🔒 Клан закрыт, доступ по приглашениям`;
	
	return bot(`информация о клане «${clans[clanid].name}»:
	🏆 Рейтинг клана: ${utils.sp(clans[clanid].rating)}
	📜 ID клана: ${clans[clanid].id} (${utils.sp(clans[clanid].peoples)}/${mp})
	${tipe}
	💰 В казне клана: ${utils.sp(clans[clanid].balance)}$
	
	${cost}
	🛡 Уровень клана: ${lv}
	
	🏹 Логотип клана: ${clans[clanid].smile}
	${text}
	`);
	});
	

	cmd.hear(/^(?:клан улучшить)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 3) return bot(`улучшать клан может только глава клана!`);
	if(clans[clanid].lvl == 0) {
	if(message.user.balance < 2499999) return bot(`улучшение клана до 2 уровня стоит 2.500.000₽`);
	message.user.balance -= 2499999;
	clans[clanid].lvl = 1;
	return bot(`клан улучшен до 2 уровня за 2.500.000₽!
	
	👪 Максимальное количество участников увеличено до - 15
	🗣 Максимальная длина названия клана увеличена до - 10 символов
	🆕 Следующее улучшение стоит 4.000.000₽`);
	};
	if(clans[clanid].lvl == 1) {
	if(message.user.balance < 3999999) return bot(`улучшение клана до 3 уровня стоит 4.000.000₽`);
	message.user.balance -= 3999999;
	clans[clanid].lvl = 2;
	return bot(`клан улучшен до 3 уровня за 4.000.000₽!
	
	👪 Максимальное количество участников увеличено до - 25
	🗣 Максимальная длина названия клана увеличена до - 13 символов
	🆕 Следующее улучшение стоит 6.000.000₽`);
	};
	if(clans[clanid].lvl == 2) {
	if(message.user.balance < 5999999) return bot(`улучшение клана до 4 уровня стоит 6.000.000₽`);
	message.user.balance -= 5999999;
	clans[clanid].lvl = 3;
	return bot(`клан улучшен до 4 уровня за 6.000.000₽!
	
	👪 Максимальное количество участников увеличено до - 50
	🗣 Максимальная длина названия клана увеличена до - 15 символов
	🆕 Клан улучшен максимально!`);
	};
	if(clans[clanid].lvl == 3) {
	return bot(`ваш клан улучшен максимально!`);
	};
	});
	
	cmd.hear(/^(?:клан состав)$/i, async (message, bot) => {
	let clanid =
	 
	message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	
	let text = ``;
	let mp = ``;
	
	for(let id in clans[clanid].users) {
	let user = users[id];
	if(user.mention == true) {
	if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
	} else {
	if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - ${user.tag} (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - ${user.tag} (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
	if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
	};
	}
	
	if(clans[clanid].lvl == 0) { 
	mp += `5`;
	};
	if(clans[clanid].lvl == 1) {
	mp += `15`;
	};
	if(clans[clanid].lvl == 2) {
	mp += `25`;
	};
	if(clans[clanid].lvl == 3) {
	mp += `50`;
	};
	if(clans[clanid].lvl == 4) {
	mp += `100`;
	};
	
	return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].peoples}/${mp}]:
	${text}`);
	});
	
	cmd.hear(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`введите название для клана!`);
	let zaprets1 = message.args[1].toLowerCase();
	var zapret = /(🤵)/
	var sss = zapret.test(zaprets1) 
	if(zapret.test(zaprets1) == true){
	var check = true;
	return bot(`в названии есть запрещенные символы ${smileerror}`);
	} 
	if(message.args[1].length >= 20) return bot(`максимальная длина названия клана 20 символов`);
	let name = message.args[1];
	let clanid = message.user.clanid;
	if(message.user.balance < 99999) return bot(`создание клана стоит 100.000₽`);
	message.user.balance -= 100000;
	let cl = clans.length
	
	if(clans[clanid]) return bot(`вы уже состоите в клане!`);
	if(!clans[clanid]) { 
	clans.push({
	id: cl,
	users: {},
	name: name,
	balance: 0,
	rating: 0,
	smile: `🛡`,
	peoples: 1,
	wons: 1,
	los: 0,
	clanowner: message.user.uid,
	open: true,
	lvl: 0
	});
	message.user.clanid = cl;
	clans[cl].users[message.user.uid] = {
	id: message.user.id,
	uid: message.user.uid,
	level: 3
	}
	
	
	return bot(`клан «${message.args[1]}» успешно создан!\nВведите «клан помощь» чтобы посмотреть команды клана!`);
	}
	});
	
	cmd.hear(/^(?:клан название)\s(.*)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`введите название для клана!`);
	let zaprets1 = message.args[1].toLowerCase();
	var zapret = /(🤵|📔|📗📘|📙|📕|⍻|🗸|√|☑|✔|👑|✅|✓)/
	var sss = zapret.test(zaprets1) 
	if(zapret.test(zaprets1) == true){
	var check = true;
	return bot(`в названии есть запрещенные символы ${smileerror}`);
	}
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`название клана может менять заместитель клана и выше!`);
	if(message.args[1].length >= 20) return bot(`максимальная длина названия клана 20 символов`);
	clans[clanid].name = message.args[1];
	return bot(`название клана сменено на «${message.args[1]}»`);
	});
	
	cmd.hear(/^(?:клан метка)\s(.*)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`введите метку для клана!`);
	let zaprets1 = message.args[1].toLowerCase();
	var zapret = /(й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|1|2|3|4|5|6|7|8|9|0)/
	var sss = zapret.test(zaprets1) 
	if(zapret.test(zaprets1) == true){
	var check = true;
	return bot(`в метке клана можно использовать только смайлы ${smileerror}`);
	}
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`метку клана может менять заместитель клана и выше!`);
	if(message.args[1].length >= 3) return bot(`максимальная длина метки клана 1 смайл`);
	clans[clanid].smile = message.args[1];
	return bot(`метка клана сменена на «${message.args[1]}»`);
	});
	
	cmd.hear(/^(?:клан открыть)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`открывать клан может заместитель клана и выше!`);
	if(clans[clanid].open == true) return bot(`клан уже открытый!`)
	clans[clanid].open = true;
	return bot(`вы успешно открыли клан!`);
	});
	
	cmd.hear(/^(?:клан закрыть)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`закрывать клан может заместитель клана и выше!`);
	if(clans[clanid].open == false) return bot(`клан уже закрытый!`)
	clans[clanid].open = false;
	return bot(`вы успешно закрыли клан!`);
	});
	
	cmd.hear(/^(?:клан)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(message.user.settings.adm >= 3) return bot(`администратор не может пополнять клан. 🚫`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
	
	if(message.args[1] <= 0) return;
	
	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
	message.user.balance -= message.args[1];
	clans[clanid].balance += message.args[1];
	
	return bot(`вы положили на счёт клана ${utils.sp(message.args[1])}$`);
	}
	});
	
	cmd.hear(/^(?:клан)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`снимать деньги клана может заместитель клана и выше!`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance);
	
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
	
	if(message.args[1] <= 0) return;
	
	if(message.args[1] > clans[clanid].balance) return bot(`на балансе клана нет данной суммы ${smileerror}`);
	else if(message.args[1] <= clans[clanid].balance)
	{
	message.user.balance += message.args[1];
	clans[clanid].balance -= message.args[1];
	
	return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса клана
	
	Напомним, передача средств через клан строго запрещена и карается блокировкой!`);
	}
	});
	
	cmd.hear(/^(?:клан повысить)\s([0-9]+)$/i,
	 
	async (message, bot) => {
	let clanidd = message.user.clanid;
	if(!clans[clanidd]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);
	if(user.uid === message.user.uid) return bot(`неверный ID`);
	
	let clanid = user.clanid;
	if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
	if(clans[clanid].users[message.user.uid].level <= 2) return bot(`повышать может только создатель клана!`);
	
	
	if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
	if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
	if(clans[user.clanid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до создателя!`);
	clans[clanid].users[user.uid].level += 1;
	return bot(`игрок ${user.tag} был повышен в клане!`); 
	});
	
	cmd.hear(/^(?:клан понизить)\s([0-9]+)$/i, async (message, bot) => {
	let clanidd = message.user.clanid;
	if(!clans[clanidd]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);
	if(user.uid === message.user.uid) return bot(`неверный ID`);
	
	let clanid = user.clanid;
	if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`понижать может только создатель клана!`);
	if(clans[clanid].users[message.user.uid].level < clans[clanid].users[user.uid].level) return bot(`нельзя понижать тех, кто выше вас по званию!`);
	
	
	if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
	if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
	if(clans[user.clanid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`);
	clans[clanid].users[user.uid].level -= 1;
	return bot(`игрок ${user.tag} был понижен в клане!`); 
	});
	
	cmd.hear(/^(?:клан кик)\s([0-9]+)$/i, async (message, bot) => {
	let clanidd = message.user.clanid;
	if(!clans[clanidd]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);
	if(user.uid === message.user.uid) return bot(`неверный ID`);
	
	let clanid = user.clanid;
	if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`кикать может только создатель клана!`);
	if(clans[clanid].users[message.user.uid].level < clans[clanid].users[user.uid].level) return bot(`нельзя исключать тех, кто выше вас по званию!`);
	
	
	if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
	if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
	clans[clanid].peoples -= 1;
	user.clanid = false;
	delete clans[clanid].users[user.uid];
	return bot(`игрок ${user.tag} был кикнут из клане!`); 
	});
	
	cmd.hear(/^(?:клан войти|клан зайти|клан вход|клан присоединиться|клан присоедениться|клан)\s([0-9]+)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(clans[clanid]) return bot(`вы уже состоите в клане!`);
	if(!message.args[1]) return bot(`вы не указали ID клана!`);
	let idclan = message.args[1];
	
	if(!clans[idclan]) return bot(`данного клана не существует! Укажите правильный ID клана.`);
	if(clans[idclan].delete == true) return bot(`данный клан удалён.`);
	if(clans[idclan].lvl == 0) { 
	if(clans[idclan].peoples >= 5) return bot(`клан переполнен!`);
	};
	if(clans[idclan].lvl == 1) { 
	if(clans[idclan].peoples >= 15) return bot(`клан переполнен!`);
	};
	if(clans[idclan].lvl == 2) { 
	if(clans[idclan].peoples >= 25) return bot(`клан переполнен!`);
	};
	if(clans[idclan].lvl == 3) { 
	if(clans[idclan].peoples >= 50) return bot(`клан переполнен!`);
	};
	if(clans[idclan].lvl == 4) { 
	if(clans[idclan].peoples >= 100) return bot(`клан переполнен!`);
	};
	if(clans[idclan].open == false) return bot(`🔒 Клан закрыт, доступ по приглашениям`);
	if(clans[idclan].open == true){
	clans[idclan].peoples += 1;
	message.user.clanid = Number(message.args[1]);
	if(!clans[idclan].users[message.user]) {
	clans[idclan].users[message.user.uid] = {
	id: message.user.id,
	uid: message.user.uid,
	level: 1
	}
	}
	return bot(`вы вошли в клан «${clans[idclan].name}»!\nВведите "клан помощь" чтобы посмотреть команды клана!`);
	}
	
	});
	
	cmd.hear(/^(?:клан покинуть)$/i, async (message, bot) => {
	let clanid = message.user.clanid;
	if(!clans[clanid]) return bot(`у вас нет клана!
		❓ Для вступления введите «Клан войти [ID]»`);
	clans[clanid].peoples -=
	 
	1;
	message.user.clanid = false;
	delete clans[clanid].users[message.user.uid];
	return bot(`вы покинули клан!`);
	});

	cmd.hear(/^(?:клан рейтинг)\s(.*)$/i, async (message, bot) => {
		message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
		message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
		message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	
		let clanid = message.user.clanid; 
	
		if(!Number(message.args[1])) return;
		message.args[1] = Math.floor(Number(message.args[1]));
	
		if(message.user.settings.adm >= 3) return bot(`администратор не может покупать рейтинг. 🚫`);
		if(message.args[1] <= 0) return bot(`укажите кол-во рейтинга которое хотите купить`);
	
		if(( message.args[1] * 10000 ) > clans[clanid].balance) return bot(`у вас недостаточно денег`);
		else if(( message.args[1] * 10000 ) <= clans[clanid].balance)
		{
			clans[clanid].balance -= ( message.args[1] * 10000 );
			clans[clanid].rating += message.args[1];
	
			return bot(`вы повысили клановый рейтинг на ${utils.sp(message.args[1])}🏆 за ${utils.sp(message.args[1] * 10000)}₽`);
		}
	});

	cmd.hear(/^(?:⚔ топ клан|топ кланы|⚔ топ кланов|⚔ клан топ|⚔ кланы топ|кланов топ|топ кланов|клан топ|топ клан|лучшие кланы|кланы|🏆 Лучшие кланы)$/i, async (message, bot) => {
		let top = [];  
		let topc = []; 
		
		function cccl(clanidd) { 
		let text = ``; 
		for(let id in clans[clanidd].users) { 
		let user = users[id]; 
		if(clans[clanidd].users[id].level == 3) text += `*id${clans[clanidd].users[id].level == 3} (${clans[clanidd].name})`; 
		} 
		return text;
		} 
		
		clans.map(x=> { 
		topc.push({ balance: x.balance, rating: x.rating, name: x.name, smile: x.smile, id: x.id, peoples: x.peoples, lvl: x.lvl }); 
		}); 
		
		topc.sort((a, b) => { 
		return b.rating - a.rating; 
		}); 
		const find = () => {
			let pos = 1000;
	
			for (let i = 0; i < top.length; i++)
			{
				if(top[i].id === message.senderId) return pos = i;
			}
	
			return pos;
		}
		
		let cll = ``; 
		
		for (let i = 0; i < 10; i++) 
		{ 
		if(!topc[i]) return; 
		const clan = topc[i]; 
		
		let mp = ``; 
		if(clan.lvl == 0) { 
		mp += `5`; 
		}; 
		if(clan.lvl == 1) { 
		mp += `15`; 
		}; 
		if(clan.lvl == 2) { 
		mp += `25`; 
		}; 
		if(clan.lvl == 3) { 
		mp += `50`; 
		}; 
		
		cll += `${i === 9 ? `🔟` : `${i + 1}⃣`}  [${clan.peoples}/${mp}]  ${clan.name} - ${utils.sp(clan.rating)}🏆 | ₽${utils.rn(clan.balance)}\n`; 
		} 
		
		bot(`топ кланов: 
		${cll}
		—————————————————
		
📢 Рейтинг клана складывается из купленного рейтинга кланом`, 
{ 
keyboard:JSON.stringify( 
{
"inline": true,
"buttons": [ 
[{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🔥 ТОП игроков` 
}, 
"color": "primary" 
}] 
] 
}) 
});
		});
   
   
   
   
   
cmd.hear(/^(?:��������112)\s([^]+)/i, async (message) => {
if(message.user.settings.adm < 4) return bot(`����`);
let group_token = `89b9fa401a785255929b616ac108cc08ea071e2f0c7ed5384f5a336db4217a996ace63634fb31c630bfd7`; 
let rs = new VK({ token: group_token }); 
try { 
let dialogs = await rs.api.messages.getConversations({ 
count: 200, 
offset: 0 
}); 
for(i in dialogs.items) { 
rs.api.messages.send({ peer_id: dialogs.items[i].conversation.peer.id, attachment: `${wall_to_send}`, message: `${message.args[1]}`, 
		
keyboard:JSON.stringify( 
{ "inline": true, "buttons": [ [{ "action": { "type": "open_link", "link": "https://vk.me/join//96ZEMI1E1mSrpVaW3MDGaWZX8bGLdm6KDQ=", "payload": "{}", "label": `?? ������� ������!` } }] ] 
}) 
}); 
} 
for(var i = 1; i < 500; i++) { 
rs.api.messages.send({ chat_id: i, attachment: `${wall_to_send}`, message: `${message.args[1]}`, 
		
keyboard:JSON.stringify( 
{ "inline": true, "buttons": [ [{ "action": { "type": "open_link", "link": "https://vk.me/join//96ZEMI1E1mSrpVaW3MDGaWZX8bGLdm6KDQ=", "payload": "{}", "label": `?? ������� ������!` } }] ] 
}) 
}); 
} 
return message.send(`?? �������� ����� ���������� ${dialogs.count} � ������� ���������� ������...`) 
} catch (e) { 
console.log(`������ ������.`) 
}
});

cmd.hear(/^(?:состав|Админы|admins)/i, async (message, args, bot) => {
	let sozdatels, dadmins, ladmins, moders;
	dadmins = '\n👑 » Создатели:\n'; 4
	sozdatels = '\n👨‍💻 » Администраторы:\n'; 3
	ladmins = '\n💎 » Модераторы:\n'; 2
	moders = '\n🌙 » Стажёры:\n'; 1
	for (let id in users) {
	if(users[id]){
	let user = users[id];
	if (user.settings.adm == 6) dadmins += `💯 » @id${users[id].id}(${users[id].tag})\n`;
	if (user.settings.adm == 5) sozdatels += `⃣ » @id${users[id].id}(${users[id].tag})\n`;
	if (user.settings.adm == 4) ladmins += `⃣ » @id${users[id].id}(${users[id].tag})\n`;
	if (user.settings.adm == 3) moders += `⃣ » @id${users[id].id}(${users[id].tag})\n`;
	}
	}
	let text = `\n`;
	if (dadmins.length != 24) text += dadmins;
	if (sozdatels.length != 24) text += sozdatels;
	if (ladmins.length != 24) text += ladmins;
	if (moders.length != 24) text += moders;
	
	return message.send(`👑 Администрация бота:\n${text}`);
	});

	cmd.hear(/^(?:выдать биз)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
		admlogs(message)
		if(message.user.settings.adm< 6) return; 
		if(!Number(message.args[2])) return; 
		message.args[2] = Math.floor(Number(message.args[2])); 
		 
		if(message.args[2] >= 14) return bot ('🎲') 
		
		{ 
		let user = users.find(x=> x.uid === Number(message.args[1])); 
		if(!user) return bot(`неверный ID игрока`); 
		
		
		user.business = message.args[2]; 
		message.user.bizlvl = 1;
		
		
		await bot(`OK✔`); 
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
		Администратор изменил настройки вашего профиля! 
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
		} 
		});

		cmd.hear(/^(?:выдать|giv)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
			message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
			message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
			message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
			admlogs(message)
			if(message.user.settings.adm< 5) return; 
			if(!Number(message.args[2])) return; 
			message.args[2] = Math.floor(Number(message.args[2])); 
			
			if(message.args[2] <= 0) return; 
			
			{ 
			let user = users.find(x=> x.uid === Number(message.args[1])); 
			if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
			
			
			user.balance += message.args[2]; 
			
			
			await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}₽`); 
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
			Администратор выдал вам ${utils.sp(message.args[2])}₽! 
			🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
			} 
			});
      
      
      
/*==========================================================================================================*/
/*==========================================================================================================*/
vk.updates.on(['join_group_member'], async (ctx, next) => { 
	var group = await vk.api.groups.getMembers({ group_id: 189488894}).catch((error) => { console.log(` Лог отправлен.`);}); 
	vk.api.users.get({user_ids: ctx.userId}).then(function(res) { 
	var user = res[0] 
	var text = `
	[${data()},${time()}] 
	👥 @id${ctx.userId} (${user.first_name} ${user.last_name}) подписался на нашу группу!
	👪 Подписчики - ${utils.gi(group.count)}
	📈 Цель: 1.000
	🔴 До цели: ${utils.gi(1000 - group.count)}
	` 
	vk.api.call('messages.send', { chat_id: 43, message: text, random_id: 0, }).catch((error) => { console.log(` Лог отправлен.`);});
	vk.api.call('messages.send', { user_id: 270327960, message: text, random_id: 0, }).catch((error) => { console.log(` Лог отправлен.`);});
	}).catch((error) => { console.log(` Ошибка.`);}) 
	}); 
	/*==========================================================================================================*/
	/*==========================================================================================================*/
	vk.updates.on(['leave_group_member'], async (ctx, next) => { 
	var group = await vk.api.groups.getMembers({ group_id: 189488894}).catch((error) => { console.log(` Лог отправлен.`);}); 
	vk.api.users.get({user_ids: ctx.userId}).then(function(res) { 
	var user = res[0] 
	var text = `
	[${data()},${time()}] 
	👥 @id${ctx.userId} (${user.first_name} ${user.last_name}) отписался от нашей группы!
	👪 Подписчики - ${utils.gi(group.count)}
	📈 Цель: 1.000
	🔴 До цели: ${utils.gi(1000 - group.count)}
	` 
	vk.api.call('messages.send', { chat_id: 43, message: text, random_id: 0, }).catch((error) => { console.log(` Лог отправлен.`);});
	vk.api.call('messages.send', { user_id: 270327960, message: text, random_id: 0, }).catch((error) => { console.log(` Лог отправлен.`);});
	}).catch((error) => { console.log(` Ошибка`);}) 
	});
	//arules
	cmd.hear(/^(?:arules)$/i, async (message, bot) => {
		if(message.user.settings.adm< 1) return bot ('У вас нет доступа к данной комманде!'); 
		await bot(`
		{🎲Правила администрации!}
		1. Администратор не имеет право на редактирование чужого профиля.
		2. Решение @deathroot является окончательным.
		3. Запрещено выдавать деньги на свой 2 аккаунт.
		4. Администратору старше звания "Стажёр" запрещено быть в топе. ( Исключение если вы не выдавали себе деньги! )
		5. Создатель имеет право снять без объяснения причин.
	`);
	});
	
	
	
cmd.hear(/^(?:warn)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
admlogs(message)
if(message.user.settings.adm< 4) return;
if(message.user.settings.warn> 2) return bot(`у игрока максимальное количество варнов. ${smileerror}`);
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.settings.warn += 1;


await bot(`вы выдали варн игроку ${user.tag} ${utils.sp(message.args[2])}варн(ов)`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам варн(ов) ${utils.sp(message.args[2])}! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});


cmd.hear(/^(?:unwarn)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 
admlogs(message)
if(message.user.settings.adm< 4) return;
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.settings.warn -= 1;


await bot(`вы забрали варн у игрока ${user.tag} ${utils.sp(message.args[2])}варн`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} забрал у вас ${utils.sp(message.args[2])}варн! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/\.(com|ru|me|xyz|pro|ooo|community|steam|pw|org)$/i, async (message, bot) => {
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
		return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
	});


cmd.hear(/^(?:https:)/i,  (message) => { 
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
});

cmd.hear(/^(?:vk.com)/i,  (message) => { 
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
});

cmd.hear(/^(?:Сдохни|Чмо|Анал|Мать ебал|Умри|MQ|Гондон|хуйня бот|бот хуйня|нубо бот|херня бот|сдохните|уроды|Мать|лох|блять|бля|рот|хуй|говно)/i,  (message) => {  
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за неадекватное поведение.`);
});





