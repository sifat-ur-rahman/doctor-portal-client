import React from 'react';
import img1 from '../../../../assets/images/treatment.png'

const CareCard = () => {
    return (
        <div className="mt-8 card w-auto lg:card-side bg-base-100  shadow-xl">
  <figure><img className='lg:w-1/2' src={img1} alt="Album"/></figure>
  <div className="card-body lg:w-1/2">
    <h2 className="card-title text-3xl font-bold">Exceptional Dental Care,<br /> on Your Terms</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default CareCard;