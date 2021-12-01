import React , {Component}from 'react';
import CharDetails, {Field} from "../components/charDetails";
import gotService from '../services/gotService'

export default class BooksItem extends Component{
    gotService = new gotService();

    state = {
        selectedChar: 11,
    }

    render() {
        return(
            <CharDetails
                charId={this.state.selectedChar}
                // charId={this.props.bookId}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        );

    }


};

