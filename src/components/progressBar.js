import './progressBar.css'

const ProgressBar= () => {

 const percent = 75;

  return (
    <>
      <div>
        <div className='name-cont'>
           <p>Glaucoma</p>
           <p><span>{percent.toFixed()}%</span></p>
        </div>
         <div className="progress">
            <div
        // style={{ width: `${percent}%` }}
                style={{
                transform: `scaleX(${percent/100})`,
                 transformOrigin: "left"
                }}
        
                aria-valuenow={percent}
               role="progressbar"
            />
            </div>
      </div>  
    </>
    
  );
}

export default ProgressBar
