import React from 'react';

export default function MyInput(){
    return React.createElement('input', { id: 'inp-num','type': 'number', 'data-testid': 'element-input'});
}