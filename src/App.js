import gsap from "gsap";
import { default as React, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { animation } from "./anmScripts/animationScripts";
import "./styles.css";


export default function App() {
  const [scrollValue, setScrollValue] = useState(1);
  const marks = [
    "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
    "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
    "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
    "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
    "https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg",
  ];

  gsap.registerPlugin(animation);
  const Scroll =()=> {
    useEffect(() => {
      animation();
    }, []);
  
    return (
      <div className="App">
        <Boxes>
          <div className="box box1">
            <h1>Box 1</h1>
          
          </div>
        </Boxes>
      </div>
    );
  }
  
  const Boxes = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
  
    .box {
      width: 150px;
      height: 400px;
    }
  
    .box1 {
      background-color: #ffaaaa;
    }
  
    .box2 {
      background-color: #d46a6a;
    }
  
    .box3 {
      background-color: #801515;
    }
  
    .box4 {
      background-color: #550000;
    }
  `;
  

  return (
    <div style={{ paddingTop: "400px", paddingBottom: "600px" }}>
      <div
        className="c"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          marginTop: "200px",
          
        }}
      ></div>
      <div>
        <Marquee
          speed={300}
          style={{
            height: 150,
          }}
        >
          {marks.map((mark, index) => {
            return (
              <img
                key={index}
                src={mark}
                alt="mark"
                style={{
                  width: `${100 / marks.length}%`,
                }}
              />
            );
          })}{" "}
          {marks.map((mark, index) => {
            return (
              <img
                key={index}
                src={mark}
                alt="mark"
                style={{
                  width: `${100 / marks.length}%`,
                }}
              />
            );
          })}{" "}
        </Marquee>{" "}
        <div
          className="container"
          style={{
            flex: 1,
            justifiyContent: "center",
            alignItems: "center",
          }}
        >
          Buenas tardes{" "}
        </div>{" "}
        <div
        //className="container"
        //style={{
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "space-around",
        // alignItems: "center",
        // flex: 1,
        // top: 0,
        // overflow: "hidden",
        // transform: `translate(${500 - scrollValue}px, 0px)`,
        // backgroundColor: "red",
        // height: "100vh",
        // width: "100%",
        //}}
        >
          <div>Hola </div> <div>Hola </div>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
