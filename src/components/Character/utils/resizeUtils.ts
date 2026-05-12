import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setAllTimeline, setCharTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) {
    return;
  }

  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (!workTrigger || trigger !== workTrigger) {
      trigger.kill();
    }
  });

  setCharTimeline(character, camera);
  setAllTimeline();
}
