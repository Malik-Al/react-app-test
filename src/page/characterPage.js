import React, {Component} from 'react';
import ItemList from '../components/itemList';
import CharDetails, {Field} from '../components/charDetails';
import ErrorMessage from "../components/errorMessage";
import gotService from '../services/gotService'
import RowBlock from "../components/rowBlock";


export default class CharacterPage extends Component{
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
                    getData={this.gotService.getAllCharacter}
                    renderItem={({name, gender}) => `${name} (${gender})`}
                />
        )

        const charDetails = (
                <CharDetails
                    charId={this.state.selectedChar}
                    getData={this.gotService.getCharacter}
                >
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
                </CharDetails>
        )

        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}