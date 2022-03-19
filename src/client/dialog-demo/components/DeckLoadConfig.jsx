import React from 'react'
import Button from './Button'

const plates = [
    {
        id: "lp_plate_1",
        barcode: "rand_string",
        type: "PCR_Plate",
        location: "Nest_61",
        position: 1
    },
    {
        id: "lp_plate_2",
        barcode: "rand_string",
        type: "PCR_Plate",
        location: "Nest_61",
        position: 2
    },
    {
        id: "lp_plate_3",
        barcode: "rand_string",
        type: "PCR_Plate",
        location: "Nest_61",
        position: 3
    }
]

const addRow = () => {

}
const deleteRow = () => {

}

const DeckLoadConfig = () => {
    return (
        <div>
            <h2>Deck Configuration:</h2>
            <Button text="Add Plate" onClick="addRow" />
            <Button text="Remove Plate" onClick="deleteRow" />
            <Table data={plates} />
        </div>
    )
}

export default DeckLoadConfig