import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {BooksPage, CharacterPage, HousePage, BooksItem} from "../../page";

export default class App extends Component{
    gotService = new gotService();

    state = {
        isShowTiles: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleComponents = () => {
        this.setState({
            isShowTiles: !this.state.isShowTiles
        })
    }


    render() {
        const char = this.state.isShowTiles ? <RandomChar/> : null

        if(this.state.error){
            return <ErrorMessage/>
        }
        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button
                                    className="btn-click"
                                    onClick={this.toggleComponents}
                                >
                                    Toggle random character</button>
                            </Col>
                        </Row>
                        <Routes>
                            <Route path='/' element={<Invoices/>}/>
                            <Route path='/character' element={<CharacterPage/>}/>
                            <Route path='/houses' element={<HousePage/>}/>
                            <Route path='/books' exact element={<BooksPage/>}/>
                            <Route path='/books/:id' element={
                                <BooksItem/>
                            }/>

                        </Routes>
                    </Container>

                </div>
            </Router>
        );
    }


};
function Invoices() {
    return <h1>Welcome to GOT</h1>;
}
