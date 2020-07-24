import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testomony from 'parts/Testimony';
import Footer from 'parts/Footer';

import ItemDetails from 'json/itemDetails.json';

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
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails}/>
                <FeaturedImage data={ItemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5 text-justify">
                            <Fade bottom>
                                <PageDetailDescription data={ItemDetails} />
                            </Fade>
                        </div>
                        <div className="col-5"><BookingForm itemDetails={ItemDetails} /></div>
                    </div>
                </section>
                <Categories data={ItemDetails.categories} />
                <Testomony data={ItemDetails.testimonial} />
                <Footer/>
            </>
        );
    }

}