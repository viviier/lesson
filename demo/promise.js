/**
  * @file simple-promise
  *
  * 先说思路
  * 一个myPromise 接收一个fn
  * 内部有一个event callbacks 和 then
  * 还有一个resolve 接收一个value，然后shift出event的函数传值
  * 然后调用fn 传一个resolve
  *
 **/


function MyPromise(fn) {
	let events = [];

	this.then = function(f) {
		events.push(f);
		return this;
	}

	function resolve(value) {
		let f = events.shift();
		f(value, resolve);
	}

	fn(resolve);
}