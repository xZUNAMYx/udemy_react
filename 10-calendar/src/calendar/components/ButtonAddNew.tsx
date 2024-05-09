import { addHours } from "date-fns";
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from "../../hooks/useCalendarStore";


export const ButtonAddNew = () => { 

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () =>{
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2),
        }),

        openDateModal();
    }

    return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>

    </button>
    )
}
