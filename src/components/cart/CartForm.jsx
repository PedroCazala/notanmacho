import React from 'react';

function CartForm({dataForm,validation, handleChange}) {

    return <div className={'cartForm'}>
        <form
            onSubmit={validation}
        >
            
            <input 
                required
                type="text"
                name='name'
                placeholder='Nombre*'
                onChange={e=>handleChange(e)}
                value={dataForm.name}
            />
            <input 
                required
                type="email"
                name='email'
                placeholder='e-mail *'
                onChange={e=>handleChange(e)}
                value={dataForm.email}
            />
            <input 
                required
                type="email"
                name='emailConfirm'
                placeholder='Confirme su e-mail*'
                value={dataForm.emailConfirm}
                onChange={e=>handleChange(e)}
            /> 
            <input 
                required
                type="phone"
                name='phone'
                placeholder='Telefono*'
                onChange={e=>handleChange(e)}
                value={dataForm.phone}
            />

            <button className='boton1 ' /*onClick={terminarCompra}*/>Terminar compra</button>
        </form>
    </div>;
}

export default CartForm;
