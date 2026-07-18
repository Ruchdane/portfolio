{
  description = "Development environment for a Node.js project";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";
    # unstable.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        # to use other shells, run:
        # nix develop . --command fish
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_26
            pkgs.pnpm_11
            pkgs.ripgrep
            pkgs.htmlq
            pkgs.woff2
          ];

          shellHook = ''
            echo "node: $(node -v)"
            echo "pnpm: $(pnpm -v)"
            echo "To install dependencies, run: pnpm install"
          '';
        };

        packages.default = pkgs.writeShellScriptBin "setup-project" ''
          pnpm install --frozen-lockfile
        '';
      });
}
