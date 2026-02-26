{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem
    (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells = {
          default = with pkgs;
              mkShell rec {
                name = "deault";

                packages = [
                  nodejs
                  yarn
                  python3
                ];

                nativeBuildInputs = [
                ];
                buildInputs = [
                ];
                LD_LIBRARY_PATH = lib.makeLibraryPath buildInputs;
              };
        };
      }
    );
}
