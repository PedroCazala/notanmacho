import React from 'react'
import './menuDesplegable.scss'

function DropdownNavbar({contenido}) {
    return (
        <div className='menuDesplegable'>
            {contenido}
        </div>
    )
}

export default DropdownNavbar
