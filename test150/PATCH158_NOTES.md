# XH-OFF158 / cap158 (test150 only)

## Alignment gate (PASS, max err 2.68px)
- Camera: eye[-0.17,1.55,-1.5] fwd[0.566,-0.049,0.823] fov55V 1229×686
- Global shift dx=-38.25 dy=-3.5 (1D vert-profile NCC peak dx≈-37)
- Landmarks (real pack verts ↔ photo edge peaks):
  - TV-R blue 441 ↔ marble nose z=0.70 → err 2.03
  - Slot FE 577 ↔ free-edge (2.132,y,1.865) → err 0.87
  - Door open L 595 ↔ door.minz (2.12,y,2.011) → err 2.61
  - Ceiling FE y=99 ↔ wall top y=2.8 → err 2.58
  - Ceiling doorL y=111 ↔ wall top → err 2.68
- Peaks 786/846 are headboard/other-door, not hall door

## Diagnosis cols 565–605
- Offline ID: giant -X f106053/54 (z=0.70–2.072) first hit; WebGL edge-on cracks at far end
- Dark band photo x580–595 ↔ world z≈1.885–2.057 = FE↔BK gap (CAND152)
- See-through to cavity low-bake scraps / farther walls when giant cracks
- Missing face: -X at x=2.132, z=1.865↔≈2.06, y=0–2.8

## Fix
- Trim giant exclusive verts z_max 2.072→1.865 (wall + wall__p)
- Append 32 -X stitch tris FE↔BK each (reuse verts; bake unchanged)
- Light packs unchanged; variants.bytes stays 9979337
- Cap157 -Z jamb retained; root/preview untouched

## Checks
- check_mainjs_decode.py deploy/test150 → OK
- Slot rays px580–595 → stitch faces bake01=14819 (= FE/BK neighbours)
