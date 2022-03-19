import React, { Component } from 'react'


const Table = ({ data, cols, onChange }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {cols.map((val) => (
                            <th>{val}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((plate) => (
                        <tr>
                            {cols.map((val) => (
                                <td>
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
Table.defaultProps = {
    cols: ["id", "barcode", "type", "location", "position"]
}

export default Table