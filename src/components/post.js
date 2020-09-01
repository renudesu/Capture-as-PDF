import React from 'react';
import PDF from './pdf';

export default class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            image: '',
            content: '',
            postSubmitted: false
        }
    }
    onChangeText = input => (event) => {
        this.setState({
            [input]: event.target.value
        })
    }
    submitPost = (e) => {
        // console.log(this.state)
        if (!this.state.title || !this.state.content) {
            alert('all fileds are required')
            e.preventDefault();
        } else {
            this.setState({
                postSubmitted: true
            });
        }
    }
    render() {
        return (
            <>
            { !this.state.postSubmitted ?
                (<div className="container">
                <div className="jumbotron mt-3" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <form className=" from-horizontal" method="post">
                                    <fieldset>
                                        <legend className="text-center header">Add new post</legend>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <input className="form-control" name="title" type="text" placeholder="post Title" onChange={this.onChangeText('title')} />
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>

                                            <input className="form-control" name="image" type="text" placeholder="https://" onChange={this.onChangeText('image')} />
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-userpencil-square-o bigicon"></i></span>

                                            <textarea className="form-control" name="content" type="text" placeholder="Enter your text here" onChange={this.onChangeText('content')} rows="7" />
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn btn-primary btn-lg" onClick={this.submitPost} >Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>):(
                <PDF title={this.state.title} content={this.state.content} image={this.state.image}/>
            )
        }
        </>
        );
    }
}