# Map-Pi

Map-Pi is CAK3D's Appalachian Trail buddy prototype for a Raspberry Pi Zero 2 WH + phone/PWA workflow.

## Current prototype

- Mobile-first AllTrails-inspired dashboard
- Tailscale/Wi-Fi web UI instead of Bluetooth screen casting
- Browser Geolocation button for phone testing
- Mock Appalachian Trail progress, waypoints, weather, altitude, and camp/manual panels
- Future-ready placeholders for GPS module input, Supabase, GitHub, Ollama, and offline public datasets

## Run

```bash
npm install
npm run dev
# http://100.100.4.60:4317/ over Tailscale
```

## Hardware notes

The Raspberry Pi Zero 2 WH should serve lightweight local web UI/data collection. Heavy vision/Ollama work should route to a stronger local-network machine unless a tiny model proves usable.

## Safety note

Plant identification and edible guidance must never be treated as guaranteed. Require uncertainty language and multiple-source/manual confirmation before consumption.
