"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import Image from "next/image";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL] = useState<boolean>(checkWebGLSupport);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  useEffect(() => {
    if (reducedMotion || !hasWebGL) return;

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x38bdf8, 3.5, 40);
    pointLightCyan.position.set(10, 8, 12);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0xa855f7, 3.0, 40);
    pointLightPurple.position.set(-10, -6, 10);
    scene.add(pointLightPurple);

    const backLight = new THREE.DirectionalLight(0xffffff, 1.2);
    backLight.position.set(0, 5, -10);
    scene.add(backLight);

    // Master Group that tilts with mouse
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Rotating Core Group
    const coinGroup = new THREE.Group();
    masterGroup.add(coinGroup);

    // Load Portrait Texture
    const textureLoader = new THREE.TextureLoader();
    const portraitTexture = textureLoader.load(
      "/images/profile/moussa-diakite.png",
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.center.set(0.5, 0.5);
      }
    );

    // 1. Double-Sided Circular 3D Disc (Front & Back Face)
    const discRadius = 4.8;
    const discThickness = 0.28;

    // Front Face (Photo)
    const frontGeom = new THREE.CircleGeometry(discRadius, 64);
    const frontMat = new THREE.MeshStandardMaterial({
      map: portraitTexture,
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.FrontSide,
    });
    const frontMesh = new THREE.Mesh(frontGeom, frontMat);
    frontMesh.position.z = discThickness / 2 + 0.01;
    coinGroup.add(frontMesh);

    // Back Face (Photo flipped so it looks natural on both sides)
    const backTexture = portraitTexture.clone();
    backTexture.wrapS = THREE.RepeatWrapping;
    backTexture.repeat.x = -1; // Mirror horizontally so orientation is correct from behind
    const backGeom = new THREE.CircleGeometry(discRadius, 64);
    const backMat = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.BackSide,
    });
    const backMesh = new THREE.Mesh(backGeom, backMat);
    backMesh.position.z = -discThickness / 2 - 0.01;
    coinGroup.add(backMesh);

    // Metallic Beveled Edge / Outer Ring Frame
    const frameGeom = new THREE.CylinderGeometry(
      discRadius + 0.08,
      discRadius + 0.08,
      discThickness,
      64,
      1,
      true
    );
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.25,
      metalness: 0.85,
    });
    const frameMesh = new THREE.Mesh(frameGeom, frameMat);
    frameMesh.rotation.x = Math.PI / 2;
    coinGroup.add(frameMesh);

    // Front Glowing Bezel Border (Cyan Neon Ring)
    const bezelGeom = new THREE.TorusGeometry(discRadius + 0.08, 0.09, 16, 100);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const frontBezel = new THREE.Mesh(bezelGeom, bezelMat);
    frontBezel.position.z = discThickness / 2;
    coinGroup.add(frontBezel);

    const backBezel = new THREE.Mesh(bezelGeom, bezelMat);
    backBezel.position.z = -discThickness / 2;
    coinGroup.add(backBezel);

    // 2. Futuristic Orbital Rings
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    // Inner Gyroscopic Ring (Cyan)
    const innerRingGeom = new THREE.TorusGeometry(5.6, 0.035, 16, 120);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const innerRing = new THREE.Mesh(innerRingGeom, innerRingMat);
    ringGroup.add(innerRing);

    // Outer Gyroscopic Ring (Violet Neon)
    const outerRingGeom = new THREE.TorusGeometry(6.4, 0.045, 16, 120);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.75,
    });
    const outerRing = new THREE.Mesh(outerRingGeom, outerRingMat);
    outerRing.rotation.x = Math.PI / 4;
    ringGroup.add(outerRing);

    // 3. Floating Orbiting Cyber Particles
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x38bdf8);
    const colorPurple = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const radius = 5.2 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = colorCyan.clone().lerp(colorPurple, Math.random());
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeom.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    masterGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (Parallax Tilt)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      masterGroup.rotation.y = mouseX;
      masterGroup.rotation.x = mouseY;

      // Continuous 360° rotation for the photo coin
      coinGroup.rotation.y = elapsedTime * 0.55;

      // Gentle floating levitation
      coinGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.22;

      // Counter-rotating gyroscopic rings
      innerRing.rotation.z = elapsedTime * 0.35;
      innerRing.rotation.x = Math.sin(elapsedTime * 0.5) * 0.4;
      outerRing.rotation.y = -elapsedTime * 0.45;
      outerRing.rotation.z = Math.cos(elapsedTime * 0.6) * 0.3;

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      frontGeom.dispose();
      frontMat.dispose();
      backGeom.dispose();
      backMat.dispose();
      frameGeom.dispose();
      frameMat.dispose();
      bezelGeom.dispose();
      bezelMat.dispose();
      innerRingGeom.dispose();
      innerRingMat.dispose();
      outerRingGeom.dispose();
      outerRingMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      portraitTexture.dispose();
      backTexture.dispose();
    };
  }, [reducedMotion, hasWebGL]);

  if (!hasWebGL || reducedMotion) {
    return (
      <div className="w-full h-full min-h-[380px] lg:min-h-[460px] flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-transparent blur-3xl opacity-70" />
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(56,189,248,0.4)]">
          <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-slate-950">
            <Image
              src="/images/profile/moussa-diakite.png"
              alt="Portrait professionnel 3D de Moussa Diakité"
              fill
              sizes="320px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] lg:min-h-[500px] flex items-center justify-center relative select-none"
      aria-label="Portrait professionnel 3D circulaire interactif de Moussa Diakité"
    />
  );
}
