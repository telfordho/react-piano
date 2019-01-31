import React from 'react';
import { Keys } from './Keys'
import '../styles.css';

export const Keyboard = props => (
    <div className='Keyboard'>
        <Keys
            note='C'
            keyCode={65}
            keyboardPress='A'
            BlackKey
        />
        {/* <BlackKey
            note='C_sharp'
            keyCode={87}
            keyboardPress='W'
            style={{left:'10%'}}
        /> */}
        <Keys
            note='D'
            keyCode={83}
            keyboardPress='S'
            BlackKey
        />
        {/* <BlackKey
            note='D_sharp'
            keyCode={69}
            keyboardPress='E'
            style={{left:'20%'}}
        /> */}
        <Keys
            note='E'
            keyCode={68}
            keyboardPress='D'
        />
        <Keys
            note='F'
            keyCode={70}
            keyboardPress='F'
            BlackKey
        />
        {/* <BlackKey
            note='F_sharp'
            keyCode={84}
            keyboardPress='T'
        /> */}
        <Keys
            note='G'
            keyCode={71}
            keyboardPress='G'
            BlackKey
        />
        {/* <BlackKey
            note='G_sharp'
            keyCode={89}
            keyboardPress='Y'
        /> */}
        <Keys
            note='A'
            keyCode={72}
            keyboardPress='H'
            BlackKey
        />
        {/* <BlackKey
            note='B_flat'
            keyCode={85}
            keyboardPress='U'
        /> */}
        <Keys
            note='B'
            keyCode={74}
            keyboardPress='J'
        />
    </div>
)