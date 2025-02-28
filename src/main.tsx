import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LibraryProvider, ContextProvider } from "./provider";
import { Canvas } from "@react-three/fiber";
import { Stars } from "lucide-react";

function StarBackground() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <color attach='background' args={["#000"]} />
      <Stars
        radius={100} // 星が配置される球体の半径
        depth={50} // 星の奥行きの深さ
        count={7000} // 星の数
        factor={4} // 星の大きさの係数
        saturation={0} // 彩度（0で白色）
        fade // フェードエフェクトを有効化
        speed={0.5} // アニメーションの速度
      />
    </Canvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarBackground />

    <LibraryProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </LibraryProvider>
  </React.StrictMode>
);
