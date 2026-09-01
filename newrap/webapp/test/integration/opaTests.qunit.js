sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ibs/managesite/test/integration/FirstJourney',
		'com/ibs/managesite/test/integration/pages/TravelList'
    ],
    function(JourneyRunner, opaJourney, TravelList) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('newtravel') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
                }
            },
            opaJourney.run
        );
    }
);