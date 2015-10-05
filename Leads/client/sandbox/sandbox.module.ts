///<reference path="./sandbox.config.ts"/>
///<reference path="../bootstrap/bootstrap.module.ts"/>
///<reference path="../customer/customer.module.ts"/>


"use strict";

namespace sandbox {
  var mod = angular.module("leads.views.sandbox", [
    "ui.router",
    "leads.templates", "bootstrap", "customer", "lead"
  ]);

  mod.config(SandboxConfig);
}