"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

export function CalendarDemo() {
  const [date, setDate] = React.useState<any>()

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}
