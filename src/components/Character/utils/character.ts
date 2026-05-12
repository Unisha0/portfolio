import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setAllTimeline, setCharTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const CHARACTER_PASSWORD = "Character3D#@";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async () => {
    let blobUrl: string | null = null;

    try {
      const decryptedModel = await decryptFile(
        "/models/character.enc",
        CHARACTER_PASSWORD
      );

      blobUrl = URL.createObjectURL(new Blob([decryptedModel]));

      return await new Promise<GLTF | null>((resolve, reject) => {
        loader.load(
          blobUrl!,
          async (gltf) => {
            const character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);

            character.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character.getObjectByName("footR")!.position.y = 3.36;
            character.getObjectByName("footL")!.position.y = 3.36;

            if (blobUrl) {
              URL.revokeObjectURL(blobUrl);
            }
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            if (blobUrl) {
              URL.revokeObjectURL(blobUrl);
            }
            dracoLoader.dispose();
            reject(error);
          }
        );
      });
    } catch (error) {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
      dracoLoader.dispose();
      throw error;
    }
  };

  return { loadCharacter };
};

export default setCharacter;
