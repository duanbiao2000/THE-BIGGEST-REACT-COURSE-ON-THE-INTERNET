/**
 * ToggleBackgroundColor is a component function that toggles the background color and text color of a section.
 * It also changes the button style and text to switch between light and dark themes.
 * There are no parameters for this function, and it does not return any values directly; it renders a section with a button.
 */
function ToggleBackgroundColor() {
  // Initialize the background color state, defaulting to white
  const [backgroundColor, setBackgroundColor] = useState("white");
  // Initialize the text color state, defaulting to black
  const [textColor, setTextColor] = useState("#1b1b1b");
  // Initialize the button style state, defaulting to white
  const [buttonStyle, setButtonStyle] = useState("white");

  /**
   * handleClick is a click event handler function that toggles the background color, text color, and button style.
   * There are no parameters for this function, and it does not return any values.
   */
  function handleClick() {
    // Toggle the background color between white and black
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    // Toggle the text color between black and orange
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    // Toggle the button style between white and black
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  // Render the section with a button and content
  return (
    <section style={{ backgroundColor, color: textColor }}>
      // The button that triggers the theme toggle, displaying the current theme
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      // The content area displaying welcome text
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}