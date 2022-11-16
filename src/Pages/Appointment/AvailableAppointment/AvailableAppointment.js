import React, { useState } from 'react';
import { format } from 'date-fns';

import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import {  useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
   const [treatment, setTreatment] = useState(null)
   const date = format(selectedDate,'PP')

   const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
    .then(res => res.json())
   })

   if(isLoading){
    return <Loading></Loading>
   }

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
    
    return (
        <div className='mt-16'>
           <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selectedDate,'PP')}</p> 
          
           <div className='grid m-8 mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions?.map(option => <AppointmentOptions
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
        refetch={refetch}
           ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;