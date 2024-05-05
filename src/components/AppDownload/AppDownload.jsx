import { assets } from '../../assets/assets'
import './AppDownload.scss'
export default function AppDownload() {
  return (
    <div className='appdownload' id='appdownload'>
        <p> For Better Experience Download <br/> Tomato App </p>
        <div className="app-download-platforms">
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}
