import React from 'react';
import aboutinfo from '../../assets/images/aboutinfo.jpg'

const AboutInfo = () => {
    return (
        <div className='font-mono'>
            <h4 className='lg:text-3xl font-bold text-center text-teal-600  '>Welcome to the Aesthetic</h4>
            <div className="hero">

                <div className="hero-content flex-col  lg:flex-row-reverse ">

                    <div >

                        <img src={aboutinfo} className="rounded-lg" alt=''/>
                    </div>

                    <div>
                        <h4 className='text-sm lg:text-xl font-bold  text-teal-600  text-center lg:text-left'>ABOUT OUR CLINIC</h4>

                        <div tabIndex={0} className="collapse mt-4 bg-base-100  collapse-plus border border-base-300  rounded-box">
                            <div className="collapse-title text-xl uppercase  text-teal-600 font-medium">
                                Advanced Equipment
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse  mt-2  collapse-plus border border-base-300  rounded-box">
                            <div className="collapse-title text-xl uppercase font-medium   text-teal-600 ">
                                Certified Services
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse  mt-2 collapse-plus border border-base-300   rounded-box  ">
                            <div className="collapse-title text-xl uppercase  text-teal-600 font-medium">
                                Emergency Care
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse  mt-2 collapse-plus border border-base-300   rounded-box  ">
                            <div className="collapse-title text-xl uppercase text-teal-600 font-medium">
                                Qualified Doctors
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>







                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutInfo;