// =============================================
// type 为任意类型创建别名 (代码简洁性、可读性、复用性和扩展性)
// =============================================
type num = number;
let price: num;
price = 100;

// =============================================
// 联合类型：⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀
// =============================================
type Status = number | string;
function printStatus(status: Status) {
  console.log(status);
}
printStatus(404);
printStatus("200");
printStatus("501");

type Gender = "男" | "⼥";
function logGender(str: Gender) {
  console.log(str);
}
logGender("男");
logGender("⼥");

// =============================================
// 交叉类型 Intersection Types：允许将多个类型合并为⼀个类型
// 合并后的类型将拥有所有被合并类型的成员。交叉类型通常⽤于对象类型
// =============================================

//⾯积
type Area = {
  height: number; //⾼
  width: number; //宽
};
//地址
type Address = {
  num: number; //楼号
  cell: number; //单元号
  room: string; //房间号
};

// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
  height: 180,
  width: 75,
  num: 6,
  cell: 3,
  room: "702",
};
