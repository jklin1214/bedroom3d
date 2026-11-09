# XH-OFF159 / cap159 (test150 only)

## Why cap158 failed
Capture size drift (1229×686 vs 1229×692) + fudge dx=−38 mis-mapped the slot to FE z=1.865.
True slot in c158_lux_day.png is file x≈466 (marble TV-wall nose meets beige).

## Alignment (1229×692, HUD cam, NO shift)
- Nose (2.130,y,0.70) → px 476; photo edge 466 (~10px: marble tessellation gaps shift visible edge)
- Whole-frame edge overlay: `/workspace/diag_cap159/overlay_edges_photoR_beforeG.png`

## Offline defect reproduction (REQUIRED GATE)
- Rasterizer FrontSide, float depth, near 0.1, 1229×692, HUD cam
- BEFORE (cap158 pack): hole cols x=463–476 depth≈5.6 (see-through to far wall/cavity)
- Matches photo edge at 466
- Cause: marble −Z has Y-gaps at x≈2.13; rays miss marble + miss giant (cross x=2.13 at z≈0.61–0.70)

## Fix
- Tessellated −X nose cap: x=2.130, z=0.60–0.86, y=0–2.8, 28 tris × wall+wall__p
- Bake = mean of marble nose neighbour verts (per light pack)
- Giant trimmed: near-z 0.70→0.86 (hand-off); FE stitch from cap158 kept
- All 4 light packs updated; variants.bytes=lightBytes+1

## AFTER offline
- hole cols = [] in all 4 lights; solid strip with neighbour bake
- Crops: diag_cap159/compare_before_after_photo.png
