import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div className='mt-16'>
           <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate,'PP')}</p> 
        </div>
    );
};

export default AvailableAppointment;