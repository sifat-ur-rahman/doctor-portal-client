import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
   const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])

    return (
        <div className='mt-16'>
           <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate,'PP')}</p> 
           <div className='grid m-8 mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
           </div>
           {
            treatment &&
            <BookingModal
        treatment={treatment}
        selectedDate={selectedDate}
        setTreatment={setTreatment}
           ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;