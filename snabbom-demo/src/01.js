
import {h,  init} from 'snabbdom';
 //参数： 数组 模块
 //返回值 patch函数， 作用对比两个vnode的差异更新到真实的dom
 let patch = init([]);
 //第一个参数：标签+选择器
 //第二个参数： 如果是字符串的话就是标签中的内容
 //返回值 vnode
 let vnode = h("div#rr","hello word");

 let app = document.querySelector("#app");
 //第一个参数 可以是dmo 
 //第二个参数 vnode

 let oldVnode = patch(app,vnode);

 //重新更新数据
 vnode = h("div","hello snabbodm");
  patch(oldVnode, vnode);

// patch(app, oldVnode);

console.log(init);