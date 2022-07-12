import React, {useState} from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FlashOffIcon from '@material-ui/icons/FlashOff';
import "./Footer.css"
function Footer(props) {
  const {setProfile, fetchProfile} = props;
  const clearAll = () =>{
    setProfile([])
  }
  const [isLiked, setisLiked] = useState(0)
  const [isFavorate, setisFavorate] = useState(0)
  const [isFlashed, setisFlashed] = useState(0)
  const handleLike = () => {
    if(isLiked === 0){
      setisLiked(1);
    }
    else{
      setisLiked(0)
    }
  }
  const handleFlash = () => {
    if(isLiked === 0){
      setisFlashed(1);
    }
    else{
      setisFlashed(0)
    }
  }
  const handleFavorate = () => {
    if(isLiked === 0){
      setisFavorate(1);
    }
    else{
      setisFavorate(0)
    }
  }
  return (
    <div className="footer">
        <ReplayIcon fontSize="large"
         className="footer-icons replay"
         onClick={fetchProfile}/>
        <ClearIcon fontSize="large"  
        className="footer-icons clear" onClick={clearAll}/>
       {
         isLiked===1?<StarIcon fontSize="large"  
         onClick={handleLike} className="footer-icons star"/>:
         <StarBorderOutlinedIcon fontSize="large"
          onClick={handleLike}  className="footer-icons star"/>
       }
       {
         isFavorate===1?<FavoriteIcon fontSize="large"  
         onClick={handleFavorate} className="footer-icons favorite"/>:
         <FavoriteBorderOutlinedIcon fontSize="large"
          onClick={handleFavorate}  className="footer-icons favorite"/>
       }
       {
         isFlashed===1?<FlashOnIcon fontSize="large"  
         onClick={handleFlash} className="footer-icons flash"/>:
         <FlashOffIcon fontSize="large"
          onClick={handleFlash}  className="footer-icons flash"/>
       }
      </div>
  )
}

export default Footer