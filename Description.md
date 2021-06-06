# 安装
```bash
  npm i -g yo generator-generator
```
# 生成文件目录
```bash
yo generator
```

# 标准Generator目录
```txt
├── LICENSE
├── README.md
├── __tests__
│   └── app.js
├── generators
│   └── app
│       └── templates   // 模板目录
│       ├── index.js    // 入口文件
└── package.json
```
# 生命周期回调
1. initializing - Your initialization methods (checking current project state, getting configs, etc)
初始化方法（检验当前项目状态、获取configs、等）

2. prompting - Where you prompt users for options (where you’d call this.prompt())
人机交互，获取用户选项

3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
保存配置（创建 .editorconfig 文件）

4. default - If the method name doesn’t match a priority, it will be pushed to this group
如果函数名称如生命周期钩子不一样，则会被放进这个组

5. writing - Where you write the generator specific files (routes, controllers, etc)
写generator特殊的文件（路由、控制器、等）

6. conflicts - Where conflicts are handled (used internally)
冲突后处理办法

7.install - Where installations are run (npm, bower)
选择安装依赖（npm、bower）

8. end - Called last, cleanup, say good bye, etc
安装结束、清除文件、设置good bye文案、等

# 参考地址
[Yeoman量身定制前端脚手架](https://www.jianshu.com/p/6d8c77b6e644)
[使用 yeoman-generator 生成脚手架](https://www.jianshu.com/p/93211004c5ac)