# XH-OFF156 (test150 only)

## What
- Default: do **not** create wall/door/cabinet BackSide Xh bake overlays (original author feature in p1 + runtime).
- Restore old behaviour: `?xh=on`
- Geo: baseline146 (preview fa09bb6 / ntri 107011) with **37** zero-area index collapses only (30 degenerates + 7 inverted +X-plane faces in C01 partition box). Verts/bake untouched; ntri unchanged.
- Skipped coplanar-under-giant drop: offline rays showed those small −X faces are real first hits for many C01 pixels; collapsing them left back-only hits.

## Why Xh exists (investigation)
- Present in **p1** `04_網站成品/index.html` (author): BackSide ShaderMaterial clones for `wall`/`cabinet`/`door` bake — not invented in rebuild.
- Runtime `__xhv`: hide all Xh during cutaway (`__cutn`); in play, show `__p` Xh and hide base Xh for `__PDUP` meshes (PROGRESS 6/5 play bug fix).
- Cutaway caps use separate `Kf` BackSide materials — **not** Xh. So cutaway does not require Xh.
- Keeping Xh only for `__p` was considered; black teeth are on base `wall`, so full default-off is the right A/B. Use `?xh=on` if play/cutaway/hole checks regress.

## Offline see-through with Xh off (sparse grid, wall only)
- C01: 4.4% samples back-only (no near front)
- kids_jamb: 1.8%
- hall_door: 8.8%
- liv/mbed: 0%
These are candidates Xh was covering; visual check required.

## Not changed
- Live root, /preview/, cam151 logic, DIAG155 button hooks (still present for matrix).
