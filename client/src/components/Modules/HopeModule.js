import React from 'react'
import history from '../../History'
import { useHistory , useLocation } from 'react-router-dom';
const Hope = () => {
    //const history = useHistory();
    return (
        <div>
            <div className="Hope-main" id='module' onClick={() => history.push('/Hope')} >
                    <h2>Hope</h2>     
            </div>
        </div>
    )
}

export default Hope
