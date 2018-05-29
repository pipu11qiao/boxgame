var isArray = Array.isArray;

var extend = function () {

  var isDeep,copy,clone,i = 0,target,length = arguments.length;
  if(typeof arguments[0] === 'boolean') {
    isDeep = arguments[0];
    i = 1;
  }
  // 转化的目标
  target = arguments[i];
  i ++;
  for(; i < length; i ++){
    copy = arguments[i];
    if(typeof copy === 'object') {
      // 判断类型
      if(isArray(copy)) {
        if(!isArray(target)){
          target = new Array(copy.length);
        }
        for (var m = 0; m < (copy.length > target.length ? copy : target).length; m++) {

          if (isDeep && typeof copy[0] === 'object') {
            target[m] = extend(true, target[m], copy[m]);
          }else {
            // 浅克隆 或者 target 不是对象
            if(typeof copy[m] !== 'undefined') {
              target[m] = copy[m];
            }
          }
        }
      }else {
        if(typeof target !== 'object') {
          target = {};
        }
        for (var name in copy) {
          if(name === 'offset') {
          }
          if (isDeep && typeof copy[name] === 'object') {
            target[name] = extend(true, target[name], copy[name]);
          }else {
            // 浅克隆 或者 target 不是对象
            if(typeof copy[name] !== 'undefined') {
              target[name] = copy[name];
            }
          }
        }
      }
    }
  }
  return target;
};

export default {
  extend: extend
}
