#!/usr/bin/env python3
import argparse
import sys
from typing import Optional, List

def command_install(args: argparse.Namespace):
    """Handler for the 'install' subcommand."""
    print(f"Installing package: {args.package}")
    if args.force:
        print("Force mode enabled")
    print("Installation complete.")

def command_config(args: argparse.Namespace):
    """Handler for the 'config' subcommand."""
    print(f"Setting configuration key='{args.key}' value='{args.value}'")

def main(argv: Optional[List[str]] = None) -> int:
    """
    Main entry point for the CLI application.
    """
    parser = argparse.ArgumentParser(
        description="A template CLI application.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Examples:\n  app.py install my-pkg --force\n  app.py config db.host localhost"
    )
    
    parser.add_argument(
        '-v', '--verbose', 
        action='store_true', 
        help="Enable verbose output"
    )
    
    parser.add_argument(
        '--version', 
        action='version', 
        version='%(prog)s 1.0.0'
    )

    # Subcommands
    subparsers = parser.add_subparsers(
        dest='command', 
        title='commands', 
        description='Available commands',
        help='Use <command> --help for more info'
    )

    # Subcommand: install
    parser_install = subparsers.add_parser('install', help='Install a package')
    parser_install.add_argument('package', type=str, help='Name of the package')
    parser_install.add_argument('--force', action='store_true', help='Force installation')
    parser_install.set_defaults(func=command_install)

    # Subcommand: config
    parser_config = subparsers.add_parser('config', help='Update configuration')
    parser_config.add_argument('key', type=str, help='Config key')
    parser_config.add_argument('value', type=str, help='Config value')
    parser_config.set_defaults(func=command_config)

    # Parse arguments
    args = parser.parse_args(argv)

    if args.verbose:
        print("Verbose mode on")

    if not args.command:
        parser.print_help()
        return 1

    # Execute the selected command handler
    if hasattr(args, 'func'):
        try:
            args.func(args)
            return 0
        except Exception as e:
            print(f"Error: {e}", file=sys.stderr)
            return 1
            
    return 0

if __name__ == "__main__":
    sys.exit(main())
