# node-service

## git分支
- mysql: 添加 mysql 作为数据库， typeorm 为 orm 架构搭建
- plugin-dev: 用于插件开发测试的分支
    - node-alias: ts-node 别名查找
    - dispatchLog: 监听控制台写入日志


## Project Setup
```shell
## 依赖安装
yarn install

## 开发运行
yarn dev

## 打包
yarn build

## 打包运行
yarn start

## 规范检测
yarn lint
```


## 代码提交规范
#### Commit message 前缀规范提要
| code      | info
|---------- |-------------- |
| **feat**: msg | 新功能 feature |
| **fix**: msg | 修复bug |
| **merge**: msg | merge 信息 |
| **docs**: msg | 文档修改 |
| **style**: msg | 格式，不影响代码运行的变动 |
| **refactor**: msg | 重构 |
| **test**: msg | 增加测试 |
| **chore**: msg | 构建过程或辅助工具的变动 |
| **rm**: msg | 删除文件或代码 |
