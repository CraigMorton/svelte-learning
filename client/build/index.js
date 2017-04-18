/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return assign; });
/* unused harmony export differs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dispatchObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return detachNode; });
/* unused harmony export detachBetween */
/* unused harmony export destroyEach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createText; });
/* unused harmony export createComment */
/* unused harmony export addEventListener */
/* unused harmony export removeEventListener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setAttribute; });
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return proto; });
/* unused harmony export protoDev */
function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function detachBetween ( before, after ) {
	while ( before.nextSibling && before.nextSibling !== after ) {
		before.parentNode.removeChild( before.nextSibling );
	}
}

function destroyEach ( iterations, detach, start ) {
	for ( var i = start; i < iterations.length; i += 1 ) {
		iterations[i].destroy( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createSvgElement ( name ) {
	return document.createElementNS( 'http://www.w3.org/2000/svg', name );
}

function createText ( data ) {
	return document.createTextNode( data );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener ( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener ( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute ( attribute, value );
}

function setXlinkAttribute ( node, attribute, value ) {
	node.setAttributeNS( 'http://www.w3.org/1999/xlink', attribute, value );
}

function getBindingGroupValue ( group ) {
	var value = [];
	for ( var i = 0; i < group.length; i += 1 ) {
		if ( group[i].checked ) value.push( group[i].__value );
	}
	return value;
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) return;

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.post : this._observers.pre;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function observeDev ( key, callback, options ) {
	var c = ( key = '' + key ).search( /[^\w]/ );
	if ( c > -1 ) {
		var message = "The first argument to component.observe(...) must be the name of a top-level property";
		if ( c > 0 ) message += ", i.e. '" + key.slice( 0, c ) + "' rather than '" + key + "'";

		throw new Error( message );
	}

	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) group[ key ].splice( index, 1 );
		}
	};
}

function on ( eventName, handler ) {
	if ( eventName === 'teardown' ) return this.on( 'destroy', handler );

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function onDev ( eventName, handler ) {
	if ( eventName === 'teardown' ) {
		console.warn( "Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2" );
		return this.on( 'destroy', handler );
	}

	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) handlers.splice( index, 1 );
		}
	};
}

function set ( newState ) {
	this._set( newState );
	( this._root || this )._flush();
}

function _flush () {
	if ( !this._renderHooks ) return;

	while ( this._renderHooks.length ) {
		var hook = this._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

var protoDev = {
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	_flush: _flush
};

function noop () {}

function assign ( target ) {
	for ( var i = 1; i < arguments.length; i += 1 ) {
		var source = arguments[i];
		for ( var k in source ) target[k] = source[k];
	}

	return target;
}

function differs ( a, b ) {
	return ( a !== b ) || ( a && ( typeof a === 'object' ) || ( typeof a === 'function' ) );
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) continue;

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

		var callbacks = group[ key ];
		if ( !callbacks ) continue;

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) continue;

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = (function () {
  return {
    data: () => ({
      title: "Svelte innit"
    }),
    // components: { Header },
  };
}());

var added_css = false;
function add_css () {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'style' );
	style.textContent = "\n  header[svelte-1222395350], [svelte-1222395350] header {\n    display: inline-block;\n  }\n  h1[svelte-1222395350], [svelte-1222395350] h1 {\n    color: blue;\n  }\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( style, document.head );

	added_css = true;
}

function create_main_fragment ( root, component ) {
	var header = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'header' );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["g" /* setAttribute */])( header, 'svelte-1222395350', '' );
	var h1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'h1' );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( h1, header );
	var last_text = root.title;
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["h" /* createText */])( last_text );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( text, h1 );

	return {
		mount: function ( target, anchor ) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["i" /* insertNode */])( header, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.title ) !== last_text ) {
				text.data = last_text = tmp;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["j" /* detachNode */])( header );
			}
		}
	};
}

