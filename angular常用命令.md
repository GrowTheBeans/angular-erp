## npm + ng
 
 npm i --save 包名：软件依赖 npm i --save-dev 包名：开发依赖

 ng new 项目名:新建Anular项目

 ng build -prod:生产环境编译

 ng serve:启动开发服务器


 ## Mock Rest API

 json-server：用于快速搭建REST API利器

 npm install -g json-server

 使用方式（使用json-server指向对应的json'文件）

 json-server ./mock/data.json 

## 测试REST API

几种常用的API测试工具

    使用Postman测试常用的API
    使用VSCode的REST Client插件

## 新建项目（不安装依赖）

ng new taskmgr --skip-install

## 新建组件不加测试

ng generate component my-component --skipTests=false/true  true 时为不生成 
## 新建module 
 ng g m my-module

 # 路由内容快捷生成
 
 1.安装插件Angular 10 Snippets
 2.ng-router-featuremodule

## 快速创建service
 ng-service
