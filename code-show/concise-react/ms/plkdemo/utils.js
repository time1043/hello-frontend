/*
 * @Author: oswin
 * @Description: 时间格式化工具函数
 */
const formatTime = (hours, minutes, seconds) => {
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
};

/*
 * @Author: oswin
 * @Description: 获取并显示时间
 */
const displayTime = (totalTimeInSeconds = 0) => {
  // 计算时间 (小时 分钟 秒)
  let hours = Math.floor(totalTimeInSeconds / 3600); // 3661 / 3600 = 1
  let minutes = Math.floor((totalTimeInSeconds % 3600) / 60); // 61 / 60 = 1
  let seconds = totalTimeInSeconds % 60; // 62 % 60 = 2
  const time = formatTime(hours, minutes, seconds);

  // 显示数据 <div id="digital-clock-face"></div>
  const container = document.getElementById("digital-clock-face");
  container.innerHTML = time;
};

export { displayTime, formatTime };
