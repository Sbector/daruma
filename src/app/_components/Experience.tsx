import { Environment, OrbitControls } from "@react-three/drei"
import { Html } from "@react-three/drei"
import HomeCard from "./HomeCard"


export default function Experience() {

    return (
        <>
            <Environment
                preset="forest"
                blur={1}
                backgroundIntensity={0.1}
            />

            <OrbitControls
                enablePan={false}
                rotateSpeed={0.8}
                minDistance={3}
                maxDistance={8}
                target={[0, -0.1, 0]}
            />
            {/* <directionalLight position={[1, 1, 0]} />
            <directionalLight position={[1, 0, 0]} intensity={15} color={'#ff0000'} />
            <ambientLight intensity={0.7} /> */}
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
                <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.01}>
                    <HomeCard/>
                </Html>
            </mesh>
            
        </>
    )

}