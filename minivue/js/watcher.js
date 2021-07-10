class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm;
        //data 中的属性名称
        this.key = key;
        //回调函数负责更新视图
        this.cb = cb;

        //把watcher 对象记录到Dep 类的静态属性target
        Dep.target = this
        //触发get 方法， 在get 方法中会调用addSub
        this.oldValue = vm[key];
        Dep.target = null; //防止重复添加

    }

    //当数据发生变化时， 更新视图
    update() {
        let newValue = this.vm[this.key];
        if (this.oldValue === newValue) {
            return
        }
        console.log("watcher", newValue);
        this.cb(newValue);
    }


}