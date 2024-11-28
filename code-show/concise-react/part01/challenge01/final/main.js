/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  // 1. 圆圈紫色 className="purple"
  // 2. 文本颜色 className="text-orange"
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");

  // 3. 圆圈大小 width="150px" height="150px" lineHeight="150px"
  // 4. 圆圈旋转 transform="rotate(0deg)"
  const [circleSize, setCircleSize] = React.useState(150);
  const [circleRotate, setCircleRotate] = React.useState(0);

  const circleStyle = {
    height: `${circleSize}px`,
    width: `${circleSize}px`,
    lineHeight: `${circleSize}px`,
    transform: `rotate(${circleRotate}deg)`,
  };

  return (
    <main>
      {/* 1. 圆圈紫色 */}
      <label>
        Purple
        <input
          type="checkbox"
          value={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      {/* 2. 文本颜色 */}
      <label>
        text color
        <select
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      {/* 3. 圆圈大小 */}
      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(e) => setCircleSize(e.target.value)}
        />
      </label>

      {/* 4. 圆圈旋转 */}
      <label>
        Circle Rotate
        <input
          type="number"
          value={circleRotate}
          onChange={(e) => setCircleRotate(e.target.value)}
        />
      </label>

      {/* 最终呈现 */}
      <div
        className={`circle ${isPurple ? "purple" : ""} ${textColor}`}
        style={circleStyle}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
