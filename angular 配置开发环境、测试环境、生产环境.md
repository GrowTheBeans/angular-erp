## 1. 配置开发环境、测试环境、生产环境

(1). environment.ts - 开发环境: 用于程序开发 （创建项目时自动生成）
export const environment = {
  production: false,
  baseUrl: '', // 测试环境服务器地址(请求数据地址)
  isPass: true, // 定义变量   
};

(2). environment.test.ts - 测试环境: 用于程序完成，测试产品 (手动创建)
// 测试环境
export const environment = {
    production: false,
    baseUrl: ''//测试环境地址
};

(3). environment.pro.ts - 生产环境: 测试完成，可对外开发 (创建项目时自动生成)
// 生产环境
export const environment = {
  production: true,
  baseUrl: ''//正式环境地址
};

## 2.配置angular.json, 使构建的时候，可替换为相应的环境文件

 "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.test.ts"//替换成测试环境配置文件
                }
              ],
 }

## 3. 运行项目切换环境

//构建生产环境，使用environment.prod.ts (默认使用的就是这个)
ng build

//构建测试环境，使用environment.test.ts (=后面的值和angular.json中的配置的大对象的key值相同)
ng build --configuration=test

//构建时，可使用的额外的命令
--prod :   压缩构建文件
--base-href /前缀/ :  为浏览器中项目路由路径添加统一的前缀
比如开发时默认访问路径是http:IP地址/#/home
打包后的相同页面的访问：http:IP地址/#/浏览器中项目路由路径的前缀/home
