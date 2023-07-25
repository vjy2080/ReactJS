import React, { Component } from 'react';
import { people } from './09.2data';
import { getImageUrl } from './utils.js';

class ListsInClassCompo extends Component {
    render() {
        // const people = [
        //     'Creola Katherine Johnson: mathematician',
        //     'Mario Jose Molina-Pasquel Henriquez: chemist',
        //     'Mohammad Abdus Salam: physicist',
        //     'Percy Lavon Julian: chemist',
        //     'Subrahmanyan Chandrasekhar: astrophysicist'
        //   ];
        //   let ListData = people.map(kaibiju=><li>{kaibiju}</li>)
        let ListData = people.map((kaibiju, index) => {
            console.log(kaibiju);
            return <li key={index}>
                <img src={getImageUrl(kaibiju)} alt={kaibiju.name} />
                <p> <b>{kaibiju.name}</b> {kaibiju.profession} known for {kaibiju.accomplishment}</p>
            </li>
        })
        return (
            <>
                <ul className='personsdata'>
                    {ListData}
                </ul>
            </>
        );
    }
}

export default ListsInClassCompo;