import React, { useEffect, useRef } from "react";

// Three.js is loaded globally via CDN (index.html). We access window.THREE.

export default function ThreeStormBackground() {
  const containerRef = useRef(null);
  const cleanupRef = useRef(null);

  useEffect(() => {
    const THREE = window.THREE;
    if (!THREE) {
      console.error("Three.js CDN not loaded");
      return;
    }

    let scene, camera, renderer;
    let cloudParticles = [];
    let rain, rainGeo;
    let flash;
    const rainCount = 15000;
    const flashRange = 1500;
    const flashDecay = 0.5;
    // Cooldown-controlled flash timing: wait at least min gap + random jitter
    const minFlashGapMs = 1600;
    const flashJitterMs = 2600;
    let lastFlashAt = performance.now();
    const flashMinPower = 2000;
    const flashMaxPower = 5000;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;

      const ambient = new THREE.AmbientLight(0x555555);
      scene.add(ambient);

      const directionalLight = new THREE.DirectionalLight(0xffeedd);
      directionalLight.position.set(0, 0, 1);
      scene.add(directionalLight);

      flash = new THREE.PointLight(0xffffff, 0, flashRange, flashDecay);
      flash.position.set(200, 300, 100);
      flash.customPower = 0;
      flash.isFlashing = false;
      scene.add(flash);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      scene.fog = new THREE.FogExp2(0x11111f, 0.002);
      renderer.setClearColor(scene.fog.color);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.domElement.style.position = "fixed";
      renderer.domElement.style.inset = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.zIndex = "-1"; // behind UI

      containerRef.current &&
        containerRef.current.appendChild(renderer.domElement);

      const positions = [];
      const sizes = [];
      rainGeo = new THREE.BufferGeometry();
      for (let i = 0; i < rainCount; i++) {
        positions.push(Math.random() * 400 - 200);
        positions.push(Math.random() * 500 - 250);
        positions.push(Math.random() * 400 - 200);
        sizes.push(30);
      }
      rainGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(positions), 3)
      );
      rainGeo.setAttribute(
        "size",
        new THREE.BufferAttribute(new Float32Array(sizes), 1)
      );
      const rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.1,
        transparent: true,
      });
      rain = new THREE.Points(rainGeo, rainMaterial);
      scene.add(rain);

      const loader = new THREE.TextureLoader();
      loader.load(
        "https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png",
        function (texture) {
          const cloudGeo = new THREE.PlaneGeometry(500, 500);
          const cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true,
          });
          for (let p = 0; p < 25; p++) {
            const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
              Math.random() * 800 - 400,
              500,
              Math.random() * 500 - 450
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random() * 360;
            cloud.material.opacity = 0.6;
            cloudParticles.push(cloud);
            scene.add(cloud);
          }
          animate();
        }
      );

      window.addEventListener("resize", onWindowResize, { passive: true });
    }

    function animate() {
      cloudParticles.forEach((p) => {
        p.rotation.z -= 0.002;
      });
      // drift rain forwards
      rain.position.z -= 0.222;
      if (rain.position.z < -200) rain.position.z = 0;

      // lightning with cooldown to control frequency
      const now = performance.now();
      const requiredGap = minFlashGapMs + Math.random() * flashJitterMs;
      if (!flash.isFlashing && now - lastFlashAt >= requiredGap) {
        flash.isFlashing = true;
        flash.customPower =
          flashMinPower + Math.random() * (flashMaxPower - flashMinPower);
        flash.intensity = flash.customPower;
        flash.position.set(
          Math.random() * 800 - 400,
          300 + Math.random() * 200,
          Math.random() * 200 - 100
        );
        lastFlashAt = now;
      } else if (flash.isFlashing) {
        flash.customPower *= 0.85;
        flash.intensity = flash.customPower;
        if (flash.customPower < 5) {
          flash.customPower = 0;
          flash.intensity = 0;
          flash.isFlashing = false;
        }
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    let rafId = 0;
    init();

    cleanupRef.current = () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onWindowResize);
      try {
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        }
      } catch (err) {
        console.warn("Error disposing renderer:", err);
      }
      // dispose geometries/materials
      try {
        if (rainGeo) rainGeo.dispose();
      } catch (err) {
        console.warn("Error disposing rain geometry:", err);
      }
    };

    return cleanupRef.current;
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
