//项目入口，从这里开始运行

//react核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
//导入项目根组件
import App from './App';
import Appjsxtest from './appjsxtest'; 

//把app根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
const test = ReactDOM.createRoot(document.getElementById('test'));
root.render(
    <App />
    
);
// test.render(<Appjsxtest/>);


