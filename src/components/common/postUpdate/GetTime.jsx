import React from 'react';
import moment from "moment/moment";

const GetTime = (timeFormat) => {
    return moment().format(timeFormat);
}

export default GetTime