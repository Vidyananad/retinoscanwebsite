import ProgressBar from "./progressBar.js";
import './content.css'


const Content = () => {
  const glaucomaPercent = 75.8;
  const drPercent = 100;
  const nodrPercent=99.3;

  return(
    <>
    <div className='container'>
     <div className='fundus'>
        <p className="heading">Fundus</p>
        <div className='button-container'>
          <button className='button-item'>Glaucoma</button>
          <button className='button-item'>ARMD</button>
          <button className='button-item'>DME</button>
          <button className='button-item'>DR1</button>
          <button className='button-item'>DR2</button>
          <button className='button-item'>DR3</button>
          <button className='button-item'>DR4</button>
          <button className='button-item'>Laser</button>
          <button className='button-item'>Drusen</button>
          <button className='button-item'>Hard Exudates</button>
          <button className='button-item'>NVD</button>
          <button className='button-item'>Peripapillary Atrophy</button>
          <button className='button-item'>NVE</button>
          <button className='button-item'>Tartous Vessels</button>
          <button className='button-item'>Myopic Degeneration</button>
        </div>
      </div>
      <div className='target-img'>
          <div className='quadrant top-left'></div>
          <div className='quadrant top-right'></div>
          <div className='quadrant bottom-left'></div>
          <div className='quadrant bottom-right'></div>
          <img src="https://www.artelus.ai/assets/images/final-eye-samples/ARMD.png" className='bulls-eye'alt="image1"/>
        </div>
      <div className='report'>
         <div className='generated-report'>
             <p className='heading'>Generated Report</p>
             <img src="https://www.artelus.ai/assets/images/final-heatmaps/ARMD.png" className='retina-img' alt='retina'/> 
             <p className='para'>This report is for screening purpose only. No<br/>way is this meant to replace doctor's<br/>diagnosis. kindly correlate clinically</p>
          </div> 
          <div className='possible-diseases-container'>
            <h3>Possible Diseases</h3>
            <p>Disease report</p>
             <ProgressBar  name={"Galucoma"} percent={glaucomaPercent} />
            <p>DR Report</p>
            <ProgressBar name={"dr_0"} percent={drPercent} />
            <p>Additional Report</p>
            <ProgressBar name={"no_dr"} percent={nodrPercent} />
            <div>
              <ul>
                <li>Doctor Review Recommended</li>
              </ul>
              
            </div>
          </div>
      </div>
     </div> 
    </>
  )
}

export default Content;