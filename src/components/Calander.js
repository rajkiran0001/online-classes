import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import '../App.css'

//import './main.scss' // webpack must be configured to do this

export default class DemoApp extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}  
       events={[
        { title: 'reading', date: '2020-09-04T19:00:00' },
        { title: 'speaking', date: '2020-09-05T09:00:00' },
        { title: 'speaking', date: '2020-09-05T17:00:00' },
        { title: 'reading', date: '2020-09-05T19:00:00' },
        { title: 'speaking', date: '2020-09-06T07:00:00' },

      ]}
 />
    )
  }

}