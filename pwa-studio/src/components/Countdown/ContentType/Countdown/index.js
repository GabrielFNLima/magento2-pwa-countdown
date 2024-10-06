import React from 'react';
import configAggregator from './configAggregator';

export default {
    configAggregator,
    component: React.lazy(() => import('./countdown'))
}
