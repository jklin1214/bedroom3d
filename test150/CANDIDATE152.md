# CANDIDATE 152 — C01 −X face stitch (UNPUBLISHED)

## cam151 conclusions
- C01 closer/far SNAP OK; triangular teeth remain both styles; upward pitch OK
- Kids jamb small grey teeth still present

## Proof
- Exact-camera rays from verified C01 closer hit **wall −X at x=2.132** (not exclusively z=1.865 strip)
- Style-twin wall/wall__p coplanar pairs are expected, not the defect
- Mesh diff vs old LIVE (hyb): hyb −X face spans z≈1.87–2.07 (~0.20m); 150/146 collapse to ~1cm at z≈2.06 for most heights
- 150 still has the free-edge verts at (2.132,y,1.865) and the back strip at z≈2.06 — **missing only the connecting triangles**
- −Z endcap incomplete in x (2.156–2.181 only)

## Patch (local audit152 only)
- Added **30** triangles stitching existing front↔back −X verts (index-only; 0 new verts; bake unchanged)
- audit150 snapshot untouched; nothing published; no geometry removed

## Residual
- Kids jamb (hyb 192 vs 150 166 −X tris) not in this patch
- Endcap x-gap 2.132–2.156 may still need a thin fill if silhouette remains after visual check
- Gate + publish only after parent authorizes
