import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import ROUTE_ROOT from './routes/root'

ReactDom.render(
    <Router history={browserHistory} routes={ROUTE_ROOT} />,
    document.getElementById('content')
);
