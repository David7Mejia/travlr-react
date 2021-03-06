// frontend/src/components/SignupFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css';


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div >
            <button id='btn_signup' className='main-btn' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    );
}

export default SignUpFormModal;
