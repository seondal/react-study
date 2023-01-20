import { ColorConsumer } from "../contexts/color";

const Colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ state, actions }) => (
          <div style={{ display: "flex" }}>
            {Colors.map((color) => (
              <div
                key={color}
                style={{
                  backgroundColor: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>

      <hr />
    </div>
  );
};

export default SelectColors;
