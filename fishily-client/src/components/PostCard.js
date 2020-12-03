import React from 'react';

const PostCard  = (props) => {
    return (
        
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.post.image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.post.title}</h5>
                        <h6>By: {props.post.user}</h6>
                        <p className="card-text">{props.post.description}</p>
                        <p className="card-text"><small className="text-muted">Posted On: {props.post.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default PostCard;