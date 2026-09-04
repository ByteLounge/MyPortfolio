import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async (): Promise<GLTF | null> => {
    try {
      const encryptedBlob = await decryptFile(
        "/models/character.enc",
        "Character3D#@"
      );
      const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

      return await new Promise<GLTF | null>((resolve, reject) => {
        loader.load(
          blobUrl,
          async (gltf) => {
            URL.revokeObjectURL(blobUrl);
            const character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: THREE.Object3D) => {
              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const name = child.name.toLowerCase();
                const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
                if (mat && "color" in mat && mat.color) {
                  if (name.includes("hair")) {
                    mat.color.set("#111111");
                  } else if (name.includes("outfit_top")) {
                    mat.color.set("#1c1c1f"); // Sleek Minimalist Matte Obsidian Hoodie
                  } else if (name.includes("glasses")) {
                    mat.color.set("#111111");
                  } else if (name.includes("beard") || name.includes("facewear")) {
                    mat.color.set("#222222");
                  }
                }

                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });

            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            const footR = character.getObjectByName("footR");
            if (footR) footR.position.y = 3.36;
            const footL = character.getObjectByName("footL");
            if (footL) footL.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            URL.revokeObjectURL(blobUrl);
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      });
    } catch (err) {
      console.error("Error decrypting or loading character:", err);
      throw err;
    }
  };

  return { loadCharacter };
};

export default setCharacter;
