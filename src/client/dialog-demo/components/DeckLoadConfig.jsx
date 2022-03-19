import React, { useState } from 'react'
import Button from './Button'
import Table from './Table'

const addRow = () => {
    let i = 0;
}
const deleteRow = () => {

}
const plateChange = (e) => {
    console.log(e.id)
}

const DeckLoadConfig = () => {
    const [plates, setPlates] = useState([
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
    ])
    return (
        <div>
            <h2>Deck Configuration:</h2>
            <Button text="Add Plate" onClick={addRow} />
            <Button text="Remove Plate" onClick={deleteRow} />
            <Table data={plates} onChange={plateChange} />
        </div>
    )
}

export default DeckLoadConfig