import { displayTime, formatTime } from "./utils.js";

/*
 * @Author: oswin
 * @Description: 获取并显示当前时间 [Task1]
 */
const displayCurrentTime = () => {
  // 获取当前时间 (小时 分钟 秒)
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const time = formatTime(hours, minutes, seconds);

  // 显示数据 <div id="digital-clock-face"></div>
  const container = document.getElementById("digital-clock-face");
  container.innerHTML = time;
};

/*
 * @Author: oswin
 * @Description: 正计时 [Task2]
 */
const countUp = () => {
  let totalTimeInSeconds = 0;
  setInterval(() => {
    displayTime(totalTimeInSeconds);
    totalTimeInSeconds++;
  }, 1000);
};

/*
 * @Author: oswin
 * @Description: 倒计时 [Task3]
 */
const countDown = (h = 0, m = 10, s = 43) => {
  let totalTimeInSeconds = h * 3600 + m * 60 + s;
  const intervalId = setInterval(() => {
    if (totalTimeInSeconds < 0) {
      clearInterval(intervalId);
      return;
    }

    displayTime(totalTimeInSeconds);
    totalTimeInSeconds--;
  }, 1000);
};

// 显示当前时间
setInterval(displayCurrentTime, 1000);

// 正计时
// countUp();

// 倒计时
// countDown(0, 0, 5);
