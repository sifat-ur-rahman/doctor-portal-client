import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

    const closeModal = () =>{
        setDeletingDoctor(null)
    }

    const handleDeleteDoctor = doctor =>{
        console.log(doctor);
    }

    const {data: doctors =[], }  = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data
            }
            catch(error){

            }
        }
    })
    console.log(doctors);
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctor: {doctors?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        doctors.map((doctor, i) => <tr key={doctor._id} className="hover">
        <th>{i+1}</th>
        <td><div className="avatar">
  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={doctor.image} alt=""/>
  </div>
</div></td>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.specialty}</td>
        <td>
        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="Confirmation-Modal" className="btn btn-sm btn-error">Delete</label>
            
            </td>
      </tr>)
      }
    </tbody>
  </table>
  {
    deletingDoctor && <ConfirmationModal
    title={`Are you sure you want to delete`}
    message={`If you delete ${deletingDoctor.name}`}
    closeModal={closeModal}
    successAction = {handleDeleteDoctor}
    modalData = {deletingDoctor}
    ></ConfirmationModal>
  }
</div>
        </div>
    );
};

export default ManageDoctor;