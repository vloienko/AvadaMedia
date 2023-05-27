// Однозначні числа перетворює в двозначні - додає "0"
const getPadTime = (time) => time.toString().padStart(2, "0");

const dates = ['23:59:59', '21:59:59', '20:59:59', '22:59:59', '23:59:59', '20:59:59', '22:59:59'];
const timer = document.querySelectorAll('.timer');
timer.forEach((el, index) => {
	const newYear = new Date(`Mar 20 2023 ${dates[index]}`);
	
	// const daysVal = el.querySelector('.time-count__days .time-count__val');
	const hoursVal = el.querySelector('.time-count__hours .time-count__val');
	const minutesVal = el.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = el.querySelector('.time-count__seconds .time-count__val');

	// const daysText = el.querySelector('.time-count__days .time-count__text');
	const hoursText = el.querySelector('.time-count__hours .time-count__text');
	const minutesText = el.querySelector('.time-count__minutes .time-count__text');
	const secondsText = el.querySelector('.time-count__seconds .time-count__text');

	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;
		
		// let days = getPadTime(Math.floor(leftUntil / 1000 / 60 / 60 / 24));
		let hours = getPadTime(Math.floor(leftUntil / 1000 / 60 / 60) % 24);
		let minutes = getPadTime(Math.floor(leftUntil / 1000 / 60) % 60);
		let seconds = getPadTime(Math.floor(leftUntil / 1000) % 60);

		// daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		// daysText.textContent = declOfNum(days, ['День', 'Дні', 'Днів']);
		hoursText.textContent = declOfNum(hours, ['Hours', 'Hours', 'Hours']);
		minutesText.textContent = declOfNum(minutes, ['Mins', 'Mins', 'Mins']);
		secondsText.textContent = declOfNum(seconds, ['Secs', 'Secs', 'Secs']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});