import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from './index';
import { BrowserRouter as Router } from 'react-router-dom'

const setup = () => {
    const breadcrumbList =[
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" }
    ];

    const { container } = render(
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>
    );
    const Breadcrumb = container.querySelector(`.breadcrumb`);

    return {
        breadcrumb
    };
};