import React from 'react'

const ListRendering = () => {
    const emps = [
        { id: 1, name: 'Nimesh' },
        { id: 2, name: 'Ritik' },
        { id: 3, name: 'Harsh' },
        { id: 4, name: 'Hariom' }
    ]
    return (
        <div>
            <h4>Employee Details</h4>
            <ul>
                {
                    emps.map((emp) => (
                        <li key={emp.id}>{emp.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListRendering