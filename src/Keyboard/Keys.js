import React from 'react';
import '../styles.css';

export const Keys = props => (
    <div style={{position:'relative'}}>
        <div className='WhiteKey'/>
        {
            props.BlackKey?
            <span className='BlackKey'/>
            :null
        }
    </div>
)