//your JS code here. If required.
function updateTime()) {
	const timerElement = document.getElementById("timer");
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth()+1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const hours = now.getHours();
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds).padStart(2, "0");
	const ampm = hours>=12 : "PM" : "AM";

	const formattedHours = hours%12 || 12;
	const formattedTime = '${month}/${day}/${year},${formattedHours}:${minutes}:${seconds} ${ampm}';
	timerElement.textContent = formattedTime;
}
setInterval(updateTime,1000);
// updateTime();