import { Link } from "../../Links"

export default function AboutPage() {
    return (<>
      <h1>About</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/98603521?v=4" alt="img-profile" />
        <p>¡Hola! Me llamo FerDBlack y estoy creando un clon de React Router.</p>
      </div>
      <Link to='/'>Home</Link>
    </>
    )
  }