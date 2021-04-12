import React from 'react';

export default function MyButton(){
    return React.createElement('button', {'data-testid': 'element-button'}, 'Add to account');
}