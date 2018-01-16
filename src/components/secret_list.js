import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => (
    <div>
        <h2 className='align-center'>Secret Operatives</h2>
        <ol>
            <li>John</li>
            <li>Jack</li>
            <li>Jill</li>
            <li>Jimmy</li>
        </ol>
    </div>
);

export default auth(SecretList);
 {/* by using auth here it requires authrition every time this component is used*/}
