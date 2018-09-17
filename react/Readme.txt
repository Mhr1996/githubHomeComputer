1.根据react官网安装三步骤来创建初始文件夹

npx create-react-app my-app
cd my-app
npm start

2.精简代码

知识点:
import React from 'react';//帮助我们进行语法解析
import App from './App'; //以大写字母开头的都是组件
import ReactDOM from 'react-dom';//加载一个组件， 把组件挂载到dom节点上
待了解《自动化测试》

class name extends React.Component	//组件一定要继承一个React.Component类组件

父组件通过属性的形式向子组件传递参数
return <TodoList key={index}  content={item} name={item}/>
子组件接收参数
this.props.name  ||  this.props.content

子组件如果想向父组件传递信息，要调用父组件传递过来的方法

3.jsx 是一种语法糖React-createElement
 ReactElement对象

4.constructor()-构造方法
这是es6对类的默认方法，通过new命令生成对象实例时自动调用该方法。并且，该方法是类中必须有的，如果没有显示定义，则会默认添加空的constructor()方法。
super()-继承
在class方法中，继承是使用extends关键字来实现的. 子类必须在constructor()调用super()方法， 否贼新建实例时会报错。
报错的原因是：子类是没有自己的this对象的，它只能继承自父类的this对象，然后对其进行加工，而super()就是将父类中的this对象继承给子类。没有super，子类就得不到this对象

5.
父组件向子组件传值通过属性的方式
<Item key={i} itemValue={index} />
key 是循环要用的key值，不会传递给子组件
子组件通过props属性拿到父级传过来的值

子组件向父组件传递参数
父组件在属性传递一个方法过来
子组件通过父组件传递过来的方法，props访问方法 进行传递参数

Es6
对象建和值完全一样只需保留一个
{
	a:a
}
{
	a
}