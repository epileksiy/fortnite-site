import React, {useEffect, useRef, useState} from 'react';
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {BrowserRouter, Link} from "react-router-dom";

const Contacts = () => {

    const mountRef = useRef(null);

    const [isLoading,setIsLoading] = useState(true);
    const [rotationSpeed, setRotationSpeed] = useState(0.005);

    useEffect(() => {

        var scene = new THREE.Scene();
        const textureLoader = new THREE.TextureLoader();

        // scene.background = new THREE.Color(255,255,255);
        var camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({ alpha: true});

        renderer.setSize( window.innerWidth, window.innerHeight );

        mountRef.current.appendChild( renderer.domElement );
        const normalMap2 = textureLoader.load( 'Water_1_M_Normal.jpg' );
        const clearcoatNormalMap = textureLoader.load( 'textures/pbr/Scratched_gold/Scratched_gold_01_1K_Normal.png' );

        var geometry = new THREE.BoxGeometry( 3, 3, 3 );
        const material = new THREE.MeshPhysicalMaterial( {
            clearcoat: 1.0,
            metalness: 1.0,
            color: 0xff0000,
            normalMap: normalMap2,
            normalScale: new THREE.Vector2( 0.15, 0.15 ),
            clearcoatNormalMap: clearcoatNormalMap,

            // y scale is negated to compensate for normal map handedness.
            clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
        } );

        var cube = new THREE.Mesh( geometry, material );

        // scene.add( cube );

        let lights = [];

        lights[ 0 ] = new THREE.PointLight( 0xffffff, 2, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        // lights[ 2 ] = new THREE.PointLight( 0xffffff, 2, 0 );
        lights[3] = new THREE.AmbientLight(0xffffff,6);

        // lights[ 0 ].position.set(-1.898,1.710,-1.310);
        // lights[ 1 ].position.set(1.898,-1.710,-1.310);
        // lights[ 1 ].position.set( 400, 400, 200 );
        // lights[ 2 ].position.set( - 400, - 400, - 200 );

        scene.add( lights[ 0 ] );
        scene.add( lights[ 1 ] );
        // scene.add( lights[ 2 ] );
        scene.add(lights[3]);

        const loader = new GLTFLoader();

        function render() {

            renderer.render( scene, camera );

        }


        let modelLoad = loader.load('assets/models/shotgun/scene.gltf', function (gltf) {
            gltf.scene.name = 'Lowpoly car';
            gltf.scene.rotation.set(0, -0.2, 0);
            gltf.scene.position.set(0, -0.6, -0.5);
            gltf.scene.scale.set(0.3, 0.3, 0.3);
            scene.add(gltf.scene);
            setIsLoading(false);

            // Сохраняем модель в переменную cube
            cube = gltf.scene;

            render();
            animate(); // Запускаем анимацию после загрузки модели
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
        
            // Поворот модели влево-вправо (sinusoidal)
            if (cube) {
                cube.rotation.y += rotationSpeed * Math.sin(Date.now() * 0.001);; // Изменение угла поворота
            }
        
            renderer.render(scene, camera);
        };

        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.target.set( 0, 0, - 0.2 );
        controls.update();

        window.addEventListener("resize", onWindowResize, false);

        // animate();

        let goListObjects = () => {
            scene.children.map((children) => {
                console.log('Object: ',children.type)
                return ''
            })
        }
        // goListObjects();

        return () => {
            // Очистка и остановка анимации при размонтировании
            renderer.dispose();
            window.removeEventListener('resize', onWindowResize);
        };

    }, []);


    return (
        <React.Fragment>
            <div className="App-topper">
                <h3>Rotate model with left mouse button to see all our contacts!</h3>
                <h3>Right mouse button - move, scroll - for zoom</h3>
            </div>
            <div ref={mountRef} className='icanchangeyou'>
                {isLoading && (<div className="contacts__loader"> <div className="contacts__loader-circle"></div> </div>)}
            </div>
            <div className="App-footer">
                <Link to="/">
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM34 10.5L2 10.5V13.5L34 13.5V10.5Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Contacts;
