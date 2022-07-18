import { Button } from "@riadh-adrani/recursive-web/html";
import { getVar, rgba, scale, translateX } from "@riadh-adrani/recursive-web/style/methods";

export default (text = "Notification", onClick = () => {}) => {
    return Button({
        type: "button",
        onClick,
        children: text,
        style: {
            scoped: true,
            className: "toast-button",
            normal: {
                position: "relative",
                padding: ["10px", "15px"],
                backgroundColor: getVar("main9"),
                color: getVar("invert3"),
                textAlign: "left",
                border: "none",
                fontSize: "small",
                letterSpacing: "0.5px",
                borderRadius: getVar("smallest"),
                cursor: "pointer",
                boxShadow: ["0px", "0px", "5px", "0px", getVar("main5")],
                overflow: "hidden",
                animation: ["toast-show", "200ms", "ease-in-out", 1],
            },
            hover: {
                backgroundColor: getVar("main5"),
            },
            [" span"]: {
                position: "absolute",
                borderRadius: "50%",
                transform: scale(0),
                animation: ["toast-btn-ripple", "600ms", "linear"],
                backgroundColor: rgba(255, 255, 255, 0.1),
            },
            animations: [
                {
                    name: "toast-btn-ripple",
                    steps: {
                        to: {
                            transform: scale(4),
                            opacity: 0,
                        },
                    },
                },
                {
                    name: "toast-show",
                    steps: {
                        "0%": { transform: translateX("50px") },
                        "100%": { transform: translateX("0px") },
                    },
                },
            ],
        },
        onMouseDown: (event) => {
            const button = event.currentTarget;
            const circle = document.createElement("span");
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            const dX = button.getBoundingClientRect().left;
            const dY = button.getBoundingClientRect().top;

            const oX = button.getBoundingClientRect().x - event.offsetX;
            const oY = button.getBoundingClientRect().y - event.offsetY;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${dX - oX - radius}px`;
            circle.style.top = `${dY - oY - radius}px`;

            setTimeout(() => {
                circle.remove();
            }, 1000);

            button.append(circle);
        },
    });
};
