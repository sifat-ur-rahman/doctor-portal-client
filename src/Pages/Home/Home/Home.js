import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Service/Services';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';
import CareCard from './CareCard/CareCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <CareCard></CareCard>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;