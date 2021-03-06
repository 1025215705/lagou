class Observer {
    constructor(data) {
        this.walk(data);
    }
    walk(data) {
        // 1: 判断data 是否是对象
        if (!data || typeof data !== 'object') {
            return
        }
        // 遍历data 对象的所有属性
        Object.keys(data).forEach(key => {
            console.log(key);
            this.defineReactive(data, key, data[key])
        });
    };

    defineReactive(obj, key, val) {
        let that = this;
        //负责收集依赖，发送通知
        let dep = new Dep();
        this.walk(val); //判断key 的类型，如果是对象则会转换成响应式对象
        Object.defineProperty(obj, key, {
            enumerable: true, //可枚举
            configurable: true, //可配置
            get() {
                //收集依赖
                Dep.target && dep.addSub(Dep.target)
                console.log(val);
                return val;
            },
            set(newValue) {
                if (newValue === val) {
                    return
                }
                val = newValue;
                that.walk(newValue);
                //发生通知
                dep.notify();
            }
        })
    }
}