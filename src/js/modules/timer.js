function timer() {
    const deadline = '2023-10-10';
    function getTimeRemaining(endtime) {
        let days, hours, minutes,seconds;
        const t = Date.parse(endtime)- Date.parse(new Date());
        if(t<=0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000*60*60*24));
            hours = Math.floor((t / (1000*60*60) % 24));
            minutes = Math.floor((t / (1000*60) % 60));
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds:seconds
        }
    }
    function getZiro(num) {
        if(num >= 0 && num <10) {
            return `0${num}`;
        } else return num;

    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInerval = setInterval(updateClock, 1000);
            updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZiro(t.days);
            hours.innerHTML = getZiro(t.hours);
            minutes.innerHTML = getZiro(t.minutes);
            seconds.innerHTML = getZiro(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInerval)
            }
        }
    }

    setClock('.timer', deadline);
}

export default timer;