# react-necedu

## 使用说明
基于antd，react，less重构的 [necedupage](https://github.com/viviier/necedupage)

### 项目截图
![necedu](http://okuesjok0.bkt.clouddn.com/necedu.gif)
### 技术栈

> 详情可参阅package.json
> 
> * antd
> * react
> * less
> * isomorphic-fetch
> * webpack
> * create-react-app
> * es6 + babel

### 功能

1. 关闭顶部通知条
	* 实现点击顶部通知条中的“X 不再提醒”后,刷新页面不再出现此通知条
2. 关注／登录
	* 点击关注按钮，通过cookie判断是否登录
	* 实现登录框，使用md5加密后再通过fetch请求数据判断是否登录成功，设置cookie
	* 根绝state改变按钮显示
3. 轮播图
	* 每5s切换图片
	* 图片循环播放
	* 鼠标悬停某张图片, 则暂停切换
4. 左侧内容区 tab 切换
	* 根据所点击的tab不同通过fetch发出不同的请求,实现下方课程内容的更换
5. 右侧“机构介绍”中的视频介绍
	* 实现点击图片后调用浮层来播放视频
6. 右侧“热门推荐”
	* 实现每次进入或刷新本页面,“热门推荐”模块中,接口返回 20 门课程数据,默认 展示前 10 门课程,隔 5 秒更新一门课程,实现滚动更新热门课程的效果
7. 课程列表
	* 通过fetch异步请求获取课程列表的数据然后进行渲染
8. 分页器
	* 通过antd的pagination组件完成分页器，实现动态判定数据数量，根据数量决定分页长度
	* 实现点击后提交fetch请求来更新课程列表
9. 按需加载
	* 通过babel-plugin-import实现按需加载

### 本地运行

执行

<code>git clone https://github.com/viviier/react-necedu.git</code>

安装依赖包

请使用<code>yarn</code> 或者 <code>npm</code>推荐 进行安装

启动服务

<code>npm run dev</code>

打包编译为静态页面

<code>npm run build</code>