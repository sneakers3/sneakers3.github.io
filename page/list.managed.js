/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* This file will be auto-generated each and everytime you save your project.
* Do not hand edit this file.
********************************************************************************/

// page class
/**
*  Object _list_page()
*  @super _page
*  @constructor
*  @memberOf _list_page 
*/
function _list_page() {
}

//inherit _page
_list_page.prototype = new _page("list");

// widget assist
_list_page.prototype.header1 = undefined;
_list_page.prototype.newSoundButton = undefined;
_list_page.prototype.settingsButton = undefined;
_list_page.prototype.content = undefined;
_list_page.prototype.soundListView = undefined;
_list_page.prototype.startButton = undefined;

// default widget event handler
_list_page.prototype.newSoundButton_ontap = function(event) {};
_list_page.prototype.settingsButton_ontap = function(event) {};
_list_page.prototype.soundListView_ontap = function(event) {};
_list_page.prototype.soundListView_ontaphold = function(event) {};
_list_page.prototype.startButton_ontap = function(event) {};

_list_page.prototype.init_page = function(isStartPage, htmlPath, cssPath, managedCssPath) {
	this.htmlPath = htmlPath;
	this.cssPath = cssPath;
	this.managedCssPath = managedCssPath;
	this._init_page(function() {

		// widget assist (real object binding)

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.header1 = $("#list #header1");

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.newSoundButton = $("#list #newSoundButton");

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.settingsButton = $("#list #settingsButton");

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.content = $("#list #content");

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.soundListView = $("#list #soundListView");

		/**
		 * @type jQueryObject
		 */
		_list_page.prototype.startButton = $("#list #startButton");

		// bind widget event handler
		_list_page.prototype.newSoundButton.bind("tap", function(event) { _list_page.prototype.newSoundButton_ontap(event); });
		_list_page.prototype.settingsButton.bind("tap", function(event) { _list_page.prototype.settingsButton_ontap(event); });
		_list_page.prototype.soundListView.bind("tap", function(event) { _list_page.prototype.soundListView_ontap(event); });
		_list_page.prototype.soundListView.bind("taphold", function(event) { _list_page.prototype.soundListView_ontaphold(event); });
		_list_page.prototype.startButton.bind("tap", function(event) { _list_page.prototype.startButton_ontap(event); });

	}, isStartPage);

};
