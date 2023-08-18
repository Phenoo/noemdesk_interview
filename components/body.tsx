"use client"

import React, { useState } from 'react'
import { CalendarDemo } from './Calendar';
import SchedulerDemo from './Scheduler';
import { ComboboxDemo } from './Select';


const items = [
  {
    amount: "$500",
    bgColor: "bg-orange-500",
    name: "Wireless Earbuds",
    brand: "SoundWave",
  },
  {
    amount: "$500",
    bgColor: "bg-green-500",
    name: "Smartphone",
    brand: "TechFone",
  },
  {
    amount: "$500",
    bgColor: "bg-green-500",
    name: "Fitness Tracker",
    brand: "FitBit",
  },
  {
    amount: "$500m",
    bgColor: "bg-green-500",
    name: "Fitness Tracker",
    brand: "FitBit",
  },
  {
    amount: "$300m",
    bgColor: "bg-green-500",
    name: "Fitness Tracker",
    brand: "FitBit",
  },
  {
    amount: "$70m",
    bgColor: "bg-orange-500",
    name: "Fitness Tracker",
    brand: "FitBit",
  },
];

const Card = ({ item }: {item: any}) => (
  <div className={`w-32 text-white h-20 p-2 mx-auto mt-6 ${item.bgColor} rounded-lg shadow-md`}>
    <h2 className="text-xl font-semibold">{item.amount}</h2>
    <div className="mt-2 flex justify-between items-center">
        <p className="bg-white text-sm text-gray-400 p-1 rounded-md uppercase">new</p>

          <p className="text-[10px] w-[50px] text-right font-bold">{item.name}</p>
    </div>
  </div>
);

const Body = ({openModal}: {openModal:  any}) => {
    const [showCars, setShowCars] = useState(true);
    const [value, setValue] = React.useState("vehicles")

  
    
  
    const cars = [
      { id: 1, name: 'Toyota Camry', brand: 'Toyota', image: "https://w7.pngwing.com/pngs/38/708/png-transparent-car-mercedes-car-love-compact-car-vehicle.png", condition: "Great Condition" },
      { id: 2, name: 'Honda Civic', brand: 'Honda', image: "https://w7.pngwing.com/pngs/179/652/png-transparent-mercedes-benz-glk-class-car-mercedes-benz-c-class-mercedes-benz-a-class-mercedes-benz.png", condition: "Great Condition" },
      { id: 3, name: 'Ford Mustang', brand: 'Ford', image: "https://w7.pngwing.com/pngs/677/741/png-transparent-mercedes-benz-amg-g-63-car-sport-utility-vehicle-2018-mercedes-benz-g-class-suv-g-wagon-car-vehicle-metal.png",condition: "Great Condition" },
    ];
    
    const drivers = [
      { id: 1, name: 'John Smith', age: 30, image: "https://images.pexels.com/photos/4606336/pexels-photo-4606336.jpeg?auto=compress&cs=tinysrgb&w=600",  },
      { id: 2, name: 'Emily Johnson', age: 28, image: "https://images.pexels.com/photos/4606336/pexels-photo-4606336.jpeg?auto=compress&cs=tinysrgb&w=600",  },
      { id: 3, name: 'Michael Brown', age: 35, image: "https://images.pexels.com/photos/4606336/pexels-photo-4606336.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    ];
  

  return (
   <>

    <div className='w-full'>
        
        <div className='flex justify-between items-center'>
          <div className='font-bold text-lg flex items-baseline h-full justify-end'>Scheduling</div>
          <div>
          <div className="flex flex-wrap justify-center gap-1">
              {items.map((item, index) => (
              <Card key={index} item={item} />
              ))}
               <div className={`w-32 text-white mx-auto  flex flex-col justify-center items-center mt-6`}>
                  <div className='text-[10px] h-6 text-white w-full flex justify-center text-center rounded-t-sm p-1 bg-green-500'>$70m - $100m</div>
                  <div className='text-[10px] h-6 text-white w-full flex justify-center text-center p-1 bg-orange-500'>$40m - $70m</div>
                  <div className='text-[10px] h-6 text-white w-full flex justify-center text-center p-1 rounded-b-sm bg-red-500'>$0m - $40m (Low)</div>
              </div>
          </div>
          </div>
        </div>
  
        <div className='border-2 border-gray-900 rounded-md shadow-lg p-4 mt-4 h-full'>
          <div className='flex h-full'>
              
              <div>
                <ComboboxDemo setValue={setValue} value={value} />
                <CalendarDemo />
              </div>
              <div className='w-96 h-screen bg-white p-2'>
                  <div className='text-center  py-6 font-bold capitalize'>{value}</div>
                  <hr />
  

                    <div className="mt-4">
                    <ul>
                    {value === "vehicles" && (
                        cars.map(car => (
                        <li key={car.id} onClick={() => openModal(car)} className='cursor-pointer flex gap-2 h-28 items-center border-b'>
                            <img src={car.image} alt={car.name} className="w-16 h-14 mr-2 block" />
                            <div>
                                <div className='block text-sm'>
                                {car.brand} {car.name} 
                                </div>
                                <div className='block text-sm'>
                                    FULL TIME SUV
                                </div>
                                <div className='text-xs text-green-500 uppercase font-bold'>
                                    {car.condition}
                                </div>
                            </div>
                        </li>
                        ))
                    )}
                    {
                        value === "drivers" && (
                            drivers.map(driver => (
                            <li key={driver.id} onClick={() => openModal(driver)} className='cursor-pointer flex gap-2 h-28 items-center border-b'>
                                <img src={driver.image} alt={driver.name} className="w-16 h-14  mr-2 block object-contain" />
                                <div>
                                    <span className='text-sm font-bold block'>
                                    {driver.name}  
                                    </span>
                                    <div className='text-sm'>
                                    {driver.age} years old
                                    </div>
                                </div>
                            </li>
                            ))
                        )
                    }
            </ul>
            
                    </div>
              </div>
              <SchedulerDemo />
          </div>
        </div>
      </div>
   </>
  )
}

export default Body


