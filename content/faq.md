+++
title = "Caracal FAQ"
description = "Common questions about Caracal — what it is, whether your existing plugins and DAWs will work, and how to get started."
eyebrow = "Common Questions"
date = 2025-02-08T00:00:00Z
[sitemap]
  priority = 0.8
+++

## What is Caracal?

Caracal is a version of Linux built specifically for music production. Where a standard Linux system leaves you to figure out audio configuration, drivers, and which software to install, Caracal arrives with the audio base already sorted: low-latency settings, routing, core DAWs, Windows VST support, and a curated software installer for adding the larger DAW and plugin catalog.

## Is this Linux? I've heard Linux audio is a nightmare.

That reputation was earned, and for most Linux systems it's still fair. Caracal exists to fix that specific problem. The audio system is pre-configured, your audio interface should work immediately, and low-latency settings are already in place. You shouldn't need to follow a forum guide just to get a signal going.

## Who is Caracal for?

Anyone making music on a computer who wants a system that just works. It's especially relevant if you're moving away from Windows — whether because Windows 10 is losing support, Windows 11 has been unreliable, or you're tired of forced updates, bloat, and things breaking after patches. Caracal gives you a clean, stable alternative without having to abandon your DAWs or plugin library.

## What desktop environment does it use?

KDE Plasma. Caracal is built on Fedora Kinoite, which uses KDE as its desktop. If you're coming from Windows, KDE will feel reasonably familiar — a taskbar, a start-menu-style launcher, and a windowed app layout. It's also highly customisable if you want to change how it looks or behaves.

## What is Fedora Kinoite? What's the base system?

Fedora Kinoite is an official Fedora variant that uses KDE Plasma and an immutable (image-based) system model. Caracal is built on top of it using `bootc`, which is a tool for managing and updating image-based Linux systems. You don't need to understand any of this to use Caracal, but if you're already a Linux user, this is the technical answer: it's a `bootc`-managed OCI container image derived from Fedora Kinoite.

## What is `ujust`?

`ujust` is a command runner that comes with Fedora Atomic systems — a collection of shortcut commands for common tasks like installing software and running setup steps. When you see `ujust something`, it's running a pre-written script the Caracal team has set up for that task.

## Will my Windows VST plugins work?

Most of them, yes. Caracal includes built-in support for running Windows VST2 and VST3 plugins on Linux. The first-time setup handles the compatibility layer (Wine and Yabridge) automatically — you don't need to install or configure anything extra.

Plugin compatibility does vary. Some plugins work perfectly, some have minor quirks, and a small number don't load at all. The [compatibility wiki](/wiki/) has notes on specific plugins so you can check before you commit.

## Can I use REAPER, Bitwig, or Renoise?

Yes. These are popular with producers coming from Windows and they all install cleanly on Caracal. They aren't included in the base system to keep things lean, but the bundled software installer puts them one click away. You can also install them individually:

```bash
ujust install-reaper
ujust install-renoise
ujust install-bitwig
```

## What's included out of the box?

**DAWs:** Ardour 9, Qtractor, and Carla as a standalone plugin host.

**Effects and instruments:** LSP Plugins, Calf, Guitarix, Vitalium, DISTRHO DrumSynth, DISTRHO EQuinox, Hydrogen, and Carla LV2 integration.

**Audio system:** PipeWire and JACK are already configured and routing correctly.

**Compatibility and workflow tools:** Wine TKG, Yabridge, Winetricks, QjackCtl, Helvum, EasyEffects, Ghostty, Zsh, Neovim, Distrobox, AppImageLauncher.

The larger catalog lives in the Caracal Software Installer.

## What is the Caracal Software Installer?

Caracal's curated post-install catalog for music software. It includes a desktop app, a terminal UI, and CLI helpers for installing and uninstalling optional DAWs, instruments, effects, and utilities. The installer can queue multiple selections and detect installed software.

Current catalog highlights include REAPER, Renoise, Bitwig Studio, Mixbus, Zrythm, Cardinal, VCV Rack 2, Surge XT, Decent Sampler, Dragonfly Reverb, BYOD, AIDA-X, Neural Amp Modeler, and more.

## Does it work with my audio interface?

Probably. Most USB and Thunderbolt audio interfaces that work on Linux will work on Caracal. Class-compliant interfaces work without any setup. Interfaces that need proprietary drivers — which is rare on Linux — may need extra steps or may not be supported. If you're not sure, the [compatibility wiki](/wiki/) is a good starting point.

## What about PipeWire and JACK — what's the difference?

PipeWire is the main audio system on modern Linux. JACK is an older professional audio protocol for low-latency routing between applications. On Caracal, PipeWire runs JACK compatibility underneath, so applications that expect JACK work without a separate server. Open Ardour, connect your hardware, and record — the routing just works.

## Is there an ISO I can just download and install?

Yes. Caracal has early access installer images for AMD / Intel and NVIDIA systems, and you can download the matching ISO from the homepage. Stage images (pre-release) are also available for testing.

If you're already on a compatible Fedora Atomic desktop, the in-place switch path is still fully supported:

