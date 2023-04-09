#!/usr/bin/env python3
import json
import argparse
import sys
import io

"""
Check npm audit for vulnerability severities and fail above threshold

Args:
    -t --threshold     Fail with non-zero exit code on or above this severity
    -d --debug         Enable debug output
    -v --version       Print the installed version of npm-audit-checker
"""

version_number = "0.0.1"


def parse_arguments():
    PARSER = argparse.ArgumentParser(description="npm audit checker CLI")
    PARSER.add_argument(
        "-t",
        "--threshold",
        help="Severity to fail on or above",
        default="high",
        choices=["low", "moderate", "high", "critical"],
    )
    PARSER.add_argument(
        "-d", "--debug", help="Enable debug output", action="store_true"
    )
    PARSER.add_argument(
        "-v",
        "--version",
        help="Show the installed version of npm-audit-checker",
        action="store_true",
    )
    return PARSER.parse_args()


def run():
    ARGS = parse_arguments()
    threshold = ARGS.threshold
    debug = ARGS.debug
    version = ARGS.version

    if version:
        print("npm-audit-checker version: v{}".format(version_number))
        sys.exit(0)

    if debug:
        print("Debug mode enabled!")

    print("Threshold set to {}".format(threshold))

    try:
        json_data = json.load(sys.stdin)
    except:
        print("Couldnt parse json from stdin")
        sys.exit(1)

    try:
        vulnerabilities = json_data["data"]["vulnerabilities"]
        info = vulnerabilities["info"]
        low = vulnerabilities["low"]
        moderate = vulnerabilities["moderate"]
        high = vulnerabilities["high"]
        critical = vulnerabilities["critical"]
    except:
        print(
            "Missing fields from json\nRun:\n$ npm audit --json --summary | npm-audit-checker\n"
        )
        sys.exit(1)

    failure = False

    if info + low + moderate + high + critical == 0:
        print("There are no vulnerabilities...")
        return

    if threshold == "info" and info + low + moderate + high + critical > 0:
        failure = True
    elif threshold == "low" and low + moderate + high + critical > 0:
        failure = True
    elif threshold == "moderate" and moderate + high + critical > 0:
        failure = True
    elif threshold == "high" and high + critical > 0:
        failure = True
    elif threshold == "critical" and critical > 0:
        failure = True

    if failure == True:
        print("Threshold breached :-(")
        sys.exit(1)
    else:
        print("Threshold not breached :-)")

    print(json.dumps(json_data, indent=2))


run()