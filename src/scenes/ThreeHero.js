import React, { useEffect, useRef, useMemo } from "react";
import {
	Canvas,
	extend,
	useFrame,
	useLoader,
	useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Water } from "three/examples/jsm/objects/Water";
import { Sky } from "@react-three/drei";
import * as THREE from "three";

extend({ Water });

const ThreeHero = () => {
	/* Orbit Controls */
	const OrbitController = () => {
		const { camera, gl } = useThree();
		useEffect(() => {
			const controls = new OrbitControls(camera, gl.domElement);
			controls.minDistance = 3;
			controls.maxDistance = 20;
			controls.minPolarAngle = 0;
			controls.maxPolarAngle = Math.PI / 2 - 0.1;
			return () => {
				controls.dispose();
			};
		}, [camera, gl]);
		return null;
	};

	/* Scene */
	const BuildSky = (props) => {
		return (
			<Sky
				distance={450000}
				sunPosition={[5, 1, 8]}
				inclination={0}
				azimuth={0.25}
				{...props}
			/>
		);
	};
	const BuildSea = (props) => {
		const ref = useRef();
		const gl = useThree((state) => state.gl);
		const waterNormals = useLoader(
			THREE.TextureLoader,
			"https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
		);
		waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
		const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
		const config = useMemo(
			() => ({
				textureWidth: 512,
				textureHeight: 512,
				waterNormals,
				sunDirection: new THREE.Vector3(),
				sunColor: 0xeb8934,
				waterColor: 0x0064b5,
				distortionScale: 40,
				fog: false,
				format: gl.encoding,
			}),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[waterNormals]
		);
		useFrame(
			(state, delta) => (ref.current.material.uniforms.time.value += delta)
		);

		return (
			<water
				ref={ref}
				args={[geom, config]}
				rotation-x={-Math.PI / 2}
				position={[0, 0, 0]}
			/>
		);
	};

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
			<Canvas camera={{ position: [-3, 1.5, 2] }}>
				<OrbitController />
				<directionalLight position={[1, 1, 5]} />
				<Cube position={[-1.5, 0, 0]} />
				<BuildSky />
				<BuildSea />
			</Canvas>
		</div>
	);
};

export default ThreeHero;
