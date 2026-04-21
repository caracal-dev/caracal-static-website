# Caracal Wiki

Caracal is a Fedora Atomic image tuned for audio production, with native Linux DAWs, Wine TKG, and yabridge support for Windows plugins where practical.

This page tracks common DAWs and plugins people are likely to ask about. Individual pages can be added later for setup notes, known issues, workarounds, and screenshots. For now, item names are written in wiki-link form so they are ready to become dedicated pages.

## Status Legend

- 🟢 `Works` means expected to be usable on Caracal without a major blocker.
- 🟡 `Partial` means it may work with caveats, reduced functionality, or extra setup.
- 🟠 `Not Yet Supported` means Linux support may exist, but Caracal does not currently ship it in the image or provide an integrated installer/build-script path for it yet.
- 🔴 `No` means it is generally not a good fit for Caracal/Wine workflows.
- 🔵 `Native` means a Linux-native version exists and is the preferred path on Caracal.
- ⚪ `Unknown` means it has not been confirmed in the wiki yet.

## DAW And Plugin Compatibility

| Product | Type | Tested On Caracal | Status | Native Linux Version | Open-Source Alternative | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [[REAPER]] | DAW | Yes | 🔵 Native | Yes | [[Ardour]] | Caracal ships an installer script for REAPER and it is one of the clearest supported commercial DAW paths. |
| [[Bitwig Studio]] | DAW | Yes | 🔵 Native | Yes | [[Ardour]] | Caracal ships an installer script for Bitwig. Native Linux build is preferred over Wine. |
| [[Renoise]] | DAW | Yes | 🔵 Native | Yes | [[Qtractor]] | Caracal ships an installer script for the Renoise demo/native build. |
| [[Ardour]] | DAW | Yes | 🔵 Native | Yes | N/A | Included by default in Caracal and the baseline open-source DAW reference point. |
| [[Qtractor]] | DAW | Yes | 🔵 Native | Yes | [[Ardour]] | Included by default; lightweight native Linux DAW and sequencer. |
| [[Carla]] | Host / Patchbay | Yes | 🔵 Native | Yes | N/A | Included by default and useful as both a host and compatibility troubleshooting tool. |
| [[FL Studio]] | DAW | No | 🟡 Partial | No | [[Ardour]] | Often reported as possible under Wine, but plugin bridging, ASIO routing, and updates can be fragile. |
| [[Ableton Live]] | DAW | No | 🟡 Partial | No | [[Ardour]] | Possible to get it running under Wine/yabridge, but it should be treated as experimental until tested on Caracal directly. |
| [[Studio One]] | DAW | No | 🟠 Not Yet Supported | Yes | [[Ardour]] | PreSonus now provides a native Linux Flatpak, but Caracal does not currently support it as a recommended path because Flatpak packaging limits practical use with external plugins. |
| [[Cubase]] | DAW | No | 🔴 No | No | [[Ardour]] | Steinberg tooling and copy protection make it a bad fit for Linux Wine-based setups. |
| [[Pro Tools]] | DAW | No | 🔴 No | No | [[Ardour]] | iLok and driver expectations make this effectively unsupported on Caracal. |
| [[FabFilter Pro-Q 3]] | Plugin | No | 🟢 Works | No | [[LSP Plugins]] | A common yabridge target and one of the more realistic modern Windows plugin use cases on Linux. |
| [[FabFilter Pro-L 2]] | Plugin | No | 🟢 Works | No | [[x42 Plugins]] | Usually a better candidate than heavily protected instrument suites. |
| [[FabFilter Saturn 2]] | Plugin | No | 🟢 Works | No | [[Guitarix]] | Expected to behave similarly to other standard FabFilter effects under yabridge. |
| [[Xfer Serum]] | Instrument | No | 🟡 Partial | No | [[Surge XT]] | Frequently attempted on Linux, but GPU/UI behavior and installer flow can vary. |
| [[Vital]] | Instrument | No | 🟠 Not Yet Supported | Yes | [[Surge XT]] | Native Linux builds exist, but Caracal does not yet ship it in the image or provide an integrated installer flow for it. |
| [[Kontakt 7]] | Sampler | No | 🔴 No | No | [[Decent Sampler]] | Native Access and library management are the usual blockers. |
| [[Superior Drummer 3]] | Instrument | No | 🟡 Partial | No | [[Hydrogen]] | Some users report partial success under Wine, but large content installs and authorization are pain points. |
| [[Addictive Drums 2]] | Instrument | No | 🟡 Partial | No | [[Hydrogen]] | Possible in some Wine setups, but not something Caracal should promise yet. |
| [[EZdrummer 3]] | Instrument | No | 🟡 Partial | No | [[Hydrogen]] | Similar caveats to Superior Drummer, with content-management overhead. |
| [[Valhalla VintageVerb]] | Plugin | No | 🟢 Works | No | [[Dragonfly Reverb]] | A strong candidate for yabridge use because it is comparatively simple and lightweight. |
| [[Valhalla Delay]] | Plugin | No | 🟢 Works | No | [[Dragonfly Reverb]] | Expected to be one of the safer proprietary effects under Wine/yabridge. |
| [[iZotope Ozone]] | Plugin | No | 🔴 No | No | [[LSP Plugins]] | Heavy DRM, installer complexity, and UI acceleration make the Ozone suite a poor Linux target. |
| [[iZotope RX]] | Plugin / Suite | No | 🔴 No | No | [[Tenacity]] | RX standalone and plugin flows are not a realistic Caracal target at the moment. |
| [[Native Instruments Massive]] | Instrument | No | 🟡 Partial | No | [[Surge XT]] | Older NI plugins can be more realistic than Kontakt, but Native Access remains a limitation. |
| [[Native Instruments Reaktor]] | Instrument | No | 🔴 No | No | [[VCV Rack]] | Activation and runtime complexity make it a weak Wine candidate. |
| [[Omnisphere]] | Instrument | No | 🔴 No | No | [[Surge XT]] | Large libraries and authorization complexity make this an unrealistic Caracal target. |
| [[Keyscape]] | Instrument | No | 🔴 No | No | [[LostAndFoundPiano]] | Same general Spectrasonics constraints as Omnisphere. |
| [[Spitfire LABS]] | Instrument | No | 🟡 Partial | No | [[Decent Sampler]] | Possible in some setups, but library delivery and account tooling are the risk areas. |
| [[Helix Native]] | Plugin | No | 🟡 Partial | No | [[Guitarix]] | Usable in theory with Wine/yabridge, but licensing and UI testing need direct confirmation. |
| [[Neural DSP Plugins]] | Plugin | No | 🟡 Partial | No | [[AIDA-X]] | Possible but plugin-specific authorization behavior varies enough that they should remain provisional here. |
| [[Melodyne]] | Plugin | No | 🔴 No | No | [[Tenacity]] | Deep DAW integration and licensing friction make this a poor Linux recommendation. |
| [[Waves Plugins]] | Plugin Suite | No | 🔴 No | No | [[LSP Plugins]] | Waves Central is the main blocker; may work but not a practical target for a curated Caracal workflow. |
| [[OTT (Xfer)]] | Plugin | No | 🟢 Works | No | [[LSP Plugins]] | Small, simple effects like OTT are usually much more realistic than complex suites. |
| [[SPAN]] | Plugin | No | 🟢 Works | No | [[x42 Plugins]] | Utility plugins tend to be among the safest Windows-plugin bridge candidates. |

