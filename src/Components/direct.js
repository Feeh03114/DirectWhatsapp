import React, {useState} from 'react'

import './Directwhats.css'

function DirectWhats(props) {

    const [telephone, setTele] = useState('')
    const [msg, setMsg] = useState('')

    const apiwhatsapp = event => {
        event.preventDefault()
        let telefone = telephone;
        if (telefone !== "") {
            let mensagem = msg;
            mensagem = mensagem.replace(/(\r\n|\n|\r)/g, "%0A")
            mensagem = mensagem.replace(/\s/g, '%20')
            window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`)
            setTele('')
            setMsg('')
        }
        else alert('Por favor! Digite um número');
    }

    return (
        <div className='dates'>
            <form method="post" onSubmit={apiwhatsapp}> 
            <div className='telefone'>
                <input type='text' name='telefone'value={telephone} onChange={event => setTele(event.target.value)} placeholder='+XX(XX)XXXXXXXXX'></input>
            </div>
            <div className='mensagem'>
                <textarea type='text' name='mensagem' value={msg} onChange={event => setMsg(event.target.value)} placeholder='mensagem'></textarea>
            </div>
            <button type='submit' >Chamar no Whatsapp</button>
            </form>
        </div>
    )
}
export default DirectWhats;