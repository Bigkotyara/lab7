'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(RecordLike);
}

function RecordLike(e) {
	// Prevent following the link
	e.preventDefault();

	ga('create', 'UA-114628737-1', 'auto');
	//ga('send', 'pageview');
	ga("send", "event", 'like', 'click');

}