import {EventListener} from "./util-section/eventListener";
import {setPrototype} from "./util-section/setPrototype";

export let ImgLoad = function () {
  EventListener.call(this, 'imgLoad');
  this.name = 'imgLoad';
  this.loadedImg = {};
  this.imgNum = 0;
  this.loadedImgNum = 0;
};
setPrototype(ImgLoad, EventListener);
ImgLoad.prototype.loadImg = function (imgArr) {
  if (!Array.isArray(imgArr)) {
    return;
  }
  this.trigger('load.start');
  var needLoadImgArr = this.getNeedLoadImgArr(imgArr);
  if (needLoadImgArr.length > 0) {
    this.imgNum = needLoadImgArr.length;
    this.loadedImgNum = 0;
    for (var i = 0; i < needLoadImgArr.length; i++) {
      this.imgLoad(needLoadImgArr[i])
    }
  } else {
    this.trigger('load.end');
  }
};
ImgLoad.prototype.getNeedLoadImgArr = function (imgArr) {
  var needLoadImgArr = [];
  var me = this;
  imgArr.forEach(function (item) {
    if (!me.loadedImg[item]) {
      needLoadImgArr.push(item);
    }
  });
  return needLoadImgArr
};
ImgLoad.prototype.loadOneImg = function (imgSrc, imgObj) {
  this.loadedImgNum++;
  this.loadedImg[imgSrc] = imgObj
  this.trigger('load.progress', {
    progress: parseInt(this.loadedImgNum / this.imgNum * 100)
  });
  if (this.loadedImgNum === this.imgNum) {
    this.trigger('load.end');
  }
};

ImgLoad.prototype.imgLoad = function (src) {
  var me = this;
  var img = new Image();
  img.onload = function () {
    me.loadOneImg(this.src, this);
    this.onload = null;
    this.onerror = null;
  };
  img.onerror = function () {
    console.error('图片加载失败' + this.src);
    this.onload = null;
    this.onerror = null;
  };
  img.src = src;
};
ImgLoad.prototype.getImg = function (src) {
  return this.loadedImg[src];
};
