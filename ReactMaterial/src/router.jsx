import React, { Component } from 'react';
import FirstIntro from './01_Intro.jsx';
import Practical from './Practical1.jsx';

class router extends Component {
    render() {
        return (
            <>
            <FirstIntro/>
                <Practical/>
            </>
        );
    }
}

export default router;