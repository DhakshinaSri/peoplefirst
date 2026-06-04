import React, { useState, useEffect, useRef } from 'react';
import { Shield, Target, Building, Users } from 'lucide-react';

const PremiumAboutStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes wordFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .staggered-word {
      opacity: 0;
      animation: wordFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      display: inline-block;
      transition: transform 0.3s ease, color 0.3s ease;
    }
    .staggered-word:hover {
      color: #FD6D02;
      transform: translateY(-2px);
    }
    .bento-card-gradient {
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .bento-card-gradient:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -15px rgba(43, 116, 219, 0.08);
    }
    .organic-grid {
      background-image: radial-gradient(#2b74db08 1.5px, transparent 1.5px);
      background-size: 32px 32px;
    }
  `}} />
);

const ElegantStaggeredHeader = ({ text, sizeClass = "text-2xl sm:text-3xl lg:text-4xl" }) => {
  const words = text.split(" ");

  return (
    <h1 className={`${sizeClass} font-bold tracking-tight text-slate-900 leading-tight text-left`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="staggered-word mr-2.5 sm:mr-3.5 mb-1.5 cursor-default"
          style={{
            animationDelay: `${0.1 + index * 0.08}s`
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const threeContainerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let scriptLoaded = false;
    let animationFrameId;

    const initThree = () => {
      if (!threeContainerRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const width = threeContainerRef.current.clientWidth;
      const height = threeContainerRef.current.clientHeight;

      // 1. Setup Scene
      const scene = new THREE.Scene();

      // 2. Setup Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 12;

      // 3. Setup Renderer (Transparent canvas to match white background theme)
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      threeContainerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // 4. Create Interconnected Particles representing "People & Process"
      const particleGroup = new THREE.Group();
      const count = 35;
      const geometry = new THREE.SphereGeometry(0.12, 16, 16);
      
      // Materials in your specific palette colors: #2B74DB (blue) and #FD6D02 (orange)
      const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x2B74DB });
      const orangeMaterial = new THREE.MeshBasicMaterial({ color: 0xFD6D02 });
      const greyMaterial = new THREE.MeshBasicMaterial({ color: 0xcbd5e1 });

      const spheres = [];
      const positions = [];

      for (let i = 0; i < count; i++) {
        // Random distribution in space
        const x = (Math.random() - 0.5) * 6;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 6;

        const materialChoice = i % 3 === 0 ? blueMaterial : i % 3 === 1 ? orangeMaterial : greyMaterial;
        const mesh = new THREE.Mesh(geometry, materialChoice);
        mesh.position.set(x, y, z);
        
        particleGroup.add(mesh);
        spheres.push(mesh);
        positions.push(mesh.position);
      }

      // Add elegant connecting lines between closely situated spheres
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2B74DB,
        transparent: true,
        opacity: 0.18
      });

      const lineGeometry = new THREE.BufferGeometry();
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      particleGroup.add(lineMesh);
      scene.add(particleGroup);

      // Light ambient highlight
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      // Mouse interactive target
      let targetRotationX = 0;
      let targetRotationY = 0;

      const handleMouseMoveEvent = (e) => {
        const rect = threeContainerRef.current.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / width) - 0.5;
        const my = ((e.clientY - rect.top) / height) - 0.5;
        targetRotationY = mx * 1.5;
        targetRotationX = my * 1.5;
      };

      threeContainerRef.current.addEventListener('mousemove', handleMouseMoveEvent);

      // Render Loop
      const clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Slow automatic spin
        particleGroup.rotation.y = elapsedTime * 0.05;
        
        // Dynamic drag rotation based on mouse coordinate positioning
        particleGroup.rotation.y += (targetRotationY - particleGroup.rotation.y) * 0.08;
        particleGroup.rotation.x += (targetRotationX - particleGroup.rotation.x) * 0.08;

        // Subtle animation of individual nodes floating
        spheres.forEach((sphere, index) => {
          sphere.position.y += Math.sin(elapsedTime + index) * 0.0015;
        });

        // Update connected lines positions
        const linePositions = [];
        for (let i = 0; i < count; i++) {
          for (let j = i + 1; j < count; j++) {
            const distance = positions[i].distanceTo(positions[j]);
            if (distance < 2.5) {
              linePositions.push(positions[i].x, positions[i].y, positions[i].z);
              linePositions.push(positions[j].x, positions[j].y, positions[j].z);
            }
          }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineGeometry.computeBoundingSphere();

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      // Handle Resize elegantly
      const handleResize = () => {
        if (!threeContainerRef.current || !rendererRef.current) return;
        const w = threeContainerRef.current.clientWidth;
        const h = threeContainerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (threeContainerRef.current) {
          threeContainerRef.current.removeEventListener('mousemove', handleMouseMoveEvent);
        }
        cancelAnimationFrame(animationFrameId);
        if (rendererRef.current && rendererRef.current.domElement) {
          rendererRef.current.domElement.remove();
        }
      };
    };

    // Load ThreeJS dynamically if not already injected
    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded = true;
        initThree();
      };
      document.head.appendChild(script);
    } else {
      initThree();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#FD6D02] selection:text-white relative overflow-hidden flex items-center justify-center py-12 sm:py-20 organic-grid">
      <PremiumAboutStyles />

      {/* Decorative Interactive Subtle Glow Layers */}
      <div 
        className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-[#2B74DB]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-gradient-to-tr from-[#FD6D02]/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)` }}
      />

      {/* Main Bento Structure Container */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Upper Bento Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Header & Key Statement (Takes 7 columns of grid width) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 flex flex-col justify-between text-left relative overflow-hidden bento-card-gradient shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#2B74DB]" />
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[#FD6D02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FD6D02]" />
                <span className="text-xs font-bold uppercase tracking-widest">Professional Integrity</span>
              </div>

              {/* Exact user content used here for Header */}
              <ElegantStaggeredHeader text="About Us" sizeClass="text-2xl sm:text-3xl lg:text-4xl" />

              {/* Exact Paragraph 1 used here */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <span className="font-bold text-slate-900 block mb-2 text-base sm:text-lg">People First Hr Solutions</span>
                is committed to delivering practical and efficient HR solutions for modern organizations. With a team of experienced HR professionals and industry experts, we provide services that support companies in managing their workforce effectively and maintaining statutory compliance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">

              <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">Strategic Identity</span>
            </div>
          </div>

          {/* Card 2: Interactive 3D Canvas Card (Takes 5 columns of grid width) */}
          <div className="lg:col-span-5  p-6 flex flex-col justify-between text-left relative overflow-hidden bento-card-gradient  min-h-[300px] lg:min-h-auto">
            <div className="absolute top-0 right-0 p-4 z-10">
            </div>

            {/* ThreeJS Container Canvas Mounting Target */}
            <div ref={threeContainerRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" />

          </div>

        </div>

        {/* Lower Bento Grid Row (Three equal columns or responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 3: Exact Paragraph 2 used here */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between text-left relative overflow-hidden bento-card-gradient shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FD6D02]" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FD6D02] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Workplace Safety</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our company focuses on helping organizations navigate complex labour laws, implement best HR practices, and maintain safe and ethical work environments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-[10px] uppercase font-bold tracking-widest text-[#FD6D02]">
              Security & Law Framework
            </div>
          </div>

          {/* Card 4: Exact Paragraph 3 used here */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between text-left relative overflow-hidden bento-card-gradient shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2B74DB]" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2B74DB] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Industry Adaptability</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We serve companies across multiple industries by offering customized HR services, compliance solutions, and workforce management support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-[10px] uppercase font-bold tracking-widest text-[#2B74DB]">
              Multilateral Support
            </div>
          </div>

          {/* Card 5: Exact Paragraph 4 used here */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden bento-card-gradient shadow-lg shadow-slate-950/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FD6D02]" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2B74DB]/20 to-transparent rounded-full -mr-8 -mt-8" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FD6D02] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Objective & Aim</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our goal is to become a trusted partner for businesses seeking reliable HR and compliance solutions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase font-bold tracking-widest text-[#FD6D02] relative z-10">
              Reliable Solutions
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}