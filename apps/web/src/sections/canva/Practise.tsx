import { useEffect, useRef, useState } from "react";

import { Button } from "@aeiou/design-system/src/atoms/Button";
import { Icon } from "@aeiou/design-system/src/atoms/Icon";

import { classNames } from "../shared/classNames";
import { Data } from "../shared/useData";

import styles from "./Practise.module.scss";

export function Practise({ data, type }: { data: Data[]; type: string }) {
  const typeMode = type;

  const [imageSrc, setImageSrc] = useState(typeMode === "letters" ? "/img/letters/a.png" : "/img/numbers/1.png");
  const [word, setWord] = useState("");

  const [isDrawing, setIsDrawing] = useState(false);
  const [resize, setResize] = useState(0);
  const [clear, setClear] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const scale = window.devicePixelRatio;
    const aspectRadio = 4 / 3;
    let imageWidth: number;
    let imageHeight: number;
    const orientation = window.innerHeight > window.innerWidth ? "portrait" : "landscape";

    if (!context) {
      return;
    }

    contextRef.current = context;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      context.scale(scale, scale);
    };

    const drawImage = () => {
      const image = new Image();
      image.src = imageSrc;

      switch (true) {
        case orientation === "landscape":
          imageHeight = canvas.height / scale;
          imageWidth = imageHeight * aspectRadio;
          break;
        case orientation === "portrait":
          imageWidth = canvas.width / scale;
          imageHeight = imageWidth / aspectRadio;
          break;

        default:
          break;
      }

      const imageHorizontalCenter = (canvas.width / scale - imageWidth) / 2;
      const imageVerticalCenter = (canvas.height / scale - imageHeight) / 2;
      image.onload = () => {
        context.drawImage(image, imageHorizontalCenter, imageVerticalCenter, imageWidth, imageHeight);
      };
    };

    const drawWord = () => {
      const text = word;
      const centerHorizontal = canvas.width / scale / 2;
      const centerVertical = (canvas.height / scale + 100) / 2;

      let fontsize = 180;
      do {
        fontsize--;
        context.font = `${fontsize}px Massallera`;
      } while (context.measureText(text).width > (canvas.width / scale) * 0.9);

      // context.font = `${fontSize}px Massallera`;
      context.fillStyle = "#E6EAEE";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, centerHorizontal, centerVertical);
    };

    resizeCanvas();

    typeMode === "words" ? drawWord() : drawImage();

    if (clear) {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    setClear(false);
  }, [imageSrc, word, resize, clear]);

  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setResize(window.innerWidth);
    });
  }
  const startDrawing = ({ nativeEvent }: { nativeEvent: any }) => {
    let { clientX, clientY } = nativeEvent;
    if (nativeEvent.changedTouches && nativeEvent.changedTouches.length > 0) {
      clientX = nativeEvent.changedTouches[0].clientX;
      clientY = nativeEvent.changedTouches[0].clientY;
    }
    const context = contextRef.current;
    if (!context) {
      return;
    }
    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#aee8da";

    typeMode === "words" ? (context.lineWidth = 7) : (context.lineWidth = 10);

    context.moveTo(clientX, clientY);

    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }: { nativeEvent: any }) => {
    if (!isDrawing) {
      return;
    }
    let { clientX, clientY } = nativeEvent;
    if (nativeEvent.changedTouches && nativeEvent.changedTouches.length > 0) {
      clientX = nativeEvent.changedTouches[0].clientX;
      clientY = nativeEvent.changedTouches[0].clientY;
    }
    contextRef.current?.lineTo(clientX, clientY);
    contextRef.current?.stroke();
  };

  return (
    <main className={styles.main}>
      {typeMode === "words" ? (
        <Button mode="primary" href="/paraules" position="left" label="arrowLeft">
          <Icon icon="arrowLeft" />
        </Button>
      ) : (
        <Button mode="primary" href="/" position="left" label="home">
          <Icon icon="home" />
        </Button>
      )}

      <Button mode="secondary" position="right" label="esborrar" onClick={() => setClear(true)}>
        <Icon icon="eraser" />
      </Button>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
        ref={canvasRef}
        className={styles.canvas}
      ></canvas>
      <section className={styles.fotter}>
        {typeMode === "words" ? (
          <div className={classNames(styles["fotter__container"], styles[`fotter__container--100`])}>
            {data.map((data) => (
              <Button
                key={data.text}
                mode="tertiary"
                size="xxl"
                isActive={word === data.text}
                onClick={() => setWord(data.text)}
              >
                <Icon icon={data.icon!} size="xxl" />
              </Button>
            ))}
          </div>
        ) : (
          <div className={styles.fotter__container}>
            {data.map((data) => (
              <Button
                key={data.text}
                mode="tertiary"
                isActive={imageSrc === data.imageSrc}
                onClick={() => setImageSrc(data.imageSrc!)}
              >
                {data.text}
              </Button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
