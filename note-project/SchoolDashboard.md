# School Dashboard

- Reference

  [Next.js School Management Dashboard UI Design Tutorial | React Next.js Responsive Admin Dashboard](https://www.youtube.com/watch?v=myYlGLFxZas)

  [code start](https://github.com/safak/next-dashboard-ui/tree/starter), [code completed](https://github.com/safak/next-dashboard-ui/tree/completed), 
  
  



## 背景介绍

### 需求分析

- admin

  

- student

  

- teacher

  

- parent

  



### 项目规划





### 技术选型 ✔

- 前端

  Nextjs, Tailwind

- 后端

  Nextjs, PostgreSQL

- 部署

  





### 业务流程

### 功能梳理

### 架构设计 ✔





## 页面设计 ✔

### 页面 index

- admin

  by date 

  user counts

  components are fully responsive 

  ![school-dashboard-admin-index](res/school-dashboard/school-dashboard-admin-index.png)

  ![school-dashboard-response](res/school-dashboard/school-dashboard-response.png)

- student

  ![school-dashboard-student-index](res/school-dashboard/school-dashboard-student-index.png)

- parent

  ![school-dashboard-parent-index](res/school-dashboard/school-dashboard-parent-index.png)

- teacher

  ![school-dashboard-teacher-index](res/school-dashboard/school-dashboard-teacher-index.png)

  



### 页面 X





## 库表设计 ✔

### model X

### model X





## 接口数据 ✔

### Interface X

### Interface X





## 前端初始化

### 新建项目

- 新建项目

  ```bash
  # npx create-next-app  # 整合项目 版本问题
  git clone https://github.com/safak/next-dashboard-ui.git  # /tree/starter
  cd next-dashboard-ui/ && rm -rf .git
  
  npm i
  npm run dev
  
  # http://localhost:3000/dashboard/admin
  # http://localhost:3000/admin  # mv src/app/dashboard/ src/app/(dashboard)/
  mkdir src/app/dashboard && touch src/app/dashboard/layout.tsx
  mkdir src/app/dashboard/admin && touch src/app/dashboard/admin/page.tsx
  mkdir src/app/dashboard/student && touch src/app/dashboard/student/page.tsx
  mkdir src/app/dashboard/parent && touch src/app/dashboard/parent/page.tsx
  mkdir src/app/dashboard/teacher && touch src/app/dashboard/teacher/page.tsx
  # http://localhost:3000/sign-in
  mkdir src/app/sign-in && touch src/app/sign-in/page.tsx
  
  # components
  touch src/components/Menu.tsx src/components/NavBar.tsx
  
  ```

  



### 依赖配置

### 路由配置





### 快捷代码 vscode

- typescriptreact.json

  ```json
  {
  	// Place your snippets for typescriptreact here. Each snippet is defined under a snippet name and has a prefix, body and 
  	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  	// same ids are connected.
  	// Example:
  	// "Print to console": {
  	// 	"prefix": "log",
  	// 	"body": [
  	// 		"console.log('$1');",
  	// 		"$2"
  	// 	],
  	// 	"description": "Log output to console"
  	// }
  	"fcc": {
  		"prefix": "fcc",
  		"body": [
  			"import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.css'",
  			"\n",
  			"const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
  			"  return (",
  			"    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
  			"  )",
  			"}",
  			"",
  			"export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
  		],
  		"description": "Create an arrow component with css"
  	},
  	"fcs": {
  		"prefix": "fcs",
  		"body": [
  			"import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.scss'",
  			"\n",
  			"function ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}(){",
  			"  return (",
  			"    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
  			"  )",
  			"}",
  			"",
  			"export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
  		],
  		"description": "Create a functional component with Sass"
  	},
  	"acs": {
  		"prefix": "acs",
  		"body": [
  			"import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.scss'",
  			"\n",
  			"const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
  			"  return (",
  			"    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
  			"  )",
  			"}",
  			"",
  			"export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
  		],
  		"description": "Create an arrow component with Sass"
  	},
  	"comp": {
  		"prefix": "comp",
  		"body": [
  			"const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
  			"  return (",
  			"    <div>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
  			"  )",
  			"}",
  			"",
  			"export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
  		],
  		"description": "Create a component"
  	},
  	"compt": {
  		"prefix": "compt",
  		"body": [
  			"const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
  			"  return (",
  			"    <div className=''>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
  			"  )",
  			"}",
  			"",
  			"export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
  		],
  		"description": "Create a component with tailwind classname"
  	}
  }
  ```

  



## 后端初始化

### 新建项目

### 依赖配置





## 前端页面 登陆注册

- 布局

  根布局：无

  仪表盘布局：菜单栏、顶部栏、内容

  



### Layout: RootLayout ✔

- src\app\layout.tsx (根布局)

  ```tsx
  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import "./globals.css";
  
  const inter = Inter({ subsets: ["latin"] });
  
  export const metadata: Metadata = {
    title: "Lama Dev School Management Dashboard",
    description: "Next.js School Management System",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }
  
  ```

  



### Page: sign ✔

- 



## 前端页面 仪表盘

### Layout: DashboardLayout ✔

- src/app/(dashboard)/layout.tsx (仪表盘布局)

  Components: Menu, NavBar

  ```tsx
  import Link from "next/link";
  import Image from "next/image";
  import Menu from "@/components/Menu";
  import NavBar from "@/components/NavBar";
  
  export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">School Dashboard</span>
          </Link>
  
          <Menu />
        </div>
  
        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] %] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <NavBar />
          {children}
        </div>
      </div>
    );
  }
  
  ```

  



### Components: Menu

- src/components/Menu.tsx 

  ```tsx
  import Image from "next/image";
  import Link from "next/link";
  
  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/teacher.png",
          label: "Teachers",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/student.png",
          label: "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/parent.png",
          label: "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/subject.png",
          label: "Subjects",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/lesson.png",
          label: "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/exam.png",
          label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/assignment.png",
          label: "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/result.png",
          label: "Results",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/attendance.png",
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/calendar.png",
          label: "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/message.png",
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/announcement.png",
          label: "Announcements",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/setting.png",
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];
  
  const Menu = () => {
    return (
      <div className="mt-4 text-sm">
        {menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {i.title}
            </span>
            {i.items.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Menu;
  
  ```

  



### Components: NavBar

- src/components/NavBar.tsx

  ```tsx
  import Image from "next/image";
  
  const NavBar = () => {
    return (
      <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center gap-2 tex-xs rounded-full ring-[1.5px] ring-grap-300 px-2">
          <Image src="/search.png" alt="" width={14} height={14} />
          <input
            type="text"
            placeholder="Search ..."
            className="w-[200px] p-2 bg-transparent outline-none"
          />
        </div>
  
        {/* ICONS AND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <Image src="/message.png" alt="" width={20} height={20} />
          </div>
  
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
            <Image src="/announcement.png" alt="" width={20} height={20} />
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
              1
            </div>
          </div>
  
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">Oswin Oswald</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    );
  };
  
  export default NavBar;
  
  ```

  



### Page: admin ✔

- src/app/dashboard/admin/page.tsx

  Left(Top): 

  Right(button): 

  ```tsx
  
  ```

  



### Components: 





### Page: student ✔

- 



### Page: teacher ✔

- 



### Page: parent ✔

- 





### 前端请求





## 后端接口 XXX

### 逻辑梳理

### 代码生成 MyBatisX



### 数据库访问层 (mapper) ✔

### 业务逻辑层 (service) ✔

### 接口访问层 (controller) ✔



### 数据模型 (model)

### 自定义异常

### 测试接口





## 项目部署











































































