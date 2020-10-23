class Vue{
    constructor(options){
     //1 通过属性保存选项数据
     this.$options = options ||{};
     this.$data = options ||{}
     this.$el = typeof options.el === 'string' ? document.querySelector(options.el):options.el;
     //2 把data 中的数据变成get和set
     this._proxyData(this.$data);
     //3 调用observer ,监听数据的变化
     //4 调用compiler 对象， 解析指令和差值表达式
    }
    _proxyData(data){
     //遍历data 中的属性
     Object.keys(data).forEach(key=>{
         Object.defineProperty(this, key,{
             enumerable:true,
             configurable:true,
             get(){
                 return data[key];
             },
             set(newValue){
                 if(newValue === data[key]){
                     return
                 }
                 data[key] = newValue;
             }
         })
     })
    }
}