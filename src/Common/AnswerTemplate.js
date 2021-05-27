import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return {
                ...state,
                answer: true,
                yesButtonColor: "#28E294",
                noButtonColor: "white"
            };
        case "no":
            return {
                ...state,
                answer: false,
                noButtonColor: "#D8524E",
                yesButtonColor: "white"
            };
        case "changecolor":
            return { ...state, backgroundColor: "transparent" };
    }
}

export default function AnswerTemplate({ firsttext, YesComponent, nocomponent, finishingtext }) {
    const [state, dispatch] = useReducer(reducer, {
        answer: null,
        yesButtonColor: "aliceblue",
        noButtonColor: "aliceblue",
        backgroundColor: "#676767"
    });

    function confirm(e) {
        dispatch({ type: "yes" });
    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    function changeColor() {
        dispatch({ type: "changecolor" });
    }

    useEffect(() => {
        setTimeout(() => {
            changeColor();
        }, 1000);
    }, []);
    return (
        <div>
            <div style={{ backgroundColor: state.backgroundColor }}>{firsttext}</div>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>
                TAK
      </button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>
                NIE
      </button>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <YesComponent />
            ) : (
                <div>{finishingtext}</div>
            )}
        </div>
    );
}