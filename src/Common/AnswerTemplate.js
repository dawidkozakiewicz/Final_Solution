import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return {
                ...state,
                answer: true,
                yesButtonColor: "#28E294",
                noButtonColor: "aliceblue"
            };
        case "no":
            return {
                ...state,
                answer: false,
                noButtonColor: "#D8524E",
                yesButtonColor: "aliceblue"
            };
        case "changecolor":
            return { ...state, backgroundColor: "transparent" };
    }
}

export default function AnswerTemplate({
    firsttext,
    YesComponent,
    NoComponent,
    finishingtext
}) {
    const [state, dispatch] = useReducer(reducer, {
        answer: null,
        yesButtonColor: "aliceblue",
        noButtonColor: "aliceblue",
        backgroundColor: "#343A40"
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
            <div style={{ backgroundColor: state.backgroundColor, paddingLeft: "30px", borderRadius: "15px" }}>{firsttext}</div>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>
                TAK
      </button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>
                NIE
      </button>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                (YesComponent && <YesComponent />) ||
                (finishingtext && <div>{finishingtext}</div>) || <h1>Blurp</h1>
            ) : (
                (NoComponent && <NoComponent />) ||
                (finishingtext && <div>{finishingtext}</div>) || <h1>Blurp</h1>
            )}
        </div>
    );
}
