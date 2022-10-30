import React,{useMemo} from 'react'
import { GoogleMap,useLoadScript } from '@react-google-maps/api'
import {MarkerF} from '@react-google-maps/api'


export const Location = () => {

    const {isLoaded}=useLoadScript({
        // googleMapsApiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        googleMapsApiKey:"AIzaSyAtlOFi2mffCMgfE55yUiYDYikybHNgeoQ",
    });

    if(!isLoaded) return <div>Loading...</div>

  return (
    <Map />
  )
}

function Map(){

    // const center = useMemo(()=>({
    //     lat:7.1569927,
    //     lng:125.6449058,
    // }),[]);

    // Latitude: 7.1569927  Longitude: 125.6449058
    return <div className='max-w-[1100px] w-[95%] h-[400px] md:h-[500px] lg:h-[700px] mx-auto'>
        <GoogleMap zoom={15} center={{lat:7.1569927,lng:125.6449058}} mapContainerClassName="map-container">
            <MarkerF position={{lat:7.1569927,lng:125.6449058}}/>
        </GoogleMap>
    </div>
}
