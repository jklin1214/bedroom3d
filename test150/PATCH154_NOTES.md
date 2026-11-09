# DIAG154 notes (code-only)
## Visual DIAG153 evidence (not a diagnosis)
- last30 MAGENTA on FAR/RIGHT wall edge — NOT on near/LEFT teeth
- Hide name=wall: broad wall gone, teeth REMAIN
- Flat wall pink COVERS teeth (may be depth/side, not pure lighting proof)
- visible list showed wall/door/cabinet TWICE same ntri

## Runtime structure (source)
- For wall/door/cabinet, main.js adds BOTH:
  1) main mesh `ee` with `.name`
  2) Xh bake-overlay mesh `j` sharing same BufferGeometry, `userData.name`, renderOrder=1
- `__xhv`/`Nt` can restore Xh visibility after naive hide-by-name

## DIAG154
- Unique `__diagId` per Mesh
- List shows id, inXh, renderOrder, material side/depth/clip
- HideId removes from Xh (sticky); Hide ALL name= hides every duplicate
- PICK ON uses app Raycaster `Ff` — click reports id/face/world/normal/material + stacked hits
