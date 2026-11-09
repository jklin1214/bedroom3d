# XH-OFF157 / cap157 (test150 only)

## Cause
Visual narrow see-through at C01 partition/door junction (buffer ~x983–988) after Xh off.
Offline: **p1** has 162 wall −Z faces at z≈2.03 spanning x=2.132–2.214, y=0–2.8 (door-south jamb return).
**live / XH-OFF156** had **0** such faces. Door only has ~1mm −Z strips at x≈2.13.

## Fix
- Keep XH-OFF156 behaviour (Xh off by default, `?xh=on` restores).
- Append front-facing −Z cap on `wall` and `wall__p`: z=2.0296, x=2.1321–2.2141, y=0–2.8 (2 tris each).
- New verts + bake median from nearby −X wall verts (matches adjacent bake01≈0.204).
- No other coplanar −Z in that plane → no z-fight.

## Offline checks
- New faces fn=(0,0,−1); direct ray hits front with bake=adjacent.
- Gap-column samples (980–994): 60/60 front-first, 0 back-only.
- Root/preview untouched.
