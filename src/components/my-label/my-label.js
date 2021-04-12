import React from 'react';

export default function MyLabel(){
    return React.createElement('label', { htmlFor: 'inp-num','data-testid': 'element-label'}, "Count:");
}