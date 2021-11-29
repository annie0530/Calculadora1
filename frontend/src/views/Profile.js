import React from 'react';
import { Navigate } from 'react-router';
import Liquidationlist from '../components/LiquidationList';

const Profile = () => {
    var component = <Navigate to="/home"/>;
    if (JSON.parse(localStorage.getItem('session'))!=undefined){
        component = <Liquidationlist/>
    }
    return (
        <div>
            {component}
        </div>
    )
}

export default Profile;