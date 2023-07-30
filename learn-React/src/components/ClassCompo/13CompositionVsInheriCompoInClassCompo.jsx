import React, { Component } from 'react';
import ChildCompoForComposition from './14ChildCompoForComposition.jsx';

class CompositionVsInheriCompoInClassCompo extends Component {
    render() {
        return (
            <>
            <h2>Composition vs Inheritance in Class Compo</h2>
                Parent  Compo
                <ChildCompoForComposition title="Something" />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">
                        <ChildCompoForComposition title="Something composition">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                    <div className="col-3">
                        <ChildCompoForComposition title="Something composition">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                    <div className="col-3">
                        <ChildCompoForComposition title="Something composition">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                    <div className="col-3">
                        <ChildCompoForComposition title="Test">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                    <div className="col-3">
                        <ChildCompoForComposition title="Something ">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                    <div className="col-3">
                        <ChildCompoForComposition title="Checking">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">This will contain some other data</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </ChildCompoForComposition>
                    </div>
                </div>


            </>
        );
    }
}

export default CompositionVsInheriCompoInClassCompo;