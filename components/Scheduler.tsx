import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

const SchedulerDemo = () => {
  return (
    <div className='bg-white border  z-0 border-gray-400 p-4 w-full rounded-md'>
      <Scheduler
        view="month"
        
        events={[
            {
            event_id: 1,
            title: "Wisom Booked",
            start: new Date("2023/8/2 09:30"),
            end: new Date("2023/8/4 10:30"),
            },
            {
            event_id: 2,
            title: "Mitsubishi",
            start: new Date("2023/8/12 10:00"),
            end: new Date("2023/8/14 11:00"),
            },
            {
                event_id: 3,
                title: "Sege Premium",
                start: new Date("2023/8/6 10:00"),
                end: new Date("2023/8/8 11:00"),
            },
            {
                event_id: 4,
                title: "Agent Premium",
                start: new Date("2023/8/16 10:00"),
                end: new Date("2023/8/18 11:00"),
            },
        ]}
        />
    </div>
  )
}

export default SchedulerDemo
