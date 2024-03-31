import { Accesibility } from "@/interfaces/types";
import { createContext, useEffect, useState } from "react";

interface ContextData {
  textSize: boolean;
  cursor: boolean;
  contrast: boolean;
  animation: boolean;
  Sreader: boolean;
  ReadingM: boolean;
  saturation: boolean;
  handleBtn: (arg: string) => void;
}

export const accesibilityContext = createContext({} as ContextData);

interface Props {
  children: React.ReactNode;
}

export const AccesibilityProvider = ({ children }: Props) => {
  const [textSize, settextSize] = useState(false);
  const [cursor, setcursor] = useState(false);
  const [contrast, setcontrast] = useState(false);
  const [animation, setanimation] = useState(false);
  const [Sreader, setSreader] = useState(false);
  const [ReadingM, setReadingM] = useState(false);
  const [saturation, setsaturation] = useState(false);

  const handleBtn = (arg: string) => {
    switch (arg) {
      case "textSize":
        settextSize(!textSize);
        break;
      case "cursor":
        setcursor(!cursor);
        break;
      case "contrast":
        setcontrast(!contrast);
        break;
      case "animation":
        setanimation(!animation);
        break;
      case "Sreader":
        setSreader(!Sreader);
        break;
      case "ReadingM":
        setReadingM(!ReadingM);
        break;
      case "saturation":
        setsaturation(!saturation);
        break;
      default:
        break;
    }
  };
  return (
    <accesibilityContext.Provider
      value={{
        textSize,
        handleBtn,
        cursor,
        contrast,
        animation,
        Sreader,
        ReadingM,
        saturation,
      }}
    >
      {children}
    </accesibilityContext.Provider>
  );
};
