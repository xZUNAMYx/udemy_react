import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from "../"
import { localizer, getMessagesEs } from '../../helpers';
import { useState } from 'react';


const events = [{
  title: 'Horario de clases',
  notes: 'Grupo 1',
  start: new Date(),
  end: addHours( new Date(), 2),
  user: {
    _id: '123',
    name: 'Andres',
  }
}]

export const CalendarPage = () => {
  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event: {}, start: Date, end: Date, isSelected: boolean )=>{
    // TODO: Verificar si se renderiza varias veces
    // console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: 'green',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    console.log( { doubleClick: event })
  }

  const onSelect = ( event ) => {
    console.log( { click: event })
  }

  const onViewChanged = ( event ) => {
    console.log( { viewChanged: event })
    localStorage.setItem('lastView', event);
  }

  return(
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
    </>
  );
}