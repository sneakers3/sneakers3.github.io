/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* User should hand edit this file.
********************************************************************************/

/**
 * Add new alert to history
 */
function addNewAlert() {
    
}

function historyMatchHandler( event, soundID ) {
	console.log( 'history matchHandler', soundID );
	var currentDate = new Date;
	var history = getHistoryByID( soundID );

	// check history list
	// check time stamp 
	if (!history) {
		addNewHistory(soundID, currentDate);
	} else {
		var diffMs = currentDate - history.timestamp;
		var diffMin =  Math.round(((diffMs % 86400000) % 3600000) / 60000);
		if ( diffMin < 1) {
			// ignore match
			return;
		} else {
			history.timestamp = currentDate;
		}
	}

	
	// TODO
	
	
	// push history list
	
	var sound = getSoundByID(soundID);
    var noti = {
            id : sound.id,
            message : sound.title,
            vibration : true // FIXME: sound..alertMethods[0], [1] check
    }
    notification(noti);

    updateHistoryList()
}

function updateHistoryList() {
	var historyListView = $('#alertList');
	historyListView.children().remove();
	
	var currentDate = new Date;
	
	for (var i in listenerApp.history) {
		var history = listenerApp.history[i];
		var sound = getSoundByID(history.soundID);

		var diffMs = currentDate - history.timestamp;
		var diffMin =  Math.round(((diffMs % 86400000) % 3600000) / 60000);
		
		var li = '<li><img src="../res/thumbnail.jpg" alt="icon" class="ui-li-bigicon">' + sound.title + '<span class="ui-li-text-sub">' + diffMin + '분전' + '</span></li>';
		historyListView.append(li).listview('refresh');
	}
}

/**
 * @param {Object} event
 * @base _history_page
 * @returns {Boolean}
*/
_history_page.prototype.onpagebeforehide = function(event) {
    console.log('history page before hide');
    stop();
    listenerApp.off('soundMatched', historyMatchHandler);
};

/**
 * @param {Object} event
 * @base _history_page
 * @returns {Boolean}
*/
_history_page.prototype.onpagebeforeshow = function(event) {
    console.log('history page before show');
    start();

    listenerApp.on('soundMatched', historyMatchHandler);
};

/**
 * @param {Object} event
 * @base _history_page
 * @returns {Boolean}
*/
_history_page.prototype.backButton_ontap = function(event) {
    pageManager.changePage('list');
};

/**
 * @param {Object} event
 * @base _history_page
 * @returns {Boolean}
*/
_history_page.prototype.trashButton_ontap = function(event) {
    // TODO
};

