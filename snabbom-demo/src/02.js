// div 中放入子元素p h

import {init,h} from 'snabbdom'
let patch = init([]);
//第二个参数如果是数组 放入vnode  的数组
let vnode = h('div#container',[
   h('h1','hello snabbdom'),
   h('p','这是一个p标签')
])

let app = document.querySelector("#app");

let oldVnode = patch(app, vnode);
//更新p h 标签
setTimeout(()=>{
    vnode = h("div",[
        h('h1',"hello rr"),
        h('p','hello w')
    ]);
    patch(oldVnode,vnode);
    //清空元素 h("!") 创建注释元素
    patch(oldVnode,h("!"));
},2000);
//