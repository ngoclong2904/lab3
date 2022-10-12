import React, { Component } from "react";
import { ListOfFilms } from "../shared/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation";
export class FilmsContainer extends Component {
    constructor() {
        super();
        this.state = {
            listOfFilms: ListOfFilms
        };
    }
    render() {
        return <FilmsPresentation listOfFilms={this.state.listOfFilms} />
    }
}
export default FilmsContainer