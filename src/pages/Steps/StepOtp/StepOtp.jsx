import React from 'react';
import styles from './StepOtp.module.css';

const StepOtp = ({onNext}) => {
    return (
      <>
      <div>Otp</div>
      <button onClick={onNext}>
      Next
      </button>
      </>
    )
}

export default StepOtp
