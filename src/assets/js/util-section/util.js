var isArray = Array.isArray;
var isPlainObject = function (obj) {
//   1.是否是对象，用typeof判断即可。
//   2.该对象的原型对象是否为Object.prototype。
  if(typeof obj !== 'object' || obj.nodeType) {
    return false;
  }

  try {
    // Not own constructor property must be Object

    if ( obj.constructor
      && !Object.prototype.hasOwnProperty.call(obj, "constructor")
      && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")
    ){

      return false;
    }

  } catch ( e ) {
    // IE8,9 Will throw exceptions on certain host objects #9897
    return false;
  }
  return true;

  var key;
  for ( key in obj ) {}

  return key === undefined;
};

var extend = function () {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }

  if ( typeof target !== "object") {
    target = {};
  }

  // 开始遍历需要被扩展到target上的参数
  for ( ; i < length; i++ ) {
    // 处理第i个被扩展的对象，即除去deep和target之外的对象
    if ( (options = arguments[ i ]) != null ) {
      // 遍历第i个对象的所有可遍历的属性
      for ( name in options ) {
        // 根据被扩展对象的键获得目标对象相应值，并赋值给src
        src = target[ name ];
        // 得到被扩展对象的值
        copy = options[ name ];

        // 这里为什么是比较target和copy？不应该是比较src和copy吗？
        if ( target === copy ) {
          continue;
        }

        // 当用户想要深度操作时，递归合并
        // copy是纯对象或者是数组
        if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = isArray(copy)) ) ) {
          // 如果是数组
          if ( copyIsArray ) {
            // 将copyIsArray重新设置为false，为下次遍历做准备。
            copyIsArray = false;
            // 判断被扩展的对象中src是不是数组
            clone = src && isArray(src) ? src : [];
          } else {
            // 判断被扩展的对象中src是不是纯对象
            clone = src && isPlainObject(src) ? src : {};
          }

          // 递归调用extend方法，继续进行深度遍历
          target[ name ] = extend( deep, clone, copy );

          // 如果不需要深度复制，则直接把copy（第i个被扩展对象中被遍历的那个键的值）
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // 原对象被改变，因此如果不想改变原对象，target可传入{}
  return target;
};

export default {
  extend: extend
}
