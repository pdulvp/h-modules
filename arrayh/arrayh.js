/**
 * Author: pdulvp@laposte.net
 * Licence: CC-BY-NC-SA-4.0
 *
 * based on existing components.
 */

if (typeof require !== "undefined" && typeof exports === 'object' && typeof module === 'object') { 

	var arrayh = {
		
		flat: function (array) {
			return [].concat.apply([], array);
		}
		
	};

	//export to nodeJs
	if(typeof exports === 'object' && typeof module === 'object') {
		module.exports = arrayh;
	}
	
}