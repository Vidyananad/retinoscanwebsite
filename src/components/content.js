import ProgressBar from "./progressBar.js";
import './content.css'


const Content = () => {
  const glaucomaPercent = 75.8;
  const drPercent = 100;
  const nodrPercent=99.3;

  return(
    <>
    <div className='container'>
     <div className="fundus-oct">
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
       <div className='oct'>
        <p className="heading">OCT</p>
        <div className='button-container'>
          <button className='button-item'>Normal</button>
          <button className='button-item'>Drusen</button>
          <button className='button-item'>DME</button>
          <button className='button-item'>CNV</button>
          <button className='button-item'>AMD</button>
          <button className='button-item'>CSR</button>
          <button className='button-item'>DR</button>
          <button className='button-item'>MH</button>
        </div>
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
            <h3 className="possible-disease-heading">Possible Diseases</h3>
            <div className="progress-bar-cont">
               <p className="disease-name">Disease report</p>
               <ProgressBar  name={"Glaucoma"} percent={glaucomaPercent} />
            </div>
            <div className="progress-bar-cont">
               <p className="disease-name">DR Report</p>
               <ProgressBar name={"dr_0"} percent={drPercent} />
            </div>
            <div className="progress-bar-cont">
               <p className="disease-name">Additional Report</p>
               <ProgressBar name={"no_dr"} percent={nodrPercent} />
            </div>
           
            <div className="doctor-recommend">
              <div className="red-ball"></div>
              <div>
                <p style={{fontSize:"14px"}}>Doctor Review Recommended</p>
              </div>
            </div>
          </div>
      </div>
     </div> 
     <div className="upload-button-cont">
        <center>
            <button className="button-item-new"><div className="button-content"><p className="upload-name">Upload Fundus Image </p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg></div></button>
            <button className="button-item-new"><div className="button-content"><p className="upload-name">Upload OCT Image</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg></div></button>
        </center>
       </div>
    </>
  )
}

export default Content;