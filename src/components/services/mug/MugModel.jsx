
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/mugModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh geometry={nodes.car_porsche_carrera_911glass_glass_LOD2_UV1_Untitled_171_Default_glass_0.geometry} material={materials.glass} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_tiled_carbon_LOD2_UV1_Untitled_134_Default_carbon_0.geometry} material={materials.carbon} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_tiled_grid_LOD2_UV1_Untitled_131_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_underside_LOD2_UV1_Untitled_033_Default_under_0.geometry} material={materials.under} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_emissive_ID_rear_LOD2_UV2_Untitled_032_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_carpaint_LOD2_UV2_Untitled_030_Default_carpaint_0.geometry} material={materials.carpaint} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_details_LOD2_UV1_Untitled_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911chassis_details_normal_LOD2_UV2_Untitled_024_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFR_caliper_calipers_LOD6_UV1_Untitled_007_Default_calipers_0.geometry} material={materials.calipers} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFR_tire_tires_LOD2_UV1_Untitled_121_Default_tyre_0.geometry} material={materials.tyre} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFR_rims_LOD2_UV1_Untitled_015_Default_phong8_0.geometry} material={materials.phong8} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFR_details_normal_LOD2_UV2_Untitled_028_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFL_caliper_calipers_LOD6_UV1_Untitled_088_Default_calipers_0.geometry} material={materials.calipers} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFL_tire_tires_LOD2_UV1_Untitled_120_Default_tyre_0.geometry} material={materials.tyre} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFL_rims_LOD2_UV1_Untitled_013_Default_phong8_0.geometry} material={materials.phong8} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelFL_details_normal_LOD2_UV2_Untitled_158_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBR_caliper_calipers_LOD6_UV1_Untitled_005_Default_calipers_0.geometry} material={materials.calipers} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBR_tire_tires_LOD2_UV1_Untitled_143_Default_tyre_0.geometry} material={materials.tyre} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBR_rims_LOD2_UV1_Untitled_091_Default_phong8_0.geometry} material={materials.phong8} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBR_details_normal_LOD2_UV2_Untitled_114_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBL_caliper_calipers_LOD6_UV1_Untitled_087_Default_calipers_0.geometry} material={materials.calipers} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBL_tire_tires_LOD2_UV1_Untitled_021_Default_tyre_0.geometry} material={materials.tyre} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBL_rims_LOD2_UV1_Untitled_012_Default_phong8_0.geometry} material={materials.phong8} />
          <mesh geometry={nodes.car_porsche_carrera_911wheelBL_details_normal_LOD2_UV2_Untitled_103_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_anim04_details_normal_LOD2_UV2_Untitled_029_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_anim02_details_normal_LOD2_UV2_Untitled_169_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_anim03_details_normal_LOD2_UV2_Untitled_172_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_trunk_20_details_LOD2_UV1_Untitled_017_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0.914, 2.067, -0.001]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_skirt_R_5_details_LOD2_UV1_Untitled_014_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[1.815, 0.508, 0]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_skirt_L_5_details_LOD2_UV1_Untitled_011_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[-1.813, 0.505, 0]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_wing_20_details_LOD2_UV1_Untitled_149_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[-1.899, 1.024, 1.026]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_trunk_20_carpaint_custom02_LOD2_UV2_Untitled_081_Default_carpaint_0.geometry} material={materials.carpaint} position={[0.914, 2.067, -0.001]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_wing_20_details_normal_LOD2_UV2_Untitled_132_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[-1.899, 1.024, 1.026]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_wing_20_carpaint_custom02_LOD2_UV2_Untitled_082_Default_carpaint_0.geometry} material={materials.carpaint} position={[-1.899, 1.024, 1.026]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_trunk_20_emissive_ID_thirdlight_LOD2_UV2_Untitled_178_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0.914, 2.067, -0.001]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911steering_wheel_details_normal_LOD2_UV2_Untitled_145_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0, -1.648, 0.008]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_skirt_L_5_details_normal_LOD2_UV2_Untitled_142_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[-1.813, 0.505, 0]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_skirt_R_5_details_normal_LOD2_UV2_Untitled_026_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[1.815, 0.508, 0]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911steering_wheel_details_LOD2_UV1_Untitled_020_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0, -1.648, 0.008]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_B_5_carpaint_LOD2_UV2_Untitled_138_Default_carpaint_0.geometry} material={materials.carpaint} position={[0.168, -0.622, 0.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_F_5_details_normal_LOD2_UV2_Untitled_025_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0, 1.27, -3.04]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_F_5_details_LOD2_UV1_Untitled_006_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0, 1.27, -3.04]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_F_5_carpaint_LOD2_UV2_Untitled_031_Default_carpaint_0.geometry} material={materials.carpaint} position={[0, 1.27, -3.04]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_B_5_details_normal_LOD2_UV2_Untitled_137_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0.168, -0.622, 0.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_B_5_licenseplate_LOD2_UV1_Untitled_072_Default_phong6_0.geometry} material={materials.phong6} position={[0.168, -0.622, 0.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_F_5_glass_LOD2_UV1_Untitled_074_Default_glass_0.geometry} material={materials.glass} position={[0, 1.27, -3.04]} rotation={[Math.PI, 0, 0]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_B_5_glass_LOD2_UV1_Untitled_073_Default_glass_0.geometry} material={materials.glass} position={[0.168, -0.622, 0.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_bumper_B_5_details_LOD2_UV1_Untitled_003_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[0.168, -0.622, 0.454]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_hood_15_carpaint_custom01_LOD2_UV2_Untitled_174_Default_carpaint_0.geometry} material={materials.carpaint} position={[-1.397, 1.846, 0]} rotation={[0, 0, Math.PI]} />
          <mesh geometry={nodes.car_porsche_carrera_911detach_hood_15_details_normal_LOD2_UV2_Untitled_141_Default_car_porsche_carrera_911Default1_0.geometry} material={materials.car_porsche_carrera_911Default1} position={[-1.397, 1.846, 0]} rotation={[0, 0, Math.PI]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mugModel.glb')
export default MugModel;
