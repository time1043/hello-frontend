// =============================================
// 声明对象类型
// =============================================
// 限制person1对象必须有name属性，age为可选属性
let person1: { name: string; age?: number };
// 含义同上，也能⽤分号做分隔
let person2: { name: string; age?: number };
// 含义同上，也能⽤换⾏做分隔
let person3: {
  name: string;
  age?: number;
};

// 如下赋值均可以
person1 = { name: "李四", age: 18 };
person2 = { name: "张三" };
person3 = { name: "王五" };

// // 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
// person3 = { name: "王五", gender: "男" };

// =============================================
// 索引签名 (对象可有任意数量的属性，且属性的键和类型是可变的)
// =============================================
// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: {
  name: string;
  age?: number;
  [key: string]: any; // 索引签名，完全可以不⽤key这个单词，换成其他的也可以
};
// 赋值合法
person = {
  name: "张三",
  age: 18,
  gender: "男",
  address: "北京",
};
