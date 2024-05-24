export const CursorsEffect = ({ cursorPosition }) => {
    return (
        <div
            className="fixed rounded-full w-[140px] h-[140px] bg-[#EFF188] blur-3xl"
            style={{
                left: `${cursorPosition.x - 70}px`, // Adjusted for half the width of the circle
                top: `${cursorPosition.y - 70}px`, // Adjusted for half the height of the circle
            }}
        />
    )
}
