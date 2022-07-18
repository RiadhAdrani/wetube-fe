function viewsText(views) {
    if (!views) return "no views";

    const output = "" + views + " " + (views > 1 ? "views" : "view");

    return output;
}

function timeAgoText(time) {
    const delta = Date.now() - time;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    const trunc = (n, d) => Math.trunc(n / d);

    if (delta >= year) return `${trunc(delta, year)} ${trunc(delta, year) > 1 ? "years" : "year"}`;

    if (delta >= month)
        return `${trunc(delta, month)} ${trunc(delta, month) > 1 ? "months" : "month"}`;

    if (delta >= week) return `${trunc(delta, week)} ${trunc(delta, week) > 1 ? "weeks" : "week"}`;

    if (delta >= day) return `${trunc(delta, day)} ${trunc(delta, day) > 1 ? "days" : "day"}`;

    if (delta >= hour) return `${trunc(delta, hour)} ${trunc(delta, hour) > 1 ? "hours" : "hour"}`;

    if (delta >= minute)
        return `${trunc(delta, minute)} ${trunc(delta, minute) > 1 ? "minutes" : "minute"}`;

    return `${trunc(delta, second)} ${trunc(delta, second) > 1 ? "seconds" : "second"}`;
}

function formatTime(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(((time - seconds) % 3600) / 60);
    const hours = Math.floor(time / 3600);

    const sec = seconds < 10 ? `0${seconds}` : seconds;
    const min = minutes < 10 ? `0${minutes}` : minutes;
    const hrs = hours > 0 ? (hours > 9 ? `${hours}:` : `0${hours}:`) : "";

    return `${hrs}${min}:${sec}`;
}

export { viewsText, timeAgoText, formatTime };
