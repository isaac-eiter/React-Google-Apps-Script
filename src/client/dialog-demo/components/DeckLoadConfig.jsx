import React, { useState } from 'react'
import Button from './Button'
import PlateTable from './PlateTable'

const addRow = () => {
}
const deleteRow = (e, plates) => {
    console.log(e.target.id)
    plates.filter(val => val.row != e.target.id)
}
const plateChange = (e) => {
    console.log(e.id)
}

const DeckLoadConfig = () => {
    const [plates, setPlates] = useState([
        {
            row: "1",
            id: "lp_plate_1",
            barcode: "rand_string",
            type: "PCR_Plate",
            location: "Nest_61",
            position: 1
        },
        {
            row: "2",
            id: "lp_plate_2",
            barcode: "rand_string",
            type: "PCR_Plate",
            location: "Nest_61",
            position: 2
        },
        {
            row: "3",
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
            <PlateTable data={plates} deletePlate={deleteRow} />
        </div>
    )
}

export default DeckLoadConfig