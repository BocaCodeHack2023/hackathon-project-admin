export default function LoginPage() {


  function login(e){
    e.preventDefault();
  }

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={login}>
          <input type="text" name="email" />
          <input type="text" name="password" />
          <button type="submit">Login</button>
        </form>

      </div>
    </>
  )
}