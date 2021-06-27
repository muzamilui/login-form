import React,{useState,useEffect}  from 'react'
import PropTypes from 'prop-types';
import user from '../data/user.json'
import './Login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
const Login = ({setToken}) => {
    const [emailError,setEmailError]=useState('')
    const [passError,setPassError]=useState('')
    const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if(username===user.username&&password===user.password){
    setToken(token);}
    if(username!==user.username){
        setEmailError('email does not match')
    }
    if(password!==user.password){
        setPassError('Wrong password')

    }
    if(username===''){
        setEmailError('please add the email')
    }
    if(password===''){
        setPassError('please add the password')
    }
  }
  
    return (
        <>
       <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form onSubmit={handleSubmit}  class="login">
				<div class="login__field">
					
					<input type="text" class="login__input" placeholder="User name / Email" onChange={e => setUserName(e.target.value)} />
                    <br></br>
                    <small style={{color:'#ff4717'}}>{emailError}</small>
				</div>
				<div class="login__field">
					
					<input type="password" class="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <br></br>
                    <small style={{color:'#ff4717'}}>{passError}</small>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default Login
