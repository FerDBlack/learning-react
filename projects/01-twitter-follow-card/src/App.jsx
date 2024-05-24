import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

  const react = { userName: 'react', initialIsFollowing: true };
  const users = [
    {
      userName: 'Pa',
      name: 'Paco',
      isFollowing: true
    },
    {
      userName: 'Juaaasan',
      name: 'Juan',
      isFollowing: true
    },
    {
      userName: 'Lucíaaaaaaa',
      name: 'Lucía',
      isFollowing: true
    }
  ];

  return (
    <section className='App'>
      <TwitterFollowCard {...react}>
        React
      </TwitterFollowCard>

      <TwitterFollowCard userName="twitter"  >
        Twitter
      </TwitterFollowCard>

      {/* Mostrar todo un array con su respectivo componente TwitterFollowCard */}
      
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}