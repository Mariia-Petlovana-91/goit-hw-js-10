import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
	dataTimePicker: document.getElementById('datetime-picker'),
	btnStart: document.querySelector('[data-start]'),
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	minutes: document.querySelector('[data-minutes]'),
	seconds: document.querySelector('[data-seconds]'),

} 

let userSelectedDate ;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] <= options.defaultDate) {
			iziToast.show({
				backgroundColor: 'red',
				messageColor: 'white',
				message: 'Please choose a date in the future',
				position: 'topRight',
				close: false,
			});
			refs.btnStart.setAttribute('disabled', 'true');
		} else {
			refs.btnStart.removeAttribute('disabled');
			userSelectedDate = selectedDates[0].getTime();
		}
	}
};

function selectedDate() {
	const intervalId = setInterval(() => {
		const currentTime = Date.now();
		const selectedTime = userSelectedDate - currentTime;
		refs.btnStart.setAttribute('disabled', 'true');
		refs.dataTimePicker.setAttribute('disabled', 'true');

		if (selectedTime <= 0) {
			clearInterval(intervalId);
			refs.dataTimePicker.removeAttribute('disabled');
			return;
		}

		const dataSelectedTimeObject = convertMs(selectedTime);

		refs.days.textContent = String(dataSelectedTimeObject.days).padStart(2, '0');
		refs.hours.textContent = String(dataSelectedTimeObject.hours).padStart(2, '0');
		refs.minutes.textContent = String(dataSelectedTimeObject.minutes).padStart(2, '0');
		refs.seconds.textContent = String(dataSelectedTimeObject.seconds).padStart(2, '0');
	}, 1000);
}

flatpickr(refs.dataTimePicker, options);

refs.btnStart.addEventListener('click', selectedDate);

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
    
	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
	return { days, hours, minutes, seconds };
    }