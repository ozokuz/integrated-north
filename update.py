from pathlib import Path
import sys
import json
import tomlkit
import subprocess

MODS_DIR = Path.cwd() / "mods"
PACK_FILE = Path.cwd() / "pack.toml"
BCC_FILE = Path.cwd() / "config" / "bcc-common.toml"
CACHE_FILE = Path.cwd() / ".side_cache.json"


# ---------------- CACHE ----------------

def load_cache():
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {}

def save_cache(cache):
    CACHE_FILE.write_text(json.dumps(cache, indent=2), encoding="utf-8")


# ---------------- VERSION UPDATE ----------------

def update_version(version: str):
    # ---- pack.toml ----
    if PACK_FILE.exists():
        try:
            data = tomlkit.parse(PACK_FILE.read_text(encoding="utf-8"))
            data["version"] = version
            PACK_FILE.write_text(tomlkit.dumps(data), encoding="utf-8")
            print(f"Updated pack.toml version → {version}")
        except Exception as e:
            print(f"Failed to update pack.toml: {e}")
    else:
        print("pack.toml not found")

    # ---- bcc-common.toml ----
    if BCC_FILE.exists():
        try:
            data = tomlkit.parse(BCC_FILE.read_text(encoding="utf-8"))

            if "general" not in data or not isinstance(data["general"], dict):
                data["general"] = tomlkit.table()

            data["general"]["modpackVersion"] = version
            BCC_FILE.write_text(tomlkit.dumps(data), encoding="utf-8")
            print(f"Updated bcc-common.toml general.modpackVersion → {version}")
        except Exception as e:
            print(f"Failed to update bcc-common.toml: {e}")
    else:
        print("config/bcc-common.toml not found")


# ---------------- MOD PROCESSING ----------------

def process_mods():
    if not MODS_DIR.exists():
        print("mods folder not found")
        return

    cache = load_cache()
    new_cache = {}

    for toml_file in MODS_DIR.glob("*.toml"):
        try:
            data = tomlkit.parse(toml_file.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"Failed to parse {toml_file.name}: {e}")
            continue

        modified = False
        side = None

        # ---- side field ----
        if "side" in data:
            if data["side"] == "":
                data["side"] = "both"
                side = "both"
                modified = True
            else:
                side = str(data["side"])

            # Only log if not "both" and changed since last run
            if side and side != "both":
                old = cache.get(toml_file.name)
                if old != side:
                    print(f"{toml_file.name}: side = {side}")

        if side:
            new_cache[toml_file.name] = side

        # ---- download section ----
        download = data.get("download")
        if isinstance(download, dict):
            if download.get("mode") == "metadata:curseforge":
                if "url" in download:
                    del download["url"]
                    modified = True

        if modified:
            toml_file.write_text(tomlkit.dumps(data), encoding="utf-8")
            print(f"Updated {toml_file.name}")

    save_cache(new_cache)

# ---------------- PACKWIZ ----------------

def run_packwiz_refresh():
    print("\nRunning packwiz refresh...\n")
    try:
        result = subprocess.run(
            ["packwiz", "refresh"],
            check=True
        )
    except FileNotFoundError:
        print("Error: packwiz not found in PATH")
    except subprocess.CalledProcessError as e:
        print(f"packwiz refresh failed with exit code {e.returncode}")

# ---------------- MAIN ----------------

def main():
    if len(sys.argv) != 2:
        print("Usage: python update.py <version>")
        sys.exit(1)

    version = sys.argv[1]

    update_version(version)
    process_mods()
    run_packwiz_refresh()


if __name__ == "__main__":
    main()
