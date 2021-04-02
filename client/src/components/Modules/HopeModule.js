import React from 'react'
import history from '../../History'

const Hope = () => {
    return (
        <div>
            <div className="Hope-main" id='module' onClick={() => history.push('/Hope')} >
                    <h2>Hope</h2>     
            </div>
        </div>
    )
}

export default Hope
