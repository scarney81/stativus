/*globals StativusDocs*/
(function(app) {

  if (!app.Statechart) throw new Error('The statechart object has not been initialized.');

  app.Statechart.addState('guide', {

    parentState: 'application',

    enterState: function() {
      this.sendEvent('activateNavigation', 'guide');
      this.sendEvent('renderView', '#guide-template');
    },

    exitState: function() {
      this.sendEvent('scrollTop');
      this.sendEvent('deactivateNavigation');
      this.sendEvent('clearContentContainer');
    }

  });

})(StativusDocs);