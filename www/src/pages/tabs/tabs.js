function TabsPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/tabs/tabs.html"
  }).Class({
    constructor: function() {

    },
    ngAfterViewInit: function () {
      window.application.init()
    }
  });
}
