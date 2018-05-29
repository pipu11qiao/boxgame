// 设置继承
export let setPrototype = function (child, parent) {
  var Super = function () {
  };
  Super.prototype = parent.prototype;
  child.prototype = new Super();
  child.prototype.constructor = child;
};
