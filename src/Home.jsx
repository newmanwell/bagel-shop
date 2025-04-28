import { Link } from 'react-router';

const Home = () => {
  return (
    <>
    <main>
      <div className='story-container'>
        <h2>Happiness is a warm bagel</h2>
        <h3>Our Story</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis.
        </p>
      </div>
      <Link to={`/bagels`}>Our Bagels</Link>
    </main>
    </>
  )
}

export default Home;