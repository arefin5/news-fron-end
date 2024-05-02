import React from 'react';
import Base from '../components/Base';
import Sidebar from '../components/dashboard/Sidebar';

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

const Page = () => {
    return (
        <>
            <div className='d-flex'>
                <div>
                    <Sidebar />
                </div>

                {/*  */}
                <div className='w-75 main-desh'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 'auto' }}>
                            Generate Articles
                        </h3>
                        <a href='test.com' className='text-last' style={{ marginLeft: 'auto' }}>Video</a>
                    </div>
                    <p>Fill the information below to start generating articles for your business.</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className='css-1147eql '>1</p>
                        <p className='config_h'>Set your configuration</p>
                        <div style={{ marginLeft: 'auto' }}>
                            <button className='pre-buttons'>
                                Load Preset
                            </button>


                            <a href="/dashboard/customization/presets/create" className="">
                                <button type="button"
                                    class="chakra-button css-1csoi55 button-tops">+ Create Preset</button>

                            </a>
                        </div>

                    </div>
                    <div style={{
                        border: '2px solid #F5F5F5'
                    }}>


                        <Base />
                     
                    </div>
<br/>
<br />
                    <div className='d-flex'>
                      <p className='css-1147eql '>2</p>
                        <p className='config_h'>Generate Articles</p>
                      </div>
                </div >
               

            </div >




        </>
    );
}

export default Page;
