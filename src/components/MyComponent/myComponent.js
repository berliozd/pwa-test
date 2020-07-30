
import React, { useCallback } from 'react';
import {useAppContext} from '@magento/peregrine/lib/context/app'

import Button from "@magento/venia-ui/lib/components/Button";

const MyComponent = () => {
    const [appState, appApi] = useAppContext();
    const booleanStatus = appState.overlay;
    const { toggleDrawer } = appApi;

    const toggleStatus = useCallback(() => {
        toggleDrawer('myComponent');
    });

    const text = booleanStatus ? 'On' : 'Off';

    return <Button onClick={toggleStatus}>{text}</Button>;
};

export default MyComponent;
