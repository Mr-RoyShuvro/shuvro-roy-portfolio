// import "./styles.css";
import Card from "react-animated-3d-card";
// import { useState } from "react";

export default function PortfolioCard() {
    // const [showFront, setShowFront] = useState("Max Verstappen");

    return (
        <div className="">
            <div
                className="App"
                style={{
                    paddingTop: "66px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    background: "linear-gradient(to right, black, #335e70)",
                    height: "100vh"
                }}
            >
                <Card
                    cursorPointer={false}
                    shineStrength={0.75}
                    style={{
                        background: "linear-gradient(to right, #335e70, #1d5266, #173c4b)",
                        width: "300px",
                        height: "400px",
                        cursor: "pointer"
                    }}
                    // onClick={() => setShowFront("Lewis Hamilton")}
                >
                    <p>.</p>
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            // alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "30px",
                                fontFamily: "Fira Code",
                                color: "white"
                            }}
                            // onClick={console.log("prova")}
                        >
                            <label 
                            style={{
                                paddingLeft: "30px"
                            }}
                            >Techtron</label>
                            <div className="flex gap-5">
                                <a href="https://techtron-shop.web.app/">Live</a>
                                <div>|</div>
                                <a href="https://github.com/Mr-RoyShuvro/techtron-shop-client-project10">Github</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            style={{
                                color: "white",
                                position: "absolute",
                                bottom: "180px",
                                left: "8px",
                                right: "2px",
                                opacity: 0.8
                            }}
                        >
                            <p>Techtron is a comprehensive technology and electronics e-commerce website
                                designed to provide a seamless shopp- ing experience for users.
                            </p>
                        </label>
                        <label
                            style={{
                                color: "white",
                                position: "absolute",
                                bottom: "30px",
                                left: "8px",
                                right: "2px",
                                opacity: 0.5
                            }}
                        >
                            <div>
                                <p>1. Efficiently manage and organize product inventory.</p>
                                <p>2. Seamlessly add, update, remove items.</p>
                                <p>3. Secure login, registration, and account management.</p>
                            </div>
                        </label>
                    </div>
                </Card>
            </div>
        </div>
    );
}