```bash
sudo bootc switch ghcr.io/caracal-dev/caracal:latest
```

## Can I try it in a virtual machine first?

Yes. Pre-built VM images save you the setup:

- **Latest release (qcow2):** [caracal-latest-amd64.qcow2](https://downloads.caracal-os.org/caracal-latest-amd64.qcow2)
- **Stage/pre-release (ISO):** [caracal-stage-latest-amd64.iso](https://downloads.caracal-os.org/caracal-stage-latest-amd64.iso)
- **Stage/pre-release (qcow2):** [caracal-stage-latest-amd64.qcow2](https://downloads.caracal-os.org/caracal-stage-latest-amd64.qcow2)

Alternatively, install Fedora Kinoite in a VM and switch it to Caracal with the same `bootc switch` command you'd use on real hardware.

## Which Linux systems can I switch from?

Any `bootc`-compatible Fedora Atomic system. That includes Fedora Kinoite, Bazzite, Bluefin, Aurora, and similar Fedora Atomic variants. If you're not sure whether your current system qualifies, check whether it uses `rpm-ostree` or `bootc` for system updates — if it does, the switch command should work.

## Will switching to Caracal erase my files?

No. The `bootc switch` command replaces the system image, not your home directory. Your documents, projects, and personal files stay in place. That said, it's always good practice to back up anything important before making major system changes.

## How do I get started right now?

Switch to Caracal from a compatible Fedora Atomic desktop:

```bash
sudo bootc switch ghcr.io/caracal-dev/caracal:latest
```

After rebooting, run the one-time setup:

```bash
ujust first-run
```

That adds your user account to the groups needed for low-latency audio, sets up Windows plugin compatibility, and applies the first-boot configuration. Then open the software installer to add any extra DAWs, plugins, instruments, or tools you want.

## What does `ujust first-run` do?

It handles the guided post-install setup in one step: adds your user to the `audio` and `realtime` groups (needed for low-latency audio access), installs shell extras, and sets up Yabridge for Windows plugin compatibility. You only need to run it once, and you'll need to log out and back in afterward for the group changes to take effect.

## How do I roll back if an update causes problems?

Reboot and select the previous deployment from the boot menu (it appears as an older entry in the GRUB bootloader list). Your previous working system is kept alongside the new one and is always available to boot into. Once you've confirmed an update is working correctly, the old deployment is cleaned up automatically over time.

If you want to roll back from within the running system:

```bash
sudo bootc rollback
```

Then reboot.

## Do I need to configure low-latency audio settings manually?

No. The settings that reduce audio delay are already configured — CPU performance mode, priority access to audio hardware, the works. Plug in your interface, open your DAW, and record. You shouldn't need to touch any system settings to get a clean, low-latency signal.

## Why does the site say updates can't break my system?

On a traditional system, updates modify the running system in place. A bad update can silently break things, and rolling back is painful or impossible.

Caracal uses an image-based model. Updates are applied as a complete new system snapshot alongside your current setup. If an update causes a problem, you can boot back into the previous version in seconds. Your home directory sits separate from the system image.

## Can I install software that isn't in the bundled installer?

Yes. Two main paths:

- **Flatpak** for GUI apps — most major desktop applications are available this way.
- **Homebrew** for command-line tools — everything installs into your home directory, unaffected by system updates.

One caveat: because Caracal uses a `bootc`-managed image, packages layered with `rpm-ostree` will be wiped when the system image updates. Stick to Flatpak and Homebrew for anything you want to keep long-term.

## What kernel does Caracal use?

Caracal replaces Fedora's stock kernel with the Bazzite kernel and layers audio-focused realtime configuration on top: performance CPU governor defaults, realtime/memlock limits for audio users, `realtime-setup`, and realtime tuned profiles. The goal is low-latency audio without asking users to assemble those pieces manually.

## How do I verify the ISO download?

Download the ISO and its matching checksum file from the homepage into the same folder, then run the command for the image you downloaded:

```bash
sha256sum -c caracal-latest-amd64.iso-CHECKSUM
```

```bash
sha256sum -c caracal-nvidia-latest-amd64.iso-CHECKSUM
```

If the checksum matches, your ISO download is intact.

## How do I verify the Caracal image with Cosign?

Published Caracal container images are signed with Cosign to verify the image is genuine and hasn't been tampered with.

```bash
cosign verify --key cosign.pub ghcr.io/caracal-dev/caracal:latest
```

The public key (`cosign.pub`) is in the project's GitHub repository. Optional — most users won't need it.

## Can I use Caracal alongside Windows as a dual boot?

Yes, dual booting is possible. Linux and Windows can coexist on the same machine with each system on its own partition. If you're setting this up from scratch, install Windows first, then install your Fedora Atomic base system alongside it, and switch to Caracal from there. Most modern machines handle dual booting without issues, though the exact steps depend on your hardware and whether you have Secure Boot enabled.

## Where do I find compatibility notes for specific plugins or hardware?

The [compatibility wiki](/wiki/) is the right place — it covers DAWs, specific plugins, and hardware. The FAQ is for general orientation. For anything not covered there, the project has a community space where you can ask.
