
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const HtmlModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/htmlTag.glb");
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(.5).play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, Math.PI / 4, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/htmlTag.glb");