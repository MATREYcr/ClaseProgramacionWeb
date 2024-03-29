import './App.css'

function App() {
  return (
    <>
      <div class="ContainerLogin">
            <div class="contend">
                <img src="./assets/medusa2.png" alt="MedusaIcono"/>
                <div class="textFields">
                    <input placeholder="Username" type="text"/>
                    <input class="inputpassword" placeholder="Password" type="password"/>
                    <svg class="verPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      
                </div>
                <div class="ContainerRemenber">
                    <span class="Remember">
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </span>
                    <p id="Forgot">Forgot password?</p>
                </div>
                <button class="ButtonLogin">LOGIN</button>
            </div>
        </div>
    </>
  )
}

export default App
