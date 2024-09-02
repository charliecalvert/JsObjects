# Attempt to build the project
build_project() {
    local dir=$1
    echo "Building project in directory: $dir"
    pwd
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed in directory: $dir"
        return 1
    fi
    return 0
}

# Iterate through directories containing package.json
find . -name package.json \
    -not -path '*/node_modules/*' \
    -not -path '*/.git/*' | while read -r package_json; do
    dir=$(dirname "$package_json")
    build_project "$dir"
    if [ $? -ne 0 ]; then
        echo "Exiting loop due to build failure."
        exit 1
    fi
done

echo "All projects built successfully."
