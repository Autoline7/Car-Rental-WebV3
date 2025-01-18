import React, { useEffect, useState } from 'react';
import ModelHero from '../components/ui/ModelHero';
import VehicleModels from '../components/VehicleModels';
import Booking from '../components/Booking';
import axios from 'axios';
import SuccessPopup from '../components/ui/SuccessPopup';

const Models = () => {
    const [carModels, setCarModels] = useState([]);
    const [bookingOpen, setBookingOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState("")

    async function fetchModels(){
        const {data} = await axios.get("https://car-rental-api.up.railway.app/car");
        const models =  data.data;
        setCarModels(models);
    }
    
    
    useEffect(() =>{
        fetchModels();
    }, []);

    return (
        <div>
            <SuccessPopup successOpen={successOpen} />
            <Booking setSuccessOpen={setSuccessOpen} setSelectedModel={setSelectedModel} selectedModel={selectedModel} carModels={carModels} bookingOpen={bookingOpen} setBookingOpen={setBookingOpen} />
            <ModelHero />
            <VehicleModels setSelectedModel={setSelectedModel} setBookingOpen={setBookingOpen} carModels={carModels} setCarModels={setCarModels} />
        </div>
    );
}

export default Models;
