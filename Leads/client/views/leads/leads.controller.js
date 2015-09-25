"use strict";
var leads;
(function (leads) {
    var views;
    (function (views) {
        var LeadsController = (function () {
            /* @ngInject */
            function LeadsController(leadsService) {
            }
            return LeadsController;
        })();
        views.LeadsController = LeadsController;
    })(views = leads.views || (leads.views = {}));
})(leads || (leads = {}));
