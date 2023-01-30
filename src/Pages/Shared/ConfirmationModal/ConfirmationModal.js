import React from 'react';

const ConfirmationModal = ({title,message,closeModal, successButtonName,modalData, successAction}) => {
    return (
        <div>
           

            {/*  title & mesg recived from mange doctor file through props*/}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>   
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="confirmation-modal"
                        onClick={()=>successAction(modalData)}
                        className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className="btn btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;