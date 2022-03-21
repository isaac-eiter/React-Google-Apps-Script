import React, { Component } from 'react'
import Button from './Button'


const PlateTable = ({ data, cols, deletePlate }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        {cols.map((val) => (
                            <th>{val}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((plate) => (
                        <tr>
                            <td>
                                <Button text="X" id={plate.row} onClick={deletePlate} />
                            </td>
                            {cols.map((val) => (
                                <td key={`${plate.id}${val}`}>
                                    <input type={"text"} defaultValue={plate[val]} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}
PlateTable.defaultProps = {
    cols: ["id", "barcode", "type", "location", "position"]
}

export default PlateTable