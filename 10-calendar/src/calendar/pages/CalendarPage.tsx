import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, Navbar } from "../"
import { localizer, getMessagesEs } from '../../helpers';


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
  const eventStyleGetter = ( event: {}, start: Date, end: Date, isSelected: boolean )=>{
    console.log({ event, start, end, isSelected });

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

  return(
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
      />
    </>
  );
}