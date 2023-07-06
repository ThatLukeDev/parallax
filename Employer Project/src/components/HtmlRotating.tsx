import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

let modelSelectTwo = "";
export const HtmlModel = ({props, modelSelect}) => {
  modelSelectTwo = modelSelect
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(`/${modelSelect}.glb`);
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(.5).play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.001"]}
          position={[-0.006, 0, 0.023]}
          rotation={[Math.PI / 2, Math.PI / 4, 0]}
        />
      </group>
    </group>
  );
}
if (modelSelectTwo != "") {
  useGLTF.preload(`/${modelSelectTwo}.glb`);
}

