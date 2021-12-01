import React, {Component} from "react";
import gotService from '../services/gotService'
import ErrorMessage from "../components/errorMessage";
import ItemList from "../components/itemList";
import CharDetails, {Field} from "../components/charDetails";
import RowBlock from "../components/rowBlock";

export default class HousePage extends Component{
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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}
            />
        )

        const charDetails = (
            <CharDetails
                charId={this.state.selectedChar}
                getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>

            </CharDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        );
    }

}