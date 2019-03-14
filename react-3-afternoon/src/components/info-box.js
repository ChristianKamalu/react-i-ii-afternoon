import React, { Component } from 'react'
import '../App.css';

class InfoBox extends Component{
    constructor() {
        super();
        this.state = {
            pageNumber: 1
        }
    }

    handleNextButton = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        })
        if(this.state.pageNumber === 25) {
            this.setState({
                pageNumber: 1
            })
        }
    }

    handlePreviousButton = () => {
        this.setState({
            pageNumber: this.state.pageNumber - 1
        })
        if(this.state.pageNumber === 1) {
            this.setState({
                pageNumber: 25
            })
        }
    }

    render() {
        return(
            <div className='container'>
                <div className='info-box'>
                    <h2>{this.state.pageNumber}/25</h2>
                    <div className='box-content'>
                        <h1>{this.props.data[this.state.pageNumber - 1].name.first} {this.props.data[this.state.pageNumber - 1].name.last}</h1>
                        <div className='person-info'>
                            <h3>From: <p>{this.props.data[this.state.pageNumber - 1].city}</p></h3>
                            <h3>Job Title: <p>{this.props.data[this.state.pageNumber - 1].title}</p></h3>
                            <h3>Employer: <p>{this.props.data[this.state.pageNumber - 1].employer}</p></h3>
                        </div>
                        <div>
                            <h3>Favorite Movies:</h3>
                            <li>{this.props.data[this.state.pageNumber - 1].favoriteMovies[0]}</li>
                            <li>{this.props.data[this.state.pageNumber - 1].favoriteMovies[1]}</li>
                            <li>{this.props.data[this.state.pageNumber - 1].favoriteMovies[2]}</li>
                        </div>
                    </div>
                </div>
                <div className='bottom-options'>
                    <button className='page-turner-button' onClick={this.handlePreviousButton}>- Previous</button>
                    <div className='edit-delete-new'>
                        <button className='button'>Edit</button>
                        <button className='button'>Delete</button>
                        <button className='button'>New</button>
                    </div>
                    <button className='page-turner-button' onClick={this.handleNextButton}>Next +</button>
                </div>
            </div>
        )
    }
}

export default InfoBox