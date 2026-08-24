import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, useGLTF } from "@react-three/drei";

// 1. O "Peixe" (precisa ficar separado para funcionar dentro do Canvas)
  <img 
    src="./favicon.svg" 
    alt="Logo" 
    style={{ height: '56px', width: 'auto' }} 
    className="object-contain" 
  />
// 2. O "Aquário" (A cena principal que vai para a sua página)
export default function Scene3D() {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Environment preset="city" />
        
        {/* O Suspense segura a tela enquanto a câmera 3D pesada está carregando */}
        <Suspense fallback={null}>
        </Suspense>
        
      </Canvas>
    </div>
  );
}