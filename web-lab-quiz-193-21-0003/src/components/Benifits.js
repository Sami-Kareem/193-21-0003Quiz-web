import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import p1 from "../assets/images/div something.png";
import p2 from "../assets/images/img-2@2x.jpg.png";
import p3 from "../assets/images/p4.png";
import p4 from "../assets/images/img-4@2x.jpg.png";

export const Benifits = ()=>{
    return(
        <>
            <div className="container mt-5">
                <h1 className="text-center"> BENIFITS </h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">   
                        <h1>Create content in minutes, not months</h1>
                        <h3>
                        Create original content that actually sounds like your company wrote it.
                        <br/>
                        Writer is the only AI writing platform that can be trained on your own best-performing content and brand guidelines.
                        <br/>
                        it's <span style={{color:"light-green"}}>your on AI</span>specifically tuned for your team’s unique use cases.
                        </h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">   
                         <img className="img-fluid rounded" src={p1} />
                    </div>
                </div>
                <div className="row mt-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                       <h1>Create content in minutes, not months</h1>
                        <h3>
                        Create original content that actually sounds like your company wrote it.
                        <br/>
                        Writer is the only AI writing platform that can be trained on your own best-performing content and brand guidelines.
                        <br/>
                        it's <span style={{color:"green"}}>your on AI </span> specifically tuned for your team’s unique use cases.
                        </h3>   
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">   
                    <img className="img-fluid rounded" src={p2} />
                    </div>
                </div>
                <div className="row mt-5 py-5">
                    <div className="col-lg-6 col-md-6 col-sm-12"> 
                    <h1>Create content in minutes, not months</h1>
                        <h3>
                        Create original content that actually sounds like your company wrote it.
                        <br/>
                        Writer is the only AI writing platform that can be trained on your own best-performing content and brand guidelines.
                        <br/>
                        it's <span style={{color:"green"}}>your on AI</span>specifically tuned for your team’s unique use cases.
                        </h3>  
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">   
                     <img className="img-fluid rounded" src={p3} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">  
                        <h1>Create content in minutes, not months</h1>
                        <h3>
                        Create original content that actually sounds like your company wrote it.
                        <br/>
                        Writer is the only AI writing platform that can be trained on your own best-performing content and brand guidelines.
                        <br/>
                        it's <span style={{color:"green"}}>your on AI</span>specifically tuned for your team’s unique use cases.
                        </h3> 
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">  
                        <img className="img-fluid rounded" src={p4} /> 
                    </div>
                </div>
            </div>
        </>
    )
}