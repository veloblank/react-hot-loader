class Foo {
  constructor() {
    this.bar = async (...params) => await this.__bar__REACT_HOT_LOADER__(...params);
  }

  async __bar__REACT_HOT_LOADER__(a, b) {
    return await b(a);
  }

}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Foo, "Foo", __FILENAME__);
}();

;