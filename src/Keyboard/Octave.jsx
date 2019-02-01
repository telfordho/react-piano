import React from 'react';
import { Keys } from './Keys'
import Grid from "@material-ui/core/Grid";
import '../styles.css';

export const Octave = props => (
    <Grid className='Keyboard'>
        <Keys
            note='C'
            BlackKey
        />
        <Keys
            note='D'
            BlackKey
        />
        <Keys
            note='E'
        />
        <Keys
            note='F'
            BlackKey
        />
        <Keys
            note='G'
            BlackKey
        />
        <Keys
            note='A'
            BlackKey
        />
        <Keys
            note='B'
        />
    </Grid>
)