import React, { Component } from 'react'


const Table = ({ title, data, cols }) => {
    return (
        <div>
            <table>{title}
                <tr>
                    {cols.map((val) => (
                        <th>{val}</th>
                    ))}
                </tr>
                {data.map((plate) => (
                    <tr>
                        {cols.map((val) => (
                            <td>{plate[val]}</td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    )
}
Table.defaultProps = {
    cols: ["id", "barcode", "type", "location", "position"]
}

export default Table