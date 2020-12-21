# node-service



## 目录结构

```shell
|-- src                 主目录
|  |
|  |-- api              接口
|  |  |-- index.ts
|  |
|  |-- data             数据库相关
|  |  |-- dao           数据访问对象
|  |  |-- entity        实体
|  |  |-- db.ts         数据库连接
|  |
|  |-- plugins          插件目录
|  |
|  |-- utils            工具库
|  |  |-- const.ts      常量表
|  |
|  |-- index.ts         入口
|
```



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

