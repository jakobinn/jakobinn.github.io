$(function () {
	var filterList = {
		init: function () {
			$('#article-list').mixItUp({
  				selectors: {
    			  target: '.article',
    			  filter: '.filter'
    		  	}
			});
		}
	};
	filterList.init();
});