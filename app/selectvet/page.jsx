import BasicHeader from '@/components/Common/BasicHeader';
import Selectvet from '@/components/InnerPage/Selectvet';
import React from 'react';

const page = () => {
    return (
        <div>
             <BasicHeader heading="service" />
             <Selectvet/>
        </div>
    );
};

export default page;