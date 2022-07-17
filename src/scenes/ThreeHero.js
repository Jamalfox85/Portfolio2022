import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const ThreeHero = () => {
	/* Cube */
	const Cube = (props) => {
		const cubeRef = useRef();
		useFrame(() => {
			cubeRef.current.rotation.x += 0.01;
			cubeRef.current.rotation.y += 0.02;
		});
		return (
			<mesh {...props} ref={cubeRef}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial />
			</mesh>
		);
	};

	return (
		<div className="ThreeHero-wrapper">
			<Canvas camera={{ position: [-3, 0, 2] }}>
				<directionalLight position={[1, 1, 5]} />
				<Cube position={[-1.5, 0, 0]} />
			</Canvas>
		</div>
	);
};

export default ThreeHero;
