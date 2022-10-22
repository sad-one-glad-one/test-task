export default function listenForOutsideClicks(
  listening,
  setListening,
  selectRef,
  setIsOpen,
) {
  return () => {
    if (listening) return
    if (!selectRef.current) return
    setListening(true)
    ;[`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = selectRef.current
        const node = evt.target
        if (cur.contains(node)) return
        setIsOpen(false)
      })
    })
  }
}