function Header ( options ) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( template.data(), options.data );
	
	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};
	
	this._handlers = Object.create( null );
	
	this._root = options._root;
	this._yield = options._yield;
	
	this._torndown = false;
	if ( !added_css ) add_css();
	
	this._fragment = create_main_fragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( Header.prototype, __WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["e" /* proto */] );

Header.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( {}, oldState, newState );
	
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.post, newState, oldState );
};

Header.prototype.teardown = Header.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Hello = __webpack_require__(4);

var _Hello2 = _interopRequireDefault(_Hello);

var _Header = __webpack_require__(1);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var indexContainer = new _index2.default({
    target: document.body
  });
  var header = new _Header2.default({
    target: document.getElementById('header-div')
  });
  var hello = new _Hello2.default({
    target: document.getElementById('hello-div')
  });
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__ = __webpack_require__(0);


var template = (function () {
  return {
    data () {
      return {
        greeting: "Oh, hello!"
      }
    }
  };
}());

var added_css = false;
function add_css () {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'style' );
	style.textContent = "\n  [svelte-4271082805].heading, [svelte-4271082805] .heading {\n    color: #cc0000;\n  }\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( style, document.head );

	added_css = true;
}

function create_main_fragment ( root, component ) {
	var h1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'h1' );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["g" /* setAttribute */])( h1, 'svelte-4271082805', '' );
	h1.className = "heading";
	var last_text = root.greeting;
	var text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["h" /* createText */])( last_text );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( text, h1 );

	return {
		mount: function ( target, anchor ) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["i" /* insertNode */])( h1, target, anchor );
		},
		
		update: function ( changed, root ) {
			var tmp;
			
			if ( ( tmp = root.greeting ) !== last_text ) {
				text.data = last_text = tmp;
			}
		},
		
		destroy: function ( detach ) {
			if ( detach ) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["j" /* detachNode */])( h1 );
			}
		}
	};
}

function Hello ( options ) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( template.data(), options.data );
	
	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};
	
	this._handlers = Object.create( null );
	
	this._root = options._root;
	this._yield = options._yield;
	
	this._torndown = false;
	if ( !added_css ) add_css();
	
	this._fragment = create_main_fragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( Hello.prototype, __WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["e" /* proto */] );

Hello.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( {}, oldState, newState );
	
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.post, newState, oldState );
};

Hello.prototype.teardown = Hello.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__ = __webpack_require__(0);




var template = (function () {
  return {
    data: () => ({
      // title: "Svelte innit"
    }),
  };
}());

var added_css = false;
function add_css () {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["a" /* createElement */])( 'style' );
	style.textContent = "\n\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["b" /* appendNode */])( style, document.head );

	added_css = true;
}

function create_main_fragment ( root, component ) {
	var header = new __WEBPACK_IMPORTED_MODULE_0__components_Header__["default"]({
		target: null,
		_root: component._root || component,
		data: { title: "Passing from container" }
	});

	return {
		mount: function ( target, anchor ) {
			header._fragment.mount( target, anchor );
		},
		
		update: __WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["c" /* noop */],
		
		destroy: function ( detach ) {
			header.destroy( detach );
		}
	};
}

function Index ( options ) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( template.data(), options.data );
	
	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};
	
	this._handlers = Object.create( null );
	
	this._root = options._root;
	this._yield = options._yield;
	
	this._torndown = false;
	if ( !added_css ) add_css();
	this._renderHooks = [];
	
	this._fragment = create_main_fragment( this._state, this );
	if ( options.target ) this._fragment.mount( options.target, null );
	
	this._flush();
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( Index.prototype, __WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["e" /* proto */] );

Index.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["d" /* assign */])( {}, oldState, newState );
	
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) this._fragment.update( newState, this._state );
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_craigm_craigwd_js_stuff_svelte_first_app_client_node_modules_svelte_shared_js__["f" /* dispatchObservers */])( this, this._observers.post, newState, oldState );
	
	this._flush();
};

Index.prototype.teardown = Index.prototype.destroy = function destroy ( detach ) {
	this.fire( 'destroy' );

	this._fragment.destroy( detach !== false );
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map