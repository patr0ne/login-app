import React from 'react'

const Login = (props) => {

	const { 
		email, 
		setEmail, 
		password, 
		setPassword, 
		handleLogin, 
		handleSignup, 
		hasAccount, 
		setHasAccount, 
		emailError, 
		passwordError 
	} = props;

	return(
		<section className = "login">
			<div className = "loginContainer">
				<label>E-mail</label>
				<input 
					type = "text"
					autoFocus
					required
					value = {email}
					onChange = {(event) => setEmail(event.target.value)}
				/>
				<p className = "errorMsg">{emailError}</p>
				<label>Пароль</label>
				<input 
					type = "password"
					required
					value = {password}
					onChange = {(event) => setPassword(event.target.value)}
				/>
				<p className = "errorMsg">{passwordError}</p>
				<div className = "btnContainer">
					{hasAccount ? (
						<>
						<button onClick = {handleLogin}>Войти</button>
						<p>
							У вас нет аккаунта ? 
							<span onClick = {() => setHasAccount(!hasAccount)}>Зарегистрироваться</span>
						</p>
						</>
					) : (
						<>
						<button onClick = {handleSignup}>Зарегистрироваться</button>
						<p>
							Уже есть аккаунт ? 
							<span onClick = {() => setHasAccount(!hasAccount)}>Войти</span>
						</p>
						</>
					)}	
				</div>
			</div>
			
		</section>
	)
};

export default Login;