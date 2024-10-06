import React from 'react';
import { setContentTypeConfig } from '@magento/pagebuilder/lib/config';

import ContentTypeConfig from './ContentType/Countdown';

setContentTypeConfig('example_countdown', ContentTypeConfig);

const Countdown = (props) => {
    return null;
};

export default Countdown;
