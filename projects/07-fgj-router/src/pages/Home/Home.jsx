import { Link } from "../../Links";

export default function HomePage() {
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
        <Link to='/about'>Sobre nostros</Link>
      </>
    )
  }