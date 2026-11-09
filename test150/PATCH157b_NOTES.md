# cap157b — load fix

## Cause
cap157 appended wall/wall__p bake at end of light packs (bake off 9271148 / 9661588)
and grew PNGs to 2048×1625 (rgb_cap 9984000), updated `lightBytes`→9979336,
but left `variants.*.bytes` at **9271149** (pre-append).

main.js `Vh(png, variants.bytes)` therefore built an ArrayBuffer of only 9271157 bytes.
`new Uint16Array(E, wall.bake=9271148, wall.n*3=195219)` → Chrome
`RangeError: Invalid typed array length: 195219`.

## Fix
Set all `variants.*.bytes` = `lightBytes + 1` = **9979337** (same +1 pattern as xh156).
Geo unchanged. Cap geo retained.

## Decoder check
`rebuild/dump/check_mainjs_decode.py` mirrors Vh + typed-array construction.
root / preview / xh156 / test150_cap157b → all OK.
Synthetic old bytes reproduces `Invalid typed array length: 195219`.
