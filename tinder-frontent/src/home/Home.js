// importing stuffs
import React from 'react'
import TinderCard from 'react-tinder-card'
import "./Home.css"
import CloudDoneIcon from '@material-ui/icons/CloudDone';
// main function
function Home(props) {
  const { profile, setProfile } = props;
  console.log(profile[0])
  // swipe functionality
  const onSwipe = (nameToDelete) => {
    console.log('removing ' + nameToDelete)
  }


  const onCardLeftScreen = (indexNumber) => {
    if (indexNumber===0){
      setProfile([])
    }
  }


  return (
    <div className="home">
      {
        profile[0] === undefined ?
        <div className="emptyCard">
        <CloudDoneIcon fontSize="large"/>
        <h2>That's end</h2>
        </div>
        :
        <div className="tinderCards">
        {profile.map((person, index) => {
          return <TinderCard 
          onSwipe={(dir)=>onSwipe(dir, person.name)}
          className="swipe" 
          key={person.name}
          onCardLeftScreen={() => onCardLeftScreen(index)} 
          preventSwipe={['up', 'down']}>

          <div 
          style={{backgroundImage: `url(${person.imageUrl})`}}
          className="card">
            <h3>{person.name}</h3>
            </div>
          </TinderCard>
        })}
      </div>
      }
    </div>
  )
}

export default Home;