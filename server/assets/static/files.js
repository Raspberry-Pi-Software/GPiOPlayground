const getAvailablePathsInDir = async (dir, only_dirs) => {
    const get_directory_paths = await (await fetch(`/get/paths`, {
        "headers": {
            "path": dir,
            "only_dirs": only_dirs
        }
    })).json();
    return get_directory_paths;
}

export { getAvailablePathsInDir }
