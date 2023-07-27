import React, { Component } from 'react';

class ConditionalrenderingClassCompo extends Component {
    state = {
        data: true
    }
    // btnClickHandle = ()=>this.setState({data:!this.state.data})
    btnClickHandle = () => { this.setState({ data: !this.state.data }) }

    render() {
        return (
            <>
                <button onClick={this.btnClickHandle}>Disp Prod</button>
                <div className="col-lg-3 my-5">
                    { (this.state.data) ? <div className="card">
                        <img src="https://media.istockphoto.com/id/1256005283/photo/vintage-classic-motorcycle-headlight.jpg?s=1024x1024&w=is&k=20&c=IfhzwIfEGqZOSnwh_rO67g32iASDfaYdn0LyT9QDcKQ=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> : <div className="card" aria-hidden="true">
                        <img src="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div> }
                    

                    
                </div>
            </>
        )
    }

    // render() {
    //     if(this.state.data){ return (
    //         <>
    //             {/* <button onClick={()=>this.setState({data:!this.state.data})}>Disp Prod</button> */}
    //             {/* <button onClick={this.btnClickHandle()}>Disp Prod</button> */}
    //             <button onClick={this.btnClickHandle}>Disp Prod</button>
    //             {this.state.data.toString()}
    //             <div className="row">
    //                 <div className="col-lg-3">

    //                     <div className="card">
    //                         <img src="https://media.istockphoto.com/id/1256005283/photo/vintage-classic-motorcycle-headlight.jpg?s=1024x1024&w=is&k=20&c=IfhzwIfEGqZOSnwh_rO67g32iASDfaYdn0LyT9QDcKQ=" className="card-img-top" alt="..." />

    //                         <div className="card-body">
    //                             <h5 className="card-title">Card title</h5>
    //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                             <a href="#" className="btn btn-primary">Go somewhere</a>
    //                         </div>
    //                     </div>


    //                 </div>
    //             </div>
    //         </>
    //     );}else{
    //         return (
    //             <>
    //                 {/* <button onClick={()=>this.setState({data:!this.state.data})}>Disp Prod</button> */}
    //                 {/* <button onClick={this.btnClickHandle()}>Disp Prod</button> */}
    //                 <button onClick={this.btnClickHandle}>Disp Prod</button>
    //                 {this.state.data.toString()}
    //                 <div className="row">
    //                     <div className="col-lg-3">


    //                         <div className="card" aria-hidden="true">
    //                             <img src="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png" className="card-img-top" alt="..." />
    //                             <div className="card-body">
    //                                 <h5 className="card-title placeholder-glow">
    //                                     <span className="placeholder col-6"></span>
    //                                 </h5>
    //                                 <p className="card-text placeholder-glow">
    //                                     <span className="placeholder col-7"></span>
    //                                     <span className="placeholder col-4"></span>
    //                                     <span className="placeholder col-4"></span>
    //                                     <span className="placeholder col-6"></span>
    //                                     <span className="placeholder col-8"></span>
    //                                 </p>
    //                                 <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </>
    //         );
    //     } 
    // }
}

export default ConditionalrenderingClassCompo;