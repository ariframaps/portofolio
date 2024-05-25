export const CursorsEffect = ({ cursorPosition }) => {
    return (
        <div
            className="fixed rounded-full w-[180px] h-[180px] dark:bg-[#53E0FF]/10 bg-[#EFF188]/75 blur-3xl"
            style={{
                left: `${cursorPosition.x - 90}px`, // Adjusted for half the width of the circle
                top: `${cursorPosition.y - 90}px`, // Adjusted for half the height of the circle
            }}
        />
    )
}