## Suggested Next Pages

- [[Studio One]]
- [[Vital]]
- [[Hardware Compatibility]]

- [[REAPER]]
- [[Bitwig Studio]]
- [[Renoise]]
- [[FL Studio]]
- [[Ableton Live]]
- [[FabFilter Pro-Q 3]]
- [[Xfer Serum]]
- [[Kontakt 7]]
- [[Valhalla VintageVerb]]
- [[Neural DSP Plugins]]

## Hardware Compatibility

This section is intentionally broad and practical. It is meant to give users a quick sense of what classes of audio hardware are likely to behave well on Caracal before there are model-specific pages.

| Hardware | Category | Tested On Caracal | Status | Recommended On Caracal | Open-Source Tooling / Fallback | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [[USB Audio Interfaces (Class Compliant)]] | Audio Interface | Yes | 🟢 Works | Yes | [[PipeWire]], [[QjackCtl]], [[Carla]] | The safest general recommendation on Linux. Most modern class-compliant USB interfaces should work well without vendor software. |
| [[Focusrite Scarlett 2nd/3rd/4th Gen]] | Audio Interface | Yes | 🟢 Works | Yes | [[PipeWire]], [[QjackCtl]] | Common Linux choice. Core I/O is usually fine, though advanced vendor-control features may vary by generation. |
| [[Behringer UMC Series]] | Audio Interface | Yes | 🟢 Works | Yes | [[PipeWire]], [[QjackCtl]] | Widely used as straightforward class-compliant interfaces. |
| [[MOTU M Series]] | Audio Interface | Yes | 🟢 Works | Yes | [[PipeWire]], [[QjackCtl]] | Generally regarded as Linux-friendly USB interfaces for basic recording and playback. |
| [[PreSonus AudioBox Series]] | Audio Interface | No | 🟢 Works | Yes | [[PipeWire]], [[QjackCtl]] | Usually fine as standard USB interfaces; ignore expectations around proprietary control software. |
| [[RME USB Interfaces]] | Audio Interface | No | 🟡 Partial | Yes | [[PipeWire]], [[QjackCtl]] | Core audio may work, but TotalMix-style vendor workflows are not the Linux story users should expect. |
| [[Universal Audio Apollo]] | Audio Interface | No | 🔴 No | No | [[PipeWire]] | Vendor DSP control and software integration make Apollo a poor recommendation for Caracal. |
| [[Thunderbolt Audio Interfaces]] | Audio Interface | No | 🟡 Partial | Maybe | [[PipeWire]], [[QjackCtl]] | Possible, but controller, firmware, and device-specific behavior can make this inconsistent compared with USB class-compliant gear. |
| [[FireWire Interfaces]] | Audio Interface | No | 🟡 Partial | Maybe | [[FFADO]], [[QjackCtl]] | Caracal includes `ffado`, but FireWire support depends heavily on chipset, kernel behavior, and older hardware quirks. |
| [[MIDI Keyboards (Class Compliant USB)]] | MIDI Controller | No | 🟢 Works | Yes | [[VMPK]], [[QSynth]], [[QMidiArp]] | One of the easiest hardware classes on Linux. Standard note/control input is usually uneventful. |
| [[Ableton Push 2]] | MIDI Controller | No | 🟡 Partial | Maybe | [[Carla]], [[Ardour]] | Can be used as a controller, but deep scripted integration is not the same story as on Ableton Live. |
| [[Novation Launchkey / Launchpad]] | MIDI Controller | Yes | 🟢 Works | Yes | [[Ardour]], [[Qtractor]] | Standard MIDI behavior is usually fine; advanced DAW scripts vary by application. |
| [[Arturia Minilab / KeyLab]] | MIDI Controller | Yes | 🟢 Works | Yes | [[Ardour]], [[Qtractor]] | Good fit when used as standard MIDI devices rather than with vendor control-center expectations. |
| [[Native Instruments Komplete Kontrol Keyboards]] | MIDI Controller | No | 🟡 Partial | Maybe | [[Ardour]], [[Qtractor]] | Basic MIDI input is realistic; proprietary deep integration and browser workflows are not. |
| [[Control Surfaces (Mackie Control Compatible)]] | Control Surface | No | 🟢 Works | Yes | [[Ardour]], [[Qtractor]] | Mackie Control style devices are usually the safest bet for transport and mixer integration. |
| [[NVIDIA GPUs]] | Graphics | No | 🟡 Partial | Maybe | N/A | Adding an image for this in near future.  |
| [[AMD GPUs]] | Graphics | No | 🟢 Works | Yes | N/A | Typically the smoother Linux graphics path for a production workstation. |
| [[USB DACs / Headphone Interfaces]] | Monitoring | No | 🟢 Works | Yes | [[PipeWire]] | Usually simple and reliable when class compliant. |
