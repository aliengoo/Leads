///<reference path="./sandbox.config.ts"/>

"use strict";

module leads.views.sandbox {
  var mod = angular.module("leads.views.sandbox", [
    "ui.router",
    "leads.templates",
    "leads.components"]);

  mod.config(SandboxConfig);
}