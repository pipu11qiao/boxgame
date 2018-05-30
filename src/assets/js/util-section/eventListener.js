// 广播的对象
export function EventListener() {
  this.name = 'eventListener';
  this._eventListeners = {};
};
EventListener.prototype = {
  constructor: EventListener,
  on: function (eventName, callback) {
    // 判断该事件有没有人监听，如果没有加入，如果已经有了push
    if (!this._eventListeners[eventName]) {
      this._eventListeners[eventName] = [];
    }
    this._eventListeners[eventName].push(callback);
  },
  off: function () {
    if (arguments.length === 0) {
      this._eventListeners = {}; // 取消所有事件
    } else {
      if (typeof arguments[0] !== 'string') {
        return;
      }
      var eventName = arguments[0];
      if (arguments[1] && typeof arguments[1] === 'function') {
        // 判断该事件有没有被注册
        if (!this._eventListeners[eventName]) {
          return;
        }
        // 找到这个方法干掉他
        var index = this._eventListeners[eventName].indexOf(arguments[1]);
        if (index > -1) {
          this._eventListeners.splice(index, 1);
        }
      } else {
        this._eventListeners[eventName] = undefined;
      }
    }
  },
  trigger: function (eventName, data) {
    // 判断事件有没有被注册
    if (typeof arguments[0] !== 'string') {
      return;
    }
    if (!Array.isArray(this._eventListeners[eventName]) || this._eventListeners.length === 0) {
      return;
    }
    this._eventListeners[eventName].forEach(function (item) {
      item(data);
    });

  }
};
