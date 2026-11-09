# audit150 candidate (NOT published)
Parent: audit149
Changes:
1. Same-mesh T-junction snap in corridor boxes A01A02 / A03 / A04A08 only
   - meshes: wall, wall__p (door had 0 same-mesh T-junc in box)
   - policy: NOT already an edge; N·N>=0.95; in-plane<=1mm; R=8mm; reject degen-creating; no wall↔door weld
   - moved: 2 verts each wall/wall__p; assert no outside-box changes; no new degenerates
2. A04 skirting bake transfer: NOT applied (match thresholds failed)
3. f0018: offline rays only; no hide

Manifest: snapped150_manifest.json
