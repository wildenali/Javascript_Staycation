import React, { Component } from 'react';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';

import itemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHred: "" },
            { pageTitle: "House Details", pageHred: "" },
        ];
        return(
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                    breadcrumb={breadcrumb}
                    data={itemDetails}
                ></PageDetailTitle>
            </>
        );
    }

}
