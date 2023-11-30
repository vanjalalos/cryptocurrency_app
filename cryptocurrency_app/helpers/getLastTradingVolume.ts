const getLastTotalVolume=(data) =>{
    if (!data || !data.total_volumes || !Array.isArray(data.total_volumes)) {
      return null; 
    }
  
    const totalVolumesArray = data.total_volumes;
  
    if (totalVolumesArray.length === 0) {
      return null; 
    }
  
    const lastTotalVolume = totalVolumesArray[totalVolumesArray.length - 1];
    const lastVolumeValue = lastTotalVolume[1]; 
  
    return lastVolumeValue;
  }

  export default getLastTotalVolume;