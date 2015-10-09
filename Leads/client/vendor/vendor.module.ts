///<reference path="jquery.service.ts"/>
///<reference path="lo-dash.service.ts"/>
///<reference path="tween-max.service.ts"/>
///<reference path="timeline-max.service.ts"/>
///<reference path="moment.service.ts"/>

module vendor {
  "use strict";

  angular.module("vendor", [])
    .provider("$", JQueryService)
    .provider("_", LoDashService)
    .provider("TweenMax", TweenMaxService)
    .provider("TimelineMax", TimelineMaxService)
    .provider("moment", MomentService);
}
