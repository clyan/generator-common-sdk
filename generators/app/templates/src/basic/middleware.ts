/**
 * Promise中间实现
 */
import _ from "./util";
import EventEmitter from "./event";

export default class extends EventEmitter {
  public middlewares: any[] = [];
  public ctx = {
    ItemComponent: null,
    message: {},
    conversation: {}
  };
  // 1. 构造器函数，初始化添加 middlewares
  constructor(middlewares: any[]) {
    super();
    this.middlewares = middlewares;
  }
  
  // 2. 通过批量添加中间件接口 
  useBatch(steps: any[]) {
    if (_.isArray(steps)) {
      this.middlewares = this.middlewares.concat(steps);
    } else {
      throw TypeError("useBatch must be arrary!!!");
    }
  }

  // 3. 核心实现，每个Action都需要进过Dispatch进行触发
  dispatch(msg: any, conversation: any) {
    // 3.1 使用Object.create 创建新的 middlewares 和 ctx对象，防止对象引用
    let steps = Object.create(this.middlewares);
    let ctx = Object.create(this.ctx);
    // 3.2 赋值 会话和消息 对象
    ctx.conversation = conversation;
    ctx.message = msg;
    // 3.3 执行中间件模块，同时返回一个 promise 实例
    return _.promiseMiddleware(steps, ctx);
  }
}
