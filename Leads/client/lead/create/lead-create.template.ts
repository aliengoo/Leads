module lead {
  "use strict";

  export function leadCreateTemplate(): string {
    return `
        <flex>
          <lead-create-sidebar>
          </lead-create-sidebar>

          <flex-item grow="1">
            <div class="col-sm-6 col-md-6 col-lg-4">
              <view-sub-header>
                  Customer details
                </view-sub-header>
                <customer customer="vm.customer"></customer>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
                <view-sub-header>
                  Customer address
                </view-sub-header>
                <address address="vm.customer.address"></address>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4">
              <view-sub-header>
                  Lead details
                </view-sub-header>
                <lead-details lead="vm.lead">
                </lead-details>
            </div>
          </flex-item>
        </flex>
    `;
  }
}
