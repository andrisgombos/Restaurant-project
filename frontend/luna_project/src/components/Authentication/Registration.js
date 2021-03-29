import styled from 'styled-components'
// eslint-disable-next-line
const RegisterCont = styled.div`
`

const Register = () => {



    return  <>
        <div>
            <h1>Registration</h1>
            <input name='email' type='text' placeholder='E-mail address'></input>
            <button type='submit'>Register</button>
        </div>
    </>
}

export default (Register)