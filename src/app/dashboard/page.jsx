import React from 'react';
import Base from '../components/Base';
import Content from "../components/Content"
const Page = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ marginRight: 'auto' }}>
                    Generate Articles
                </h1>
                <a href='test.com' className='text-last' style={{ marginLeft: 'auto' }}>Video</a>
            </div>
            <p>Fill the information below to start generating articles for your business.</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='top-n'>1</p>
                <p style={{ marginRight: '10px' }}>Set your configuration</p>
                <div style={{ marginLeft: 'auto' }}>
                    <button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', marginRight: '10px' }}>
                        Load Preset
                    </button>
                    <a href="/dashboard/customization/presets/create" className="custom-button">
                        <button type="button">
                            + Create Preset
                        </button>
                    </a>
                </div>
            </div>
            <Base />
            <Content/>
        </>
    );
}

export default Page;
