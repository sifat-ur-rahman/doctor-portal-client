import React from 'react';

const ConfirmationModal = ({title, message, closeModal,modalData, successAction}) => {
    return (
        <div>
           



<input type="checkbox" id="Confirmation-Modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="Confirmation-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={() => successAction(modalData)} htmlFor="Confirmation-Modal" className="btn">Yay!</label>
      <button onClick={closeModal} className='btn btn-outline'>cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;