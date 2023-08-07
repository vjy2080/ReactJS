import React from 'react';
import ChildCompo from './ChildCompo.jsx';

const PropsinFunctionalCompo = () => {
    return (
        <>
          <div className="row">
            <div className="col-md-3"> <ChildCompo title="p1"/> </div>
            <div className="col-md-3"> <ChildCompo title="p2"/> </div>
            <div className="col-md-3"> <ChildCompo title="p3"/> </div>
            <div className="col-md-3"> <ChildCompo title="p4"/> </div>
          </div>
        </>
    );
};

export default PropsinFunctionalCompo;
