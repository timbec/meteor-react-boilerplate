import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Tracker } from "meteor/tracker";

import DashboardHeader from "./DashboardHeader";

export default () => {
    return (
        <div>
            <DashboardHeader title="Dashboard" />
            Dashboard Page Content
        </div>
    );
};
