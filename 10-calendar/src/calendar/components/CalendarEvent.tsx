


export const CalendarEvent = ( { event } ) => {
    const { title, user} = event;

    return (
        <>s
            <strong>{ title }</strong>
            <strong> - { user.name }</strong>
        </>
    );
}
