import React from 'react';
import { PersonBadgeFill } from 'react-bootstrap-icons';
import {Stack} from "react-bootstrap"

const Liquidationsave = () => {
    return (
        <>
             <Stack gap={4} direction="horizontal">
                <div>
                    <Stack gap={2} direction="horizontal">
                        <PersonBadgeFill/>
                        <div>Esther</div>
                    </Stack>
                </div>
            </Stack>
        </>
    );
}

export default Liquidationsave;
