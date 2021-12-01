import React, {Component} from 'react';
import ErrorMessage from "../components/errorMessage";
import ItemList from "../components/itemList";
import CharDetails, {Field} from "../components/charDetails";
import RowBlock from "../components/rowBlock";
import gotService from '../services/gotService'

export default class BooksPage extends Component{
    gotService = new gotService();

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    render() {
        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onCharSelected={this.onCharSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}
            />
        )

        const charDetails = (
            <CharDetails
                charId={this.state.selectedChar}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        );
    }

};
