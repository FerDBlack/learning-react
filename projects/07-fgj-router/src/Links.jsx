import { EVENTS, BUTTONS } from "./const"


export function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
      

        const isMainEvent = event.button === BUTTONS.PRIMARY //primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            //To avoid page refreshes.
            event.preventDefault()
            navigate(to)
        }
        navigate(to)
    }

    return <a href={to} onClick={handleClick} target={target} {...props}></a>
}