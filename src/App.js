import "./styles.css";

export default function App() {
  return (
    <main>
      <title>Glassmorphism login Form Tutorial in html css</title>

      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      ></link>

      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="form-signin">
        <h3>Login Here</h3>

        <label for="username"> Username </label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </main>
  );
}
