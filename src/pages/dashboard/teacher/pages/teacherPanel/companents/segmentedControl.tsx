import React, { FunctionComponent } from "react";
import { SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { useAuth } from "modules/auth/context";

interface SegmentedControlProps {}

const MySegmentedControl: FunctionComponent<SegmentedControlProps> = () => {
    
    const { user } = useAuth();
    
    return (  
        <MantineSegmentedControl data={[  ]}/>
    );
}

export default MySegmentedControl;